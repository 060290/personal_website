"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { submitContact } from "@/app/contact/actions";

type FieldErrors = Record<string, string | undefined>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    setErrors({});
    const result = await submitContact(formData);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      if (result.errors) setErrors(result.errors as FieldErrors);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-8 text-center">
        <p className="text-lg font-medium text-[var(--color-fg)]">
          Message sent successfully.
        </p>
        <p className="mt-2 text-sm text-[var(--color-fg-muted)]">
          I’ll get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex h-9 items-center justify-center rounded-lg px-4 text-sm font-medium text-[var(--color-fg)] hover:bg-[var(--color-bg)]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[var(--color-fg)]"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 block w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-[var(--color-fg)] placeholder:text-[var(--color-fg-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          placeholder="Your name"
          disabled={status === "loading"}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[var(--color-fg)]"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 block w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-[var(--color-fg)] placeholder:text-[var(--color-fg-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          placeholder="you@example.com"
          disabled={status === "loading"}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-[var(--color-fg)]"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="mt-2 block w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-[var(--color-fg)] placeholder:text-[var(--color-fg-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          placeholder="What's this about?"
          disabled={status === "loading"}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.subject}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--color-fg)]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 block w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-[var(--color-fg)] placeholder:text-[var(--color-fg-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          placeholder="Your message..."
          disabled={status === "loading"}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.message}
          </p>
        )}
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400">
          Something went wrong. Please check the fields and try again.
        </p>
      )}
      <Button type="submit" variant="primary" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
