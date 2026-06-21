"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-surface-strong">
      <Container>
        <SectionHeading index="06" title="What clients say" />

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-surface-muted rounded-lg p-7 shadow-1 flex flex-col h-full"
            >
              <Quote className="text-text-tertiary mb-4" size={24} aria-hidden />
              <blockquote className="text-xl text-text-primary leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border/10">
                <p className="text-lg font-semibold text-text-primary">
                  {t.name}
                </p>
                <p className="text-md text-text-secondary">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <p className="text-md text-text-secondary mt-6">
          Placeholder attributions — swap in real client names once approved for quote.
        </p>
      </Container>
    </section>
  );
}
