"use client";

import { useState } from "react";
import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  const { contact, profile } = portfolio;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Opens the visitor's email app with the message filled in.
  // To receive messages without an email app, swap this for a service
  // like Formspree or Resend (see README.md).
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nReply to: ${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-lg border border-line bg-card px-4 py-3 text-base placeholder:text-muted/60";

  return (
    <Section id="contact" title={contact.title}>
      <p className="max-w-xl text-lg leading-relaxed text-muted">
        {contact.text}
      </p>
      <p className="mt-3">
        <a
          href={`mailto:${profile.email}`}
          className="font-medium text-accent underline underline-offset-4"
        >
          {profile.email}
        </a>
      </p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            required
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={field}
            placeholder="Tell me about your project or opportunity"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-ink px-6 py-3 text-sm font-medium text-paper transition hover:bg-accent"
        >
          Send message
        </button>
      </form>
    </Section>
  );
}
