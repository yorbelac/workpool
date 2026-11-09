import Link from "next/link";
import { cacheLife } from "next/cache";
import { products } from "@/lib/products";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { Container } from "./Section";

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export function Footer() {
  const linkClass = "text-peak-muted transition-colors hover:text-peak";
  return (
    <footer className="bg-floor text-peak">
      <Container className="py-20 md:py-28">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo on="dark" className="text-4xl md:text-5xl" />
            <p className="mt-4 text-lg font-medium text-peak-muted">{site.signoff}</p>
          </div>

          <div className="grid grid-cols-2 gap-12 text-sm sm:gap-20">
            <div>
              <p className="font-medium">Products</p>
              <ul className="mt-4 space-y-3">
                {products.map((p) => (
                  <li key={p.slug}>
                    <a href={p.href} className={linkClass}>
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium">Company</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/#custom-work" className={linkClass}>
                    Custom work
                  </Link>
                </li>
                <li>
                  <Link href="/#websites" className={linkClass}>
                    Websites
                  </Link>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className={linkClass}>
                    {site.email}
                  </a>
                </li>
                <li>
                  <Link href="/privacy" className={linkClass}>
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-20 border-t border-line-dark pt-8 text-sm text-peak-muted">
          © <CopyrightYear /> {site.legalName}
        </p>
      </Container>
    </footer>
  );
}
