import type { ComponentProps } from "react";

const variants = {
  primary:
    "bg-blue text-white hover:bg-blue-dark hover:shadow-lg hover:shadow-blue/25 hover:-translate-y-0.5 active:translate-y-0",
  action:
    "bg-action text-white hover:bg-action-dark hover:shadow-lg hover:shadow-action/30 hover:-translate-y-0.5 active:translate-y-0",
  whatsapp:
    "bg-whatsapp text-white hover:bg-whatsapp-dark hover:shadow-lg hover:shadow-whatsapp/25 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "text-white border border-white/25 hover:border-white/45 hover:bg-white/5 backdrop-blur-sm",
  dark:
    "bg-navy text-white hover:bg-navy-light hover:shadow-lg hover:shadow-navy/15",
  ghost:
    "text-navy border border-border hover:border-navy/40 hover:bg-warm-gray",
} as const;

const sizes = {
  sm: "text-[13px] px-5 py-2",
  md: "text-[13px] px-6 py-2.5",
  lg: "text-[15px] px-8 py-4",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type ButtonSharedProps = {
  variant?: Variant;
  size?: Size;
};

type ButtonAsLink = ButtonSharedProps &
  ComponentProps<"a"> & { href: string };

type ButtonAsButton = ButtonSharedProps &
  ComponentProps<"button"> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    "group inline-flex items-center justify-center gap-3 font-semibold rounded-full transition-all font-display cursor-pointer",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  if ("href" in rest && rest.href != null) {
    return (
      <a className={classes} {...(rest as ComponentProps<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
