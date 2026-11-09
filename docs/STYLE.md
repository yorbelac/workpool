# Workpool style system

The source of truth for how Workpool looks and sounds. It applies to workpool.app and is the baseline for every Workpool product surface. Products may add their own accent, but they keep the type, spacing and tone.

Tokens live in [`app/globals.css`](../app/globals.css) under `@theme`. Use the Tailwind names (`bg-floor`, `text-accent-deep`, …), never raw hex in components.

---

## 1. Color

Three core colors. Everything else is derived from them.

| Token | Hex | Role |
|---|---|---|
| `accent` | `#4B69B1` | The Workpool blue. Dots, fills, buttons, large blue type. |
| `floor` | `#131213` | The black floor. Dark bands (hero, footer), primary text on light. |
| `peak` | `#E9E6E5` | The white peak. Default page background, text on dark. |

Derived:

| Token | Hex | Role |
|---|---|---|
| `accent-deep` | `#3C5590` | Hover/pressed, **small blue text on light** |
| `accent-bright` | `#6F8BCF` | **Blue text on the floor** |
| `accent-mist` | `#DDE3F0` | Soft blue surface: product-visual panels, tags, highlights |
| `paper` | `#F5F3F2` | Raised surface on peak: cards, inputs |
| `floor-raised` | `#1E1D1E` | Raised surface on floor |
| `ink-muted` | `#5C595A` | Secondary text on light |
| `peak-muted` | `#A19D9C` | Secondary text on dark |
| `line` / `line-dark` | `#D6D2D1` / `#2C2A2B` | Hairlines, used sparingly |

**Contrast rules (WCAG AA, measured):**
- `accent` on `peak` is 4.28:1, which is OK **only for large text (24px+, or 19px+ bold)**, dots and fills. Small blue text on light uses `accent-deep` (5.84:1).
- Text on an `accent` fill is **white `#FFFFFF`** (5.31:1), not peak (4.28:1). This is the one place pure white is allowed.
- `accent` on `floor` is 3.52:1, which is fine for dots and graphics. Blue *text* on dark uses `accent-bright` (5.58:1).
- `peak` on `floor` is 15:1. `ink-muted` on `peak` is 5.58:1. `peak-muted` on `floor` is 6.96:1.

No other hues on Workpool surfaces. General tone: blue, clean, quiet. The exception is a product's own accent, which may appear inside that product's card or page.

## 2. Type

**Poppins everywhere**, including headings, body, buttons, inputs and the OG image. Loaded through `next/font/google` as `--font-poppins`. The OG image loads the TTFs in `assets/fonts/`.

| Use | Weight | Notes |
|---|---|---|
| Display / H1 | 600–700 | `tracking-tight`, `leading-[1.05]`, 48–88px |
| H2 | 600 | `tracking-tight`, 32–48px |
| H3 / card titles | 600 | 20–24px |
| Body | 400 | 16–18px, `leading-relaxed`, max ~65ch |
| Labels / eyebrows | 500 | 13–14px, often `accent-deep` or a muted color |

Sentence case for headings. The wordmark is the only all-caps element.

## 3. The two dots

The signature motif comes from the two "O"s in WORKPOOL. Rules:
- **Always two equal circles, touching, side by side, in `accent`.** Never one dot, never three, never another color. (On a solid `accent` background they invert to white, as in `pfp.png`.)
- In the wordmark, each dot's diameter equals Poppins' cap height (0.705em) and the dots sit on the baseline. See `components/Logo.tsx`.
- Use them as an eyebrow marker before section labels, as list bullets, in the favicon and avatar, and as the pending state (pulsing).
- Use the `<Dots />` component rather than drawing new ones.

## 4. Wordmark

- `components/Logo.tsx` renders the live wordmark: Poppins Bold "WORKP", two dots, "L".
- Light backgrounds get a `floor` wordmark. Dark backgrounds get a `peak` wordmark. The dots stay `accent` in both.
- PNG masters live in `public/brand/` (`logoBlack.png`, `logoWhite.png`, `pfp.png`). The source art is `art.vectorcraft` at the repo root.
- Sign-off line: **"oo... smart."** in Poppins Medium, lowercase. It is a playful brand mark for the footer, OG image and business-card backs, never the headline.

## 5. Layout

- **Clean and spacious.** Content max width is about 1200px (`max-w-6xl`) with `px-6` gutters, or `px-10` on large screens.
- Section padding is 96–160px vertically on desktop (`py-24 md:py-32 lg:py-40`) and about 64px on mobile.
- Page rhythm: **dark `floor` hero → light `peak` content → one full `accent` band → dark `floor` footer.** The floor bands echo the business-card back. The accent band carries "general blue tones" and is reserved for the page's main call to action (on the home page, Contact).
- **One light background.** All light sections are `peak`. Don't alternate `peak`/`paper` section backgrounds: the two are too close and the banding reads as a mistake. `paper` is for cards *on* peak.
- On the accent band: text is white, eyebrow dots go white, and forms sit in a `peak` card.
- **Product visuals** sit on `accent-mist` panels. Prefer real screenshots in a consistent frame (browser window for web apps, phone for mobile views, device photo for hardware) over drawn mockups.
- Few borders. Separate areas with space and surface color instead.
- Corners: cards `rounded-3xl` (24px), inputs and buttons `rounded-full` or `rounded-2xl`.
- No drop shadows beyond a faint one on hover. No gradients except a subtle accent glow on the floor.

## 6. Components

- **Primary button:** `bg-accent text-white rounded-full px-6 py-3 font-medium hover:bg-accent-deep`
- **Secondary on dark:** `ring-1 ring-line-dark text-peak hover:bg-floor-raised`
- **Secondary on light:** `ring-1 ring-line text-floor hover:bg-paper`
- **Links in text:** `text-accent-deep underline-offset-4 hover:underline`
- **Inputs:** `bg-paper rounded-2xl px-4 py-3 ring-1 ring-transparent focus:ring-accent`

## 7. Voice

Plain, confident and specific. Say what the thing does and who it's for. No buzzwords ("revolutionize", "leverage", "AI-powered" as filler), no invented metrics, no fake testimonials. Short sentences. A little dry wit is on-brand ("oo... smart."). Overselling is not.

The company is faceless on the site: no team bios or personal phone numbers. Public contact is **hello@workpool.app**. The legal name is **Workpool LLC**.
