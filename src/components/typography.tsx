import type { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: TextProps) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-[0.15em] text-ink-soft ${className}`}
    >
      {children}
    </p>
  );
}

export function H1({ children, className = "" }: TextProps) {
  return (
    <h1
      className={`text-3xl font-bold tracking-tight text-ink sm:text-4xl ${className}`}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className = "" }: TextProps) {
  return (
    <h2
      className={`text-2xl font-bold tracking-tight text-ink sm:text-3xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className = "" }: TextProps) {
  return (
    <h3 className={`text-xl font-semibold tracking-tight text-ink ${className}`}>
      {children}
    </h3>
  );
}

export function H4({ children, className = "" }: TextProps) {
  return (
    <h4 className={`text-lg font-semibold text-ink ${className}`}>
      {children}
    </h4>
  );
}

export function Body({ children, className = "" }: TextProps) {
  return (
    <p className={`text-base leading-relaxed text-ink ${className}`}>
      {children}
    </p>
  );
}

export function Caption({ children, className = "" }: TextProps) {
  return (
    <p className={`text-xs text-ink-soft ${className}`}>{children}</p>
  );
}
