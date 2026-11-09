import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Dots } from "@/components/Dots";
import { ProductArt } from "@/components/ProductArt";
import { Container, Eyebrow } from "@/components/Section";
import { products } from "@/lib/products";
import { site } from "@/lib/site";
import { sites } from "@/lib/sites";

export const metadata: Metadata = {
  title: "Build with us",
  description:
    "Custom software and websites from a studio that makes and runs its own products. Tools for the counter, the truck and the back office.",
};

/* ------------------------------------------------------------------ */
/* Content (all drawn from the home page; keep it true)                */
/* ------------------------------------------------------------------ */

const values = [
  {
    icon: "box",
    title: "We run our own",
    body: "Chemix, Carpool, Tabs and My-Merch are ours. We build for you the way we build for us.",
  },
  {
    icon: "wrench",
    title: "Built for the job",
    body: "We start with the people doing the work and what's slowing them down, not a feature list.",
  },
  {
    icon: "bolt",
    title: "Real, early",
    body: "A working tool in your hands early, then tightened against real use.",
  },
  {
    icon: "shield",
    title: "Kept running",
    body: "Hosting, fixes and improvements after launch. We don't hand it over and disappear.",
  },
] as const;

const capabilities = [
  {
    icon: "register",
    title: "Point of sale & back office",
    body: "Tabs, menus, timeclocks and the daily numbers, shaped around your counter.",
    proof: "Tabs",
  },
  {
    icon: "truck",
    title: "Field & crew tools",
    body: "Mobile-first apps for people working out of a truck, plus records for the office.",
    proof: "Chemix",
  },
  {
    icon: "puzzle",
    title: "Browser extensions",
    body: "The missing layer on a site you already live in.",
    proof: "Carpool",
  },
  {
    icon: "cart",
    title: "E-commerce & storefronts",
    body: "A storefront customers can shop, and a back office you can run.",
    proof: "My-Merch",
  },
  {
    icon: "grid",
    title: "Internal tools & dashboards",
    body: "Replace the spreadsheet everyone is scared to touch.",
  },
  {
    icon: "globe",
    title: "Websites",
    body: "For local businesses, shops, nonprofits and people with something to show.",
  },
] as const;

const steps = [
  {
    title: "Learn the job",
    body: "We start with the people doing the work and what's slowing them down, not a feature list.",
  },
  {
    title: "Ship something real",
    body: "A working tool in your hands early, then tightened against real use.",
  },
  {
    title: "Stay on it",
    body: "Hosting, fixes and improvements after launch. Software that runs a business shouldn't be abandoned.",
  },
];

const paths = [
  {
    name: "A website",
    line: "Not every job needs custom software.",
    points: ["Built for your business, not a template swap", "Real content, real pages", "Live examples below"],
    cta: "Just a website, please.",
    href: "#contact",
  },
  {
    name: "Custom software",
    line: "Something that doesn't exist yet.",
    points: [
      "Shaped around the people who use it",
      "Working early, tightened against real use",
      "Hosting, fixes and improvements after launch",
    ],
    cta: "Build me something.",
    href: "#contact",
    featured: true,
  },
  {
    name: "Our products",
    line: "Maybe it's already built.",
    points: ["Chemix for lawn & turf crews", "Carpool for used car shoppers", "Tabs for bars & venues"],
    cta: "Show me the shelf.",
    href: "#see",
  },
];

const faqs = [
  {
    q: "Do you do software or websites?",
    a: "Both. We make our own products, build custom software for businesses, and build websites when a website is all the job needs.",
  },
  {
    q: "What happens after launch?",
    a: "We stay on it: hosting, fixes and improvements. Software that runs a business shouldn't be abandoned.",
  },
  {
    q: "How do we start?",
    a: "Tell us about the job. A few sentences is plenty. We reply from a real inbox, usually with a few questions, and if it's a fit we scope it together before anything gets built.",
  },
  {
    q: "Can I just use one of your products?",
    a: "Yes. Chemix, Carpool, Tabs and My-Merch are live today. If one of them already does the job, that's the cheapest custom software there is.",
  },
];

const nextSteps = [
  "You tell us about the job.",
  "We reply from a real inbox, usually with a few questions.",
  "If it’s a fit, we scope it together before anything gets built.",
];

/* ------------------------------------------------------------------ */
/* Little drawings                                                     */
/* ------------------------------------------------------------------ */

