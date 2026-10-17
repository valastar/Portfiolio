import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { portfolio } from "@/data/portfolio";

export const runtime = "nodejs";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export async function POST(req: Request) {
  try {
    const { name, email, message, website } = await req.json();

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

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    if (!user || !pass) {
      return NextResponse.json({ error: "Email not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const safeName = escapeHtml(name.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>");
    const owner = portfolio.profile.name;

    // 1) Message to you
    await transporter.sendMail({
      from: `"${owner} Portfolio" <${user}>`,
      to: portfolio.profile.email,
      replyTo: `"${name.trim()}" <${email}>`,
      subject: `Portfolio message from ${name.trim()}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    // 2) Confirmation to the visitor
    await transporter.sendMail({
      from: `"${owner}" <${user}>`,
      to: email,
      replyTo: portfolio.profile.email,
      subject: `Thanks for reaching out, ${name.trim()}!`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:520px;line-height:1.6">
          <h2>Hi ${safeName}, I got your message ✅</h2>
          <p>Thanks for contacting me. I'll read it and reply as soon as I can.</p>
          <p style="color:#555">Here's a copy of what you sent:</p>
          <blockquote style="border-left:3px solid #8B9CFF;margin:0;padding-left:12px;color:#444">
            ${safeMessage}
          </blockquote>
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