import { ContactForm } from "@/components/ContactForm";
import { HeroShowcase } from "@/components/HeroShowcase";
import { ProductCard } from "@/components/ProductCard";
import { Container, Eyebrow, Section } from "@/components/Section";
import { SiteCard } from "@/components/SiteCard";
import { products } from "@/lib/products";
import { sites } from "@/lib/sites";
import { site } from "@/lib/site";

const capabilities = [
  {
    title: "Point of sale & back office",
    body: "Tabs, menus, timeclocks, and the daily numbers, shaped around how your counter actually runs.",
    proof: { name: "Tabs", href: "#tabs" },
  },
  {
    title: "Field & crew tools",
    body: "Mobile-first apps for people working out of a truck, with planning and records for the office.",
    proof: { name: "Chemix", href: "#chemix" },
  },
  {
    title: "Browser extensions",
    body: "Add the missing layer to a site you already live in, without waiting on anyone to build it.",
    proof: { name: "Carpool", href: "#carpool" },
  },
  {
    title: "E-commerce & storefronts",
    body: "A storefront customers can shop, a back office you can run, and marketplace listings that stay in sync.",
    proof: { name: "My-Merch", href: "#my-merch" },
  },
  {
    title: "Internal tools & dashboards",
    body: "Replace the spreadsheet everyone is scared to touch with something built for the job.",
  },
];

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
    body: "Hosting, fixes, and improvements after launch. Software that runs a business shouldn't be abandoned.",
  },
];

const nextSteps = [
  "You tell us about the job.",
  "We reply from a real inbox, usually with a few questions.",
  "If it’s a fit, we scope it together before anything gets built.",
];

export default function Home() {
  const bySlug = Object.fromEntries(products.map((p) => [p.slug, p]));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-floor text-peak">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-10 hidden size-[36rem] rounded-full bg-accent/20 blur-3xl md:block"
        />
        <Container className="relative grid items-center gap-16 pb-28 pt-16 md:pb-40 md:pt-24 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <Eyebrow on="dark">Software studio</Eyebrow>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Focused software for real work.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-peak-muted md:text-xl">
              We make our own products and build custom software for businesses. Tools for the counter, the
              truck, and the back office.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#products"
                className="rounded-full bg-accent px-7 py-3.5 font-medium text-white transition-colors hover:bg-accent-deep"
              >
                See our products
              </a>
              <a
                href="#contact"
                className="rounded-full px-7 py-3.5 font-medium text-peak ring-1 ring-line-dark transition-colors hover:bg-floor-raised"
              >
                Get in touch
              </a>
            </div>
          </div>
          <HeroShowcase />
        </Container>
      </section>

      {/* Products */}
      <Section id="products">
        <div className="max-w-2xl">
          <Eyebrow>Products</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">Things we&apos;ve built.</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Each one started with a specific job that was harder than it needed to be.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <ProductCard product={bySlug.chemix} />
          <ProductCard product={bySlug.carpool} />
          <ProductCard product={bySlug["my-merch"]} />
          <ProductCard product={bySlug.tabs} />
        </div>
      </Section>

      {/* Custom work */}
      <Section id="custom-work" className="pt-0 md:pt-8 lg:pt-12">
        <div className="grid gap-16 lg:grid-cols-[2fr_3fr] lg:gap-24">
          <div>
            <Eyebrow>Custom work</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Need something that doesn&apos;t exist yet?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              We build software for businesses the same way we build our own products: small, focused, and
              shaped around the people who use it every day.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-block rounded-full bg-accent px-7 py-3.5 font-medium text-white transition-colors hover:bg-accent-deep"
            >
              Tell us about the job
            </a>
          </div>

          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c.title}>
                <h3 className="text-xl font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{c.body}</p>
                {c.proof && (
                  <a
                    href={c.proof.href}
                    className="mt-4 inline-block text-sm font-medium text-accent-deep underline-offset-4 hover:underline"
                  >
                    See it in {c.proof.name} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <ol className="mt-24 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-3xl bg-paper p-8 md:p-10">
              <span className="text-sm font-medium tabular-nums text-accent-deep">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Websites */}
      <Section id="websites" className="pt-0 md:pt-8 lg:pt-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Websites</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">Just need a website?</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Not every job calls for custom software. We also build websites for local businesses, shops,
              nonprofits and people with something to show. These are live now.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 self-start rounded-full bg-accent px-7 py-3.5 font-medium text-white transition-colors hover:bg-accent-deep lg:self-auto"
          >
            Ask about a website
          </a>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((s) => (
            <SiteCard key={s.slug} site={s} />
          ))}
        </div>
      </Section>

      {/* Contact — the one full accent band on the page */}
      <Section id="contact" className="bg-accent text-white">
        <div className="grid gap-16 lg:grid-cols-[2fr_3fr] lg:gap-24">
          <div>
            <Eyebrow on="accent">Contact</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">Let&apos;s talk.</h2>
            <p className="mt-5 text-lg leading-relaxed">
              Tell us what you&apos;re working on. A few sentences is plenty to start.
            </p>

            <ol className="mt-12 space-y-5">
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
      </Section>
    </>
  );
}
