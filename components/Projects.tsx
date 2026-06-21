"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { projects } from "@/lib/data";

export default function Projects() {
  const tags = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.tag)))],
    []
  );
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <section id="work" className="py-20 md:py-28">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
          <SectionHeading index="04" title="Selected work" />
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-1 bg-surface-muted rounded-2xl p-1 shadow-1"
          >
            {tags.map((tag) => (
              <button
                key={tag}
                role="tab"
                aria-selected={active === tag}
                onClick={() => setActive(tag)}
                className={`px-4 py-2 rounded-xl text-md font-medium transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus ${
                  active === tag
                    ? "bg-surface-base text-text-inverse"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-surface-muted rounded-lg overflow-hidden shadow-1 hover:shadow-3 hover:-translate-y-1 transition-all duration-normal"
            >
              <div
                className={`h-36 ${project.accent} flex items-end p-5`}
                aria-hidden
              >
                <span className="text-md font-semibold tracking-[0.1em] uppercase text-text-primary/60">
                  {project.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-text-primary">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="text-text-tertiary shrink-0 transition-transform duration-fast group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    size={20}
                    aria-hidden
                  />
                </div>
                <p className="text-md text-text-tertiary mt-1">
                  {project.url}
                </p>
                <p className="text-lg text-text-secondary mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
