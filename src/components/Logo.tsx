export default function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const textColor = variant === "light" ? "text-white" : "text-navy";
  const accentColor = variant === "light" ? "text-blue-light" : "text-blue";

  return (
    <a href="#" className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative w-9 h-9">
        {/* Outer ring */}
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle
            cx="18"
            cy="18"
            r="16.5"
            stroke={variant === "light" ? "white" : "#2563EB"}
            strokeWidth="1.5"
          />
          {/* Snowflake arms */}
          <path
            d="M18 6v24M6 18h24"
            stroke={variant === "light" ? "white" : "#2563EB"}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M9.5 9.5l17 17M26.5 9.5l-17 17"
            stroke={variant === "light" ? "rgba(255,255,255,0.4)" : "rgba(37,99,235,0.3)"}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Center dot */}
          <circle cx="18" cy="18" r="3" fill="#E8634A" />
          {/* Small crystals at arm tips */}
          <circle cx="18" cy="7" r="1.5" fill={variant === "light" ? "white" : "#2563EB"} />
          <circle cx="18" cy="29" r="1.5" fill={variant === "light" ? "white" : "#2563EB"} />
          <circle cx="7" cy="18" r="1.5" fill={variant === "light" ? "white" : "#2563EB"} />
          <circle cx="29" cy="18" r="1.5" fill={variant === "light" ? "white" : "#2563EB"} />
        </svg>
      </div>
      <span className="font-display text-[1.35rem] font-bold tracking-[-0.02em]">
        <span className={textColor}>Cooling</span>
        <span className={accentColor}>Repair</span>
      </span>
    </a>
  );
}
