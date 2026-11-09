import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./Section";

const nav = [
  { href: "/#products", label: "Products" },
  { href: "/#custom-work", label: "Custom work" },
  { href: "/#websites", label: "Websites" },
  { href: "/#contact", label: "Contact" },
];

/** Sits on the dark floor at the top of every page. */
export function Header() {
  return (
    <header className="bg-floor text-peak">
      <Container className="flex h-20 items-center justify-between gap-6 md:h-24">
        <Link href="/" className="rounded-md">
          <Logo on="dark" className="text-xl md:text-2xl" />
        </Link>
        <nav className="flex items-center gap-1 md:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden rounded-full px-4 py-2 text-sm text-peak-muted transition-colors hover:text-peak md:block"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="ml-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
          >
            Work with us
          </Link>
        </nav>
      </Container>
    </header>
  );
}
