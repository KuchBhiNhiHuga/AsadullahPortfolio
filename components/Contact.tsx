"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Container, SectionHeading, Button } from "./ui";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();

    if (!name || !email) {
      setStatus("error");
      setError("Enter your name and email so I can reply.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("That email address doesn&apos;t look right.");
      return;
    }

    setStatus("loading");
    // Wire this up to your form endpoint (e.g. Formspree, Resend, n8n webhook).
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    form.reset();
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <SectionHeading index="07" title="Start a project" />

        <div className="grid md:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5"
          >
            <p className="text-2xl text-text-primary leading-relaxed">
              Tell me what you&apos;re building — a new site, an automation, or a
              campaign that needs running. I&apos;ll reply within a day.
            </p>
            <dl className="mt-10 space-y-5">
              <div>
                <dt className="text-md font-semibold tracking-[0.1em] uppercase text-text-secondary">
                  Email
                </dt>
                <dd className="text-xl text-text-tertiary mt-1">
                  hello@asadullah.dev
                </dd>
              </div>
              <div>
                <dt className="text-md font-semibold tracking-[0.1em] uppercase text-text-secondary">
                  Availability
                </dt>
                <dd className="text-xl text-text-primary mt-1">
                  Open for new projects
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            noValidate
            className="md:col-span-7 bg-surface-muted rounded-lg p-7 md:p-9 shadow-1 space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-md font-semibold text-text-primary mb-2"
              >
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                disabled={status === "loading"}
                className="w-full rounded-sm border border-border/30 bg-surface-strong px-4 py-3 text-xl text-text-primary placeholder:text-text-muted
                  hover:border-border/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-1
                  disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-fast"
                placeholder="Amara Osei"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-md font-semibold text-text-primary mb-2"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                disabled={status === "loading"}
                aria-invalid={status === "error"}
                aria-describedby={status === "error" ? "contact-error" : undefined}
                className="w-full rounded-sm border border-border/30 bg-surface-strong px-4 py-3 text-xl text-text-primary placeholder:text-text-muted
                  hover:border-border/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-1
                  disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-fast
                  aria-[invalid=true]:border-red-500"
                placeholder="hello@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-md font-semibold text-text-primary mb-2"
              >
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                disabled={status === "loading"}
                className="w-full rounded-sm border border-border/30 bg-surface-strong px-4 py-3 text-xl text-text-primary placeholder:text-text-muted resize-none
                  hover:border-border/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-1
                  disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-fast"
                placeholder="What are you building?"
              />
            </div>

            {status === "error" && error && (
              <p id="contact-error" role="alert" className="text-md text-red-600">
                {error}
              </p>
            )}
            {status === "success" && (
              <p role="status" className="text-md text-emerald-700">
                Message sent — I&apos;ll get back to you within a day.
              </p>
            )}

            <Button type="submit" disabled={status === "loading"} className="w-full">
              {status === "loading" ? "Sending…" : "Send message"}
            </Button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
