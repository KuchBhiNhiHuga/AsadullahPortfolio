import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 md:px-9 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-md font-semibold tracking-[0.18em] uppercase text-text-secondary">
      {children}
    </span>
  );
}

export function Pill({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "dark" | "outline";
}) {
  const toneClasses = {
    default: "bg-surface-muted text-text-primary shadow-1",
    dark: "bg-surface-base text-text-inverse",
    outline: "border border-border text-text-primary bg-transparent",
  }[tone];

  return (
    <span
      className={`inline-flex items-center px-5 py-2 rounded-2xl text-md font-medium transition-colors duration-fast ${toneClasses}`}
    >
      {children}
    </span>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-surface-base text-text-inverse hover:bg-text-primary active:scale-[0.98] shadow-1",
    secondary:
      "bg-surface-muted text-text-primary border border-border hover:bg-surface-strong active:scale-[0.98]",
    ghost: "bg-transparent text-text-primary hover:bg-surface-muted",
  }[variant];

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-lg font-semibold
        transition-all duration-normal disabled:opacity-40 disabled:cursor-not-allowed
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2
        ${variants} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function LinkButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: LinkButtonProps) {
  const variants = {
    primary:
      "bg-surface-base text-text-inverse hover:bg-text-primary active:scale-[0.98] shadow-1",
    secondary:
      "bg-surface-muted text-text-primary border border-border hover:bg-surface-strong active:scale-[0.98]",
    ghost: "bg-transparent text-text-primary hover:bg-surface-muted",
  }[variant];

  return (
    <a
      className={`inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-lg font-semibold
        transition-all duration-normal
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2
        ${variants} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-4 mb-10">
      <span className="text-md font-semibold text-text-tertiary tabular-nums">
        {index}
      </span>
      <h2 className="text-display-sm font-extrabold tracking-tight text-text-primary">
        {title}
      </h2>
    </div>
  );
}
