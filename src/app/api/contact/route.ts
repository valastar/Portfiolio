import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { portfolio } from "@/data/portfolio";

export const runtime = "nodejs";

const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? Redis.fromEnv()
    : null;

const limiters = redis
  ? {
      ip: new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(3, "10 m"),
        prefix: "contact:ip",
      }),
      email: new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(1, "1 h"),
        prefix: "contact:email",
      }),
    }
  : null;

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

async function verifyTurnstile(token: unknown, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return process.env.NODE_ENV !== "production"; // only skipped in dev
  if (typeof token !== "string" || !token) return false;
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token, remoteip: ip }),
      }
    );
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, message, website, token } = await req.json();

    // Honeypot: bots fill this hidden field, humans don't.
    if (website) return NextResponse.json({ ok: true });

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !isEmail(email) ||
      message.trim().length < 5 ||
      name.length > 100 ||
      email.length > 200 ||
      message.length > 5000
    ) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    // Fail closed in production if rate limiting isn't configured.
    if (!limiters && process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "Not configured" }, { status: 500 });
    }

    // 1) Rate limit by IP (before calling Turnstile)
    if (limiters && !(await limiters.ip.limit(ip)).success) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    // 2) Captcha
    if (!(await verifyTurnstile(token, ip))) {
      return NextResponse.json({ error: "Captcha failed" }, { status: 400 });
    }

    // 3) Rate limit by recipient: stops the form from being used to spam someone else
    if (
      limiters &&
      !(await limiters.email.limit(email.trim().toLowerCase())).success
    ) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    if (!user || !pass) {
      return NextResponse.json({ error: "Email not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    // Strip line breaks and quotes so they can't be used in headers
    const cleanName = name.trim().replace(/[\r\n"<>]+/g, " ");
    const safeName = escapeHtml(cleanName);
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>");
    const owner = portfolio.profile.name;

    // Message to you
    await transporter.sendMail({
      from: `"${owner} Portfolio" <${user}>`,
      to: portfolio.profile.email,
      replyTo: `"${cleanName}" <${email.trim()}>`,
      subject: `Portfolio message from ${cleanName}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    // Confirmation to the visitor (no echo of their message)
    await transporter.sendMail({
      from: `"${owner}" <${user}>`,
      to: email.trim(),
      replyTo: portfolio.profile.email,
      subject: `Thanks for reaching out, ${cleanName}!`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:520px;line-height:1.6">
          <h2>Hi ${safeName}, I got your message ✅</h2>
          <p>Thanks for contacting me. I'll read it and reply as soon as I can.</p>
          <p>— ${escapeHtml(owner)}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Could not send" }, { status: 500 });
  }
}