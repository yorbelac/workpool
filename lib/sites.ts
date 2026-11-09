// Websites we've built. Only list sites that are live.
// Copy is drawn from each site's own content; keep claims to what the site actually shows.
// Images are 1440×900 captures of each site's header and hero (public/sites/). Recapture when a site changes.

import type { StaticImageData } from "next/image";
import myMerch from "@/public/sites/my-merch.jpg";
import pureFlexSpace from "@/public/sites/pure-flex-space.jpg";
import carpool from "@/public/sites/carpool.jpg";
import loveLiftedMe from "@/public/sites/love-lifted-me.jpg";
import fightplane from "@/public/sites/fightplane.jpg";
import cosmicSundae from "@/public/sites/cosmic-sundae.jpg";
import russellHenley from "@/public/sites/russell-henley.jpg";
import skyops from "@/public/sites/skyops.jpg";
import sewardsGuttering from "@/public/sites/sewards-guttering.jpg";
import hickmanLawns from "@/public/sites/hickman-lawns.jpg";
import calebRoy from "@/public/sites/caleb-roy.jpg";

export type Site = {
  slug: string;
  name: string;
  domain: string;
  /** Short line: what kind of site it is, and where if it's local. */
  kind: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

export const sites: Site[] = [
  {
    slug: "my-merch",
    name: "My-Merch",
    domain: "my-merch.com",
    kind: "Custom apparel · Carthage, MO",
    description:
      "A local print shop's storefront: print styles with price breaks up front, a design-it-yourself flow, and free delivery around Southwest Missouri.",
    image: myMerch,
    alt: "My-Merch home page: “My-Merch? Your Merch” over a rack of shirts, with Design & Quote, Free Quote and Shop Styles buttons",
  },
  {
    slug: "pure-flex-space",
    name: "Pure Flex Space",
    domain: "pureflexspace.com",
    kind: "Contractor flex space · Carl Junction, MO",
    description:
      "Drive-up units for contractors who’ve outgrown the driveway. The facility, straight pricing and a same-day path from call to keys.",
    image: pureFlexSpace,
    alt: "Pure Flex Space home page: “Your shop, yard & storage. One gate code.” with a move-in special and a Check Availability button",
  },
  {
    slug: "carpool",
    name: "Carpool",
    domain: "carpool.workpool.app",
    kind: "Product site · Browser extension",
    description:
      "The home for our Carpool extension, with an interactive walkthrough of Marketplace with and without it, and a cost-per-mile calculator.",
    image: carpool,
    alt: "Carpool home page: “Buying a used car can be a minefield” beside a mock Marketplace listing grid",
  },
  {
    slug: "love-lifted-me",
    name: "Love Lifted Me",
    domain: "loveliftedme.online",
    kind: "Nonprofit · Uganda",
    description:
      "A home for orphans in Bulenga, Uganda. Urgent needs up top, monthly giving tiers, and a sponsor page for each child.",
    image: loveLiftedMe,
    alt: "Love Lifted Me home page: an Urgent Need notice with a Give Now button over a photo of the children",
  },
  {
    slug: "fightplane",
    name: "FightPlane",
    domain: "fightplane.com",
    kind: "Tabletop RPG marketplace",
    description:
      "Battlemaps for virtual tabletops, filtered by setting, era, biome, structure, grid size, and whether walls and lighting come set up.",
    image: fightplane,
    alt: "FightPlane home page: “Battlemaps, filtered the way you actually search for them.” over a dark campfire scene",
  },
  {
    slug: "cosmic-sundae",
    name: "Cosmic Sundae",
    domain: "cosmicsundae.com",
    kind: "Online shop · Vintage & collectibles",
    description:
      "A nostalgia shop for Sanrio, Care Bears, Lisa Frank, Barbie and Pokémon finds, with new arrivals up front and free shipping in the US.",
    image: cosmicSundae,
    alt: "Cosmic Sundae home page: a pink Lisa Frank banner with a Gotta Have It! button above New Arrivals",
  },
  {
    slug: "russell-henley",
    name: "Russell Henley",
    domain: "russellhenleycomedy.com",
    kind: "Stand-up comedian · Joplin, MO",
    description:
      "A home base for a working comic: bio, upcoming shows, merch, and a booking form. “Let me make you laugh. Ideally pay me for it.”",
    image: russellHenley,
    alt: "Russell Henley Comedy home page: “Fantastic father, terrible comedian” with five stars, attributed to Russell’s wife",
  },
  {
    slug: "skyops",
    name: "SkyOps",
    domain: "chemtrail.store",
    kind: "Parody storefront",
    description:
      "A deadpan shop for an “aerial influence” company: cloud-seeding compounds at $18,399, a reports desk, and a button to schedule your deployment.",
    image: skyops,
    alt: "SkyOps home page: “Control the Heavens. Control the Earth.” with a jet leaving a trail across a blue sky",
  },
  {
    slug: "sewards-guttering",
    name: "Seward’s Guttering",
    domain: "sewardsguttering.com",
    kind: "Gutter services · Four States",
    description:
      "Gutter cleaning, installation, repair and leaf guard, with past work, reviews and a free estimate form.",
    image: sewardsGuttering,
    alt: "Seward’s Guttering home page: the Seward’s Guttering logo over a leaf-filled gutter, “for all your gutter’s needs”",
  },
  {
    slug: "hickman-lawns",
    name: "Hickman Lawn & Landscape",
    domain: "hickmanlawns.com",
    kind: "Lawn & landscaping · Joplin area",
    description:
      "Lawn care, landscape installs, irrigation and snow removal for Webb City, Oronogo, Carthage, Carl Junction and Joplin, with a quote form.",
    image: hickmanLawns,
    alt: "Hickman Lawn & Landscape home page: the company name over a freshly edged lawn and landscape bed",
  },
  {
    slug: "caleb-roy",
    name: "Caleb Roy",
    domain: "calebroy.com",
    kind: "Personal portfolio",
    description:
      "A polymath’s portfolio: web development, web design, Excel, voicework, graphic design and creative writing on one page, plus a shop.",
    image: calebRoy,
    alt: "calebroy.com home page: a childhood photo with pixel sunglasses beside a music player and contact links, over a starfield",
  },
];
