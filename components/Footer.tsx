import { Container } from "./ui";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "WhatsApp", href: "https://wa.me/" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-base text-text-inverse pt-16 pb-8">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-10 border-b border-text-inverse/10">
          <div>
            <p className="text-display-sm font-extrabold tracking-tight">
              Let&apos;s build something.
            </p>
            <p className="text-xl text-text-inverse/60 mt-3 max-w-md">
              Websites, automation, and growth — designed and run end to end.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xl font-semibold underline decoration-text-tertiary underline-offset-4 hover:decoration-2 transition-all duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-inverse rounded-sm self-start"
          >
            hello@asadullah.dev
          </a>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8">
          <p className="text-md text-text-inverse/50">
            © {new Date().getFullYear()} Asadullah I. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-text-inverse/60 hover:text-text-inverse transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-inverse rounded-sm"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
