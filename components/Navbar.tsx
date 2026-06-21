"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { LinkButton } from "./ui";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on escape — keyboard parity with the close button.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl bg-surface-muted/90 backdrop-blur-md px-5 py-3 shadow-1 border border-border/10"
      >
        <a
          href="#top"
          className="text-lg font-extrabold tracking-tight text-text-primary px-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus rounded-sm"
        >
          Asadullah I.
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-2xl text-md font-medium text-text-secondary hover:text-text-primary hover:bg-surface-strong transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <LinkButton
            href="#contact"
            className="!px-5 !py-2.5 !text-md"
            aria-label="Go to contact section to start a project"
          >
            Let&apos;s talk
          </LinkButton>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-xl text-text-primary hover:bg-surface-strong transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden mx-auto mt-2 max-w-5xl rounded-2xl bg-surface-muted shadow-1 border border-border/10 p-4 animate-[fadeIn_200ms_ease-out]"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-lg font-medium text-text-primary hover:bg-surface-strong transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <LinkButton
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 w-full"
          >
            Let&apos;s talk
          </LinkButton>
        </div>
      )}
    </header>
  );
}
