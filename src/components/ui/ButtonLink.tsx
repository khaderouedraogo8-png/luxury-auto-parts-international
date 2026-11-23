import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-crimson text-white hover:bg-crimson-hover border border-crimson",
  secondary:
    "bg-transparent text-ivory border border-silver/30 hover:border-ivory hover:bg-white/5",
  ghost:
    "bg-transparent text-ivory border border-transparent hover:text-white",
};

type Props = {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: Props) {
  const classes = `inline-flex items-center justify-center gap-2 px-5 py-3 font-display text-sm sm:text-[15px] font-semibold uppercase tracking-[0.14em] transition-colors ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
