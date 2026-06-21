"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading, Pill } from "./ui";

const doTags = [
  "I build websites",
  "I automate with n8n",
  "I run Meta Ads",
  "I design in Canva",
  "I grow organic social",
  "I make AI UGC ads",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-surface-strong">
      <Container>
        <SectionHeading index="01" title="About" />

        <div className="grid md:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 bg-surface-muted rounded-lg p-8 md:p-10 shadow-1"
          >
            <p className="text-3xl text-text-primary leading-relaxed">
              I&apos;m a web developer and digital marketer who builds the full
              system — not just the site. I&apos;ve shipped storefronts and
              brand sites for e-commerce, healthcare, education, media, and
              SaaS clients, then stayed on to run the WhatsApp automations,
              paid ads, and content that keep them growing.
            </p>
            <p className="mt-6 text-xl text-text-secondary leading-relaxed">
              The work spans the full funnel: a fast, accessible website;
              an n8n workflow that responds to leads instantly; a Meta Ads
              account that&apos;s actually optimized; and AI-assisted UGC
              creative that performs without a camera crew.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 bg-text-primary text-text-inverse rounded-lg p-8 md:p-10 flex flex-col justify-between gap-8 shadow-1"
          >
            <div>
              <p className="text-md font-semibold tracking-[0.18em] uppercase text-text-inverse/60 mb-4">
                What I do
              </p>
              <div className="flex flex-wrap gap-2">
                {doTags.map((tag) => (
                  <Pill key={tag} tone="dark">
                    {tag}
                  </Pill>
                ))}
              </div>
            </div>
            <a
              href="#contact"
              className="self-start inline-flex items-center gap-2 text-lg font-semibold text-text-inverse underline decoration-text-tertiary underline-offset-4 hover:decoration-2 transition-all duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-inverse rounded-sm"
            >
              Let&apos;s connect →
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
