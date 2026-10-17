"use client";

import { useState } from "react";
import Section from "./Section";
import { portfolio } from "@/data/portfolio";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { contact, profile } = portfolio;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-lg border border-line bg-card px-4 py-3 text-base placeholder:text-muted/60";

  return (
    <Section id="contact" title={contact.title}>
      <p className="max-w-xl text-lg leading-relaxed text-muted">
        {contact.text}
      </p>

      {/* Contact channels */}
      <ul className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
        {contact.channels.map((c) => (
          <li key={c.label}>
            <a
              href={c.url}
              target={c.url.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex flex-col rounded-xl border border-line bg-card px-4 py-3 transition hover:border-accent"
            >
              <span className="text-xs uppercase tracking-wide text-muted">
                {c.label}
              </span>
              <span className="mt-0.5 break-all text-accent">{c.value}</span>
            </a>
          </li>
        ))}
      </ul>

      <h3 className="mb-1 mt-12 font-display text-lg font-semibold">
        Or send me a message
      </h3>
      <p className="text-sm text-muted">
        You'll get a confirmation email as soon as it arrives.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 max-w-xl space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            required
            maxLength={100}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={field}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            maxLength={200}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={field}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            maxLength={5000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={field}
            placeholder="Tell me about your project or opportunity"
          />
        </div>

        {/* Honeypot: hidden from humans */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-ink px-6 py-3 text-sm font-medium text-paper transition hover:bg-accent disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>

        <div aria-live="polite" className="text-sm">
          {status === "success" && (
            <p className="rounded-lg bg-tint px-4 py-3 text-accent">
              Message sent! Check your inbox, I just sent you a confirmation
              email (look in spam if you don't see it).
            </p>
          )}
          {status === "error" && (
            <p className="rounded-lg bg-tint px-4 py-3 text-red-400">
              Something went wrong. Please try again or email me directly at{" "}
              {profile.email}.
            </p>
          )}
        </div>
      </form>
    </Section>
  );
}