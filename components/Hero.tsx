"use client";

import { motion } from "framer-motion";
import { LinkButton, Container } from "./ui";
import { heroStats } from "@/lib/data";

const headline = ["BUILD.", "AUTOMATE.", "GROW."];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden"
    >
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-md font-semibold tracking-[0.18em] uppercase text-text-tertiary mb-6"
        >
          Asadullah I. — Web Developer &amp; Growth Marketer
        </motion.p>

        <h1 className="font-extrabold tracking-tight text-text-primary text-balance">
          {headline.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="block text-display-md sm:text-display-lg md:text-display-xl leading-[0.95]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 max-w-xl text-2xl text-text-secondary"
        >
          I build the website, then I stay on to run it — automation, paid
          ads, and content that turn traffic into customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <LinkButton href="#work">View my work</LinkButton>
          <LinkButton href="#contact" variant="secondary">
            Book a call
          </LinkButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 flex flex-wrap gap-10"
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-display-sm font-extrabold text-text-primary">
                {stat.value}
              </p>
              <p className="text-md text-text-secondary mt-1 max-w-[14ch]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