/** Hand-drawn underline under the hero's key phrase. */
function Swoosh({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 300 24" preserveAspectRatio="none" className={className} fill="none">
      <path
        d="M4 16C60 8 140 4 296 10M40 20C110 14 190 13 260 16"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Wavy edge between bands. `fill` is the color of the band *below* the wave. */
function Wave({ fill, flip = false }: { fill: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block h-12 w-full md:h-20 ${fill} ${flip ? "-mt-px rotate-180" : "-mb-px"}`}
    >
      <path
        d="M0 48C180 8 360 8 540 36s360 44 540 20 300-40 360-36V80H0Z"
        fill="currentColor"
      />
    </svg>
  );
}

const iconPaths: Record<string, React.ReactNode> = {
  box: <path d="M4 8l8-4 8 4v8l-8 4-8-4V8Zm0 0 8 4 8-4M12 12v8" />,
  wrench: <path d="M14.5 5.5a4 4 0 0 0-5 5L4 16l4 4 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5Z" />,
  bolt: <path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" />,
  shield: <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-4" />,
  register: <path d="M5 10h14l1 10H4l1-10Zm3 0V5h8v5M8 14h2m4 0h2M8 17h8" />,
  truck: <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />,
  puzzle: <path d="M10 4a2 2 0 1 1 4 0v2h4v4h-2a2 2 0 1 0 0 4h2v4h-4v-2a2 2 0 1 0-4 0v2H6v-4h2a2 2 0 1 0 0-4H6V6h4V4Z" />,
  cart: <path d="M3 4h2l2.5 11h10L20 7H6.5M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />,
  grid: <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />,
  globe: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9Z" />,
  check: <path d="m5 12 4.5 4.5L19 7" />,
};

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}

/** Big, centered section heading: the posture of the page. */
function Shout({ children, sub, on = "light" }: { children: React.ReactNode; sub?: string; on?: "light" | "dark" }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">{children}</h2>
      {sub && (
        <p
          className={`mt-5 text-sm font-medium tracking-wide ${on === "dark" ? "text-peak-muted" : "text-ink-muted"}`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function BuildPage() {
  return (
    <>
      {/* Hero + value row, one dark band */}
      <section className="relative overflow-hidden bg-floor text-peak">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 size-[44rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/20 blur-3xl"
        />
        <Container className="relative pb-20 pt-16 text-center md:pb-28 md:pt-24">
          <div className="flex justify-center">
            <Eyebrow on="dark">Software studio</Eyebrow>
          </div>
          <h1 className="mx-auto mt-8 max-w-5xl text-6xl font-bold leading-[0.98] tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            Software that{" "}
            <span className="relative inline-block text-accent-bright">
              pulls its weight.
              <Swoosh className="absolute -bottom-3 left-0 h-4 w-full text-accent md:-bottom-5 md:h-6" />
            </span>
          </h1>
          <p className="mx-auto mt-12 max-w-2xl text-lg leading-relaxed text-peak-muted md:text-2xl md:leading-relaxed">
            Custom software and websites from a studio that{" "}
            <strong className="font-semibold text-peak">makes and runs its own products</strong>. Tools for the
            counter, the truck and the back office.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-accent px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-accent-deep"
            >
              I&apos;m ready
            </a>
            <a
              href="#see"
              className="rounded-full px-8 py-4 text-lg font-medium text-peak ring-1 ring-line-dark transition-colors hover:bg-floor-raised"
            >
              Show me
            </a>
          </div>

          <ul className="mt-24 grid gap-10 text-center sm:grid-cols-2 md:mt-32 lg:grid-cols-4">
            {values.map((v) => (
              <li key={v.title} className="flex flex-col items-center">
                <span className="grid size-14 place-items-center rounded-2xl bg-accent text-white">
                  <Icon name={v.icon} className="size-7" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-peak-muted">{v.body}</p>
              </li>
            ))}
          </ul>
        </Container>
        <Wave fill="text-peak" />
      </section>

      {/* See for yourself: products + sites */}
      <section id="see" className="scroll-mt-8 py-20 md:py-28">
        <Container>
          <Shout sub="Products we run  /  Sites we've built  /  All live now">See for yourself.</Shout>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {products.map((p) => (
              <a
                key={p.slug}
                id={p.slug}
                href={p.href}
                className="group flex scroll-mt-8 flex-col overflow-hidden rounded-3xl bg-paper transition-shadow hover:shadow-lg hover:shadow-black/5"
              >
                <div className="flex h-64 items-center justify-center overflow-hidden bg-accent-mist px-8 py-8 md:h-80">
                  <div className="transition-transform duration-500 group-hover:scale-[1.03] [&_img]:max-h-64 [&_img]:w-auto">
                    <ProductArt slug={p.slug} />
                  </div>
                </div>
                <div className="p-7 text-center">
                  <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent-deep">{p.audience}</p>
                  <p className="mt-3 text-ink-muted">{p.tagline}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-20 flex items-center justify-center gap-3 text-sm font-medium text-ink-muted">
            <Dots size="0.5rem" />
            And websites, for people who just need a website
          </div>
          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {sites.map((s) => (
              <a key={s.slug} href={`https://${s.domain}`} className="group text-center">
                <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-black/10 ring-1 ring-black/10 transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    className="h-auto w-full"
                    sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.name}</h3>
                <p className="mt-0.5 text-sm text-ink-muted">{s.kind}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* What we build: the "powerups" card */}
      <section id="custom-work" className="scroll-mt-8 py-20 md:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-[5fr_6fr] lg:gap-20">
          <div>
            <Eyebrow>Custom work</Eyebrow>
            <h2 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl">
              Need something that doesn&apos;t exist yet?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              We build software for businesses the same way we build our own products:{" "}
              <strong className="font-semibold text-floor">small, focused</strong>, and{" "}
              <strong className="font-semibold text-floor">shaped around the people who use it every day</strong>.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Most of what&apos;s on the right, we&apos;ve already shipped for ourselves. The rest, we&apos;ll build for
              you.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-block rounded-full bg-accent px-7 py-3.5 font-medium text-white transition-colors hover:bg-accent-deep"
            >
              Tell us about the job
            </a>
          </div>

          <div className="rounded-3xl bg-paper p-6 md:p-10">
            <p className="text-center text-3xl font-bold tracking-tight md:text-4xl">Pick your problem.</p>
            <p className="mt-2 text-center text-sm text-ink-muted">What we build</p>
            <ul className="mt-8 space-y-2">
              {capabilities.map((c) => (
                <li key={c.title} className="flex gap-4 rounded-2xl p-3 transition-colors hover:bg-peak">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-mist text-accent-deep">
                    <Icon name={c.icon} className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold">
                      {c.title}
                      {"proof" in c && (
                        <span className="ml-2 rounded-full bg-accent-mist px-2 py-0.5 align-middle text-xs font-medium text-accent-deep">
                          like {c.proof}
                        </span>
                      )}
                    </h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-muted">{c.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* How it goes */}
      <section className="py-20 md:py-28">
        <Container>
          <Shout sub="Three steps, no mystery">How it goes.</Shout>
          <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <li key={step.title} className="text-center">
                <span className="block text-8xl font-bold leading-none tracking-tighter text-accent tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs leading-relaxed text-ink-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Pick your starting point: pricing-table posture, no prices */}
      <section className="py-20 md:py-28">
        <Container>
          <Shout sub="Every job is scoped before anything gets built">Where do you start?</Shout>
          <div className="mx-auto mt-16 grid max-w-5xl items-stretch gap-6 md:grid-cols-3">
            {paths.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl p-8 text-center md:p-10 ${
                  p.featured ? "bg-floor text-peak md:-my-4 md:py-14" : "bg-paper"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-white">
                    <Dots size="0.4rem" tone="white" />
                    Our specialty
                  </span>
                )}
                <h3 className="text-3xl font-bold tracking-tight">{p.name}</h3>
                <p className={`mt-2 text-sm ${p.featured ? "text-peak-muted" : "text-ink-muted"}`}>{p.line}</p>
                <ul className="mt-8 space-y-3 text-left text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <Icon
                        name="check"
                        className={`mt-0.5 size-4 shrink-0 ${p.featured ? "text-accent-bright" : "text-accent-deep"}`}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={p.href}
                  className={`mt-10 rounded-full px-6 py-3.5 font-medium transition-colors md:mt-auto ${
                    p.featured
                      ? "bg-accent text-white hover:bg-accent-deep"
                      : "text-floor ring-1 ring-line hover:bg-peak"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <Container>
          <Shout>Fair questions.</Shout>
          <div className="mx-auto mt-14 max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-paper px-6 py-5 open:pb-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden
                    className="grid size-8 shrink-0 place-items-center rounded-full bg-accent-mist text-accent-deep transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* The one accent band: big shout, then contact */}
      <section id="contact" className="scroll-mt-8 bg-accent text-white">
        <Wave fill="text-peak" flip />
        <Container className="pb-24 pt-12 md:pb-36 md:pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-8xl">
              Ready to retire that spreadsheet?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed md:text-xl">
              Tell us what you&apos;re working on. A few sentences is plenty to start.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
            <div className="lg:pt-6">
              <Eyebrow on="accent">What happens next</Eyebrow>
              <ol className="mt-8 space-y-5">
                {nextSteps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white text-sm font-semibold text-accent-deep">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-12 text-sm">Rather email?</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 inline-block text-lg font-medium underline underline-offset-4 hover:decoration-2"
              >
                {site.email}
              </a>
            </div>
            <div className="rounded-3xl bg-peak p-8 text-floor md:p-12">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
