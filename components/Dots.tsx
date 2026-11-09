type DotsProps = {
  /** Diameter of each dot. Any CSS length; defaults to the current cap height. */
  size?: string;
  className?: string;
  /** Pulse the dots (used as a pending indicator). */
  pulse?: boolean;
  /** "white" only on an accent fill. */
  tone?: "accent" | "white";
};

/**
 * The Workpool signature: two equal, touching accent circles.
 * Always accent, except white when sitting on an accent fill.
 */
export function Dots({ size = "0.705em", className = "", pulse = false, tone = "accent" }: DotsProps) {
  const dot = `block rounded-full bg-current ${pulse ? "animate-pulse" : ""}`;
  return (
    <span
      aria-hidden
      className={`inline-flex shrink-0 ${tone === "white" ? "text-white" : "text-accent"} ${className}`}
      style={{ height: size }}
    >
      <span className={dot} style={{ width: size, height: size }} />
      <span
        className={dot}
        style={{ width: size, height: size, animationDelay: pulse ? "150ms" : undefined }}
      />
    </span>
  );
}
