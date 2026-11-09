import { Dots } from "./Dots";

export function Container({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 lg:px-10 ${className}`}>{children}</div>;
}

/** Section label with the two-dot marker. */
const eyebrowTone = {
  light: "text-accent-deep",
  dark: "text-accent-bright",
  accent: "text-white",
} as const;

export function Eyebrow({
  children,
  on = "light",
}: {
  children: React.ReactNode;
  on?: keyof typeof eyebrowTone;
}) {
  return (
    <p className={`flex items-center gap-3 text-sm font-medium ${eyebrowTone[on]}`}>
      <Dots size="0.5rem" tone={on === "accent" ? "white" : "accent"} />
      {children}
    </p>
  );
}

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-8 py-20 md:py-32 lg:py-40 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
