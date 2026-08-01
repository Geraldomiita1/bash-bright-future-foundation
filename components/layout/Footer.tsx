import Link from "next/link";
import Container from "@/components/ui/Container";
import { footerLinks, siteConfig, socialLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-sand-100">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="font-display text-xl font-semibold">
            {siteConfig.shortName}
          </span>
          <p className="mt-3 max-w-xs text-sm text-sand-100/70">
            {siteConfig.tagline} {siteConfig.registrationNote} working
            alongside communities in {siteConfig.country}.
          </p>
          <p className="mt-4 text-sm text-sand-100/70">{siteConfig.address}</p>
        </div>

        <FooterColumn title="Explore" links={footerLinks.explore} />
        <FooterColumn title="Resources" links={footerLinks.resources} />
        <FooterColumn title="Connect" links={footerLinks.connect} />
      </Container>

      <div className="border-t border-sand-100/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-sand-100/60">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-sand-100/60 hover:text-gold-500"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-body text-sm font-semibold uppercase tracking-wide text-sand-100/50">
        {title}
      </h4>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-sand-100/80 hover:text-gold-500"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
