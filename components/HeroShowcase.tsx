import { Dots } from "./Dots";
import { ProductArt } from "./ProductArt";

/**
 * Layered product visuals for the hero, using the same real captures as the
 * product cards. Keep the two-dot accent overlapping the stack.
 */
export function HeroShowcase() {
  return (
    <div aria-hidden className="relative hidden h-[30rem] w-[30rem] lg:block">
      <div className="absolute left-0 top-0 w-[22rem] -rotate-3 opacity-90">
        <ProductArt slug="chemix" />
      </div>
      <div className="absolute bottom-0 right-0 w-[22rem] rotate-2">
        <ProductArt slug="carpool" />
      </div>
      <div className="absolute -top-5 left-[19.5rem]">
        <Dots size="3.5rem" />
      </div>
    </div>
  );
}
