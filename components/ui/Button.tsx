import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-gold-500 text-charcoal-900 hover:bg-gold-700 hover:text-sand-50",
  secondary:
    "bg-forest-700 text-sand-100 hover:bg-forest-900",
  ghost:
    "bg-transparent text-forest-700 border border-forest-700 hover:bg-forest-50",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-body font-semibold text-sm transition-colors",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
