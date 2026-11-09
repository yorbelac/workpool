import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Workpool handles information on workpool.app.",
};

export default function PrivacyPage() {
  return (
    <Container className="py-20 md:py-32">
      <article className="max-w-2xl">
        <Eyebrow>Privacy</Eyebrow>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">Privacy policy</h1>
        <p className="mt-4 text-sm text-ink-muted">Last updated November 1, 2026</p>

        <div className="mt-12 space-y-10 leading-relaxed text-ink-muted [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-floor">
          <section>
            <p>
              This policy covers workpool.app, the website of {site.legalName} (&ldquo;Workpool,&rdquo;
              &ldquo;we&rdquo;). Each Workpool product, such as Chemix, Carpool, and Tabs, has its own
              policy on its own site.
            </p>
          </section>

          <section>
            <h2>What we collect</h2>
            <p>
              If you send us a message through the contact form, we keep what you enter (your name, email,
              company, and message) along with the time it was sent and a one-way hash of your IP address, which
              we use only to limit spam. We don&apos;t use cookies for advertising or tracking.
            </p>
          </section>

          <section>
            <h2>Analytics</h2>
            <p>
              We use Vercel Web Analytics to count page views. It doesn&apos;t use cookies and doesn&apos;t
              identify individual visitors.
            </p>
          </section>

          <section>
            <h2>How we use it</h2>
            <p>
              Only to read and reply to your message and to follow up about the work you asked about. We
              don&apos;t sell or share your information. Our hosting, database, and email providers (Vercel,
              Neon, and Resend) process it on our behalf.
            </p>
          </section>

          <section>
            <h2>Your choices</h2>
            <p>
              Email{" "}
              <a href={`mailto:${site.email}`} className="text-accent-deep underline underline-offset-4">
                {site.email}
              </a>{" "}
              and we&apos;ll tell you what we have about you or delete it.
            </p>
          </section>
        </div>
      </article>
    </Container>
  );
}
