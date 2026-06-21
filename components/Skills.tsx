"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading, Pill } from "./ui";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <Container>
        <SectionHeading index="02" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-surface-muted rounded-lg p-7 shadow-1 hover:shadow-3 hover:-translate-y-1 transition-all duration-normal"
            >
              <h3 className="text-xl font-bold text-text-primary mb-5">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item} tone="outline">
                    {item}
                  </Pill>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
