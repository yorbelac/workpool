import type { Product } from "@/lib/products";
import { ProductArt } from "./ProductArt";

function ArrowUpRight() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M5 11 11 5M6 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** `wide` lays the art beside the copy; otherwise art sits on top. */
export function ProductCard({ product, wide = false }: { product: Product; wide?: boolean }) {
  return (
    <article
      id={product.slug}
      className={`scroll-mt-8 overflow-hidden rounded-3xl bg-paper ${wide ? "lg:grid lg:grid-cols-2" : "flex flex-col"}`}
    >
      <div
        className={`flex items-center justify-center bg-accent-mist px-6 py-12 md:px-10 ${
          wide ? "lg:order-2" : "md:h-[30rem]"
        }`}
      >
        <ProductArt slug={product.slug} />
      </div>

      <div className={`flex flex-1 flex-col p-8 md:p-10 ${wide ? "lg:justify-center lg:p-14" : ""}`}>
        <p className="text-sm font-medium text-accent-deep">{product.audience}</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight">{product.name}</h3>
        <p className="mt-2 text-lg font-medium leading-snug">{product.tagline}</p>
        <p className="mt-4 leading-relaxed text-ink-muted">{product.description}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-auto lg:pt-8">
          <a
            href={product.href}
            className="inline-flex items-center gap-2 rounded-full bg-floor px-5 py-2.5 text-sm font-medium text-peak transition-colors hover:bg-accent-deep"
          >
            {product.cta}
            <ArrowUpRight />
          </a>
          {product.secondary && (
            <a
              href={product.secondary.href}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium ring-1 ring-line transition-colors hover:bg-peak"
            >
              {product.secondary.label}
              <ArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
