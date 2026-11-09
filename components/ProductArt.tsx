import Image from "next/image";
import type { Product } from "@/lib/products";
import chemixMix from "@/public/products/chemix-mix.png";
import carpoolMarketplace from "@/public/products/carpool-marketplace.png";
import myMerchDesigner from "@/public/products/my-merch-designer.png";
import tabsStats from "@/public/products/tabs-stats.png";

// Real product visuals: each image is captured from the product itself (its live
// site or app), not redrawn in Workpool's palette. Recapture when a product's UI changes.

const art = {
  chemix: {
    src: chemixMix,
    alt: "Chemix mixing checklist for a 300 gallon tank: five products in order, a leftover credit, and the water to add",
    className: "w-full max-w-[21rem] shadow-2xl shadow-black/30 rounded-2xl",
  },
  carpool: {
    src: carpoolMarketplace,
    alt: "Carpool on Facebook Marketplace: each listing tagged with its rank, cost per mile left and grade, beside the Carpool ranked list",
    className: "w-full max-w-xl shadow-2xl shadow-black/30 rounded-xl",
  },
  "my-merch": {
    src: myMerchDesigner,
    alt: "My-Merch Project Designer: artwork placed on a t-shirt, sizes entered, and a priced quote",
    className: "w-full max-w-xl shadow-xl shadow-black/15 rounded-xl ring-1 ring-black/10",
  },
  tabs: {
    src: tabsStats,
    alt: "Tabs statistics screen: a week's orders, revenue, cash, credit, tips and tax, a daily revenue chart, and a daily breakdown table",
    className: "w-full max-w-xl shadow-xl shadow-black/15 rounded-xl ring-1 ring-black/10",
  },
} satisfies Record<Product["slug"], { src: typeof tabsStats; alt: string; className: string }>;

export function ProductArt({ slug }: { slug: Product["slug"] }) {
  const { src, alt, className } = art[slug];
  return (
    <Image
      src={src}
      alt={alt}
      className={`h-auto ${className}`}
      sizes="(min-width: 1024px) 560px, 90vw"
    />
  );
}
