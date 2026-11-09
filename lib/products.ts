// Live Workpool products. Only list things people can use today.
// Copy is drawn from each product's own site; keep claims to what the product actually does.

export type Product = {
  slug: "chemix" | "carpool" | "tabs" | "my-merch";
  name: string;
  domain: string;
  href: string;
  audience: string;
  tagline: string;
  description: string;
  cta: string;
  secondary?: { label: string; href: string };
};

export const products: Product[] = [
  {
    slug: "chemix",
    name: "Chemix",
    domain: "chemix.app",
    href: "https://chemix.app",
    audience: "Lawn & turf treatment companies",
    tagline: "Every tank, mixed exactly right.",
    description:
      "Chemical inventory and spray-tank mix planning. Recipes, tanks, and whatever is already sitting in them go in. An exact, ordered mixing checklist comes out.",
    cta: "Visit chemix.app",
  },
  {
    slug: "carpool",
    name: "Carpool",
    domain: "carpool.workpool.app",
    href: "https://carpool.workpool.app",
    audience: "Used car shoppers",
    tagline: "Used cars are a minefield. Carpool has the map.",
    description:
      "A free Chrome extension that grades and ranks used cars on Facebook Marketplace by what you pay for each mile they have left.",
    cta: "Visit Carpool",
    secondary: {
      label: "Add to Chrome",
      href: "https://chromewebstore.google.com/detail/carpool-used-car-value-ra/gomjmoopmiggcobkkaofmlgdilnbaijc",
    },
  },
  {
    slug: "tabs",
    name: "Tabs",
    domain: "Tabs",
    href: "https://mern-wine-kappa.vercel.app/login",
    audience: "Bars & venues",
    tagline: "Tabs, menu, and the night's numbers in one place.",
    description:
      "Point of sale and back office for bars and venues. Open and close tabs, manage the menu, clock staff in, and see each day's sales broken down by cash, credit, tips, and tax.",
    cta: "Sign in to Tabs",
  },
  {
    slug: "my-merch",
    name: "My-Merch",
    domain: "my-merch.com",
    href: "https://my-merch.com",
    audience: "Custom apparel buyers",
    tagline: "Upload your art. Pick your shirts. See the price.",
    description:
      "A custom apparel storefront and project designer. Upload artwork, place it on shirts, hoodies and more, choose sizes and quantities, and see tiered pricing as you go.",
    cta: "Visit my-merch.com",
    secondary: { label: "Design & Quote", href: "https://my-merch.com/custom" },
  },
];
