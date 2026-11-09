import Image from "next/image";
import type { Site } from "@/lib/sites";

function ArrowUpRight() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M5 11 11 5M6 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** A website we built: its live header and hero in a browser frame, then what it is. The whole card links out. */
export function SiteCard({ site }: { site: Site }) {
  return (
    <a
      href={`https://${site.domain}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-paper transition-shadow hover:shadow-lg hover:shadow-black/5"
    >
      <div className="bg-accent-mist p-5 md:p-6">
        <div className="overflow-hidden rounded-xl bg-white shadow-xl shadow-black/15 ring-1 ring-black/10">
          <div className="flex h-7 items-center justify-center bg-peak px-3">
            <span className="truncate rounded-full bg-paper px-3 text-[11px] leading-5 text-ink-muted">
              {site.domain}
            </span>
          </div>
          <Image
            src={site.image}
            alt={site.alt}
            className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <p className="text-sm font-medium text-accent-deep">{site.kind}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">{site.name}</h3>
        <p className="mt-3 leading-relaxed text-ink-muted">{site.description}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-accent-deep group-hover:underline group-hover:underline-offset-4">
          {site.domain}
          <ArrowUpRight />
        </span>
      </div>
    </a>
  );
}
