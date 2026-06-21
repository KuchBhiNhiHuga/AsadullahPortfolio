"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "./ui";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-surface-base text-text-inverse">
      <Container>
        <div className="flex items-baseline gap-4 mb-10">
          <span className="text-md font-semibold text-text-tertiary tabular-nums">
            05
          </span>
          <h2 className="text-display-sm font-extrabold tracking-tight text-text-inverse">
            Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-text-inverse/10 rounded-lg overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-surface-base p-8 hover:bg-text-primary/60 transition-colors duration-normal"
            >
              <span className="text-md font-semibold text-text-tertiary tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-bold mt-3 mb-3">{service.title}</h3>
              <p className="text-lg text-text-inverse/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
