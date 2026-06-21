"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "./ui";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-surface-strong">
      <Container>
        <SectionHeading index="03" title="Experience" />

        <ol className="relative border-l border-border/20 pl-8 space-y-12">
          {experience.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative"
            >
              <span
                className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full bg-text-tertiary ring-4 ring-surface-strong"
                aria-hidden
              />
              <p className="text-md font-semibold tracking-[0.1em] uppercase text-text-tertiary mb-2">
                {item.period}
              </p>
              <h3 className="text-2xl font-bold text-text-primary">
                {item.role}
              </h3>
              <p className="text-lg text-text-secondary mt-1">{item.org}</p>
              <p className="text-xl text-text-secondary mt-3 max-w-2xl leading-relaxed">
                {item.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
