type LogoProps = {
  /** "dark" renders on the black floor (peak letters); "light" renders on peak (floor letters). */
  on?: "light" | "dark";
  className?: string;
};

/**
 * WORKPOOL wordmark: Poppins Bold with the two O's replaced by accent dots.
 * Dot diameter equals Poppins' cap height (0.705em) and sits on the baseline, matching the brand art.
 * Size it with font-size (e.g. `text-2xl`).
 */
export function Logo({ on = "light", className = "" }: LogoProps) {
  return (
    <span
      role="img"
      aria-label="Workpool"
      className={`inline-flex items-baseline font-bold leading-none tracking-[-0.01em] ${
        on === "dark" ? "text-peak" : "text-floor"
      } ${className}`}
    >
      <span aria-hidden>WORKP</span>
      <span aria-hidden className="mx-[0.02em] inline-flex text-accent">
        <span className="inline-block size-[0.705em] rounded-full bg-current" />
        <span className="inline-block size-[0.705em] rounded-full bg-current" />
      </span>
      <span aria-hidden>L</span>
    </span>
  );
}
