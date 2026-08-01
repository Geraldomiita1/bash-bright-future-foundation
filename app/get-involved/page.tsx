import type { Metadata } from "next";
import { HandHeart, Package, Users, Handshake, GraduationCap, Sparkles } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Ways to support Bash Bright Future Foundation (BBFF) — donate funds or materials, volunteer, partner with us, sponsor a child, or support our programmes.",
};

const ways = [
  {
    icon: HandHeart,
    title: "Donate Funds",
    description:
      "Give via bank transfer or mobile money to support any of our five programme areas.",
    cta: "See donation details",
    href: "/donate",
  },
  {
    icon: Package,
    title: "Donate Materials",
    description:
      "Scholastic materials, clothing, blankets, and household items directly help vulnerable families.",
    cta: "Contact us to arrange",
    href: "/contact",
  },
  {
    icon: Users,
    title: "Volunteer",
    description:
      "Bring your time and skills to support our programmes on the ground in Eastern Uganda.",
    cta: "Get in touch",
    href: "/contact",
  },
  {
    icon: Handshake,
    title: "Become a Partner",
    description:
      "NGOs, government bodies, and international organizations — let's collaborate on shared goals.",
    cta: "Start a conversation",
    href: "/contact",
  },
  {
    icon: GraduationCap,
    title: "Sponsor a Child",
    description:
      "Support a vulnerable child's education directly — sponsorship covers school needs over time.",
    cta: "Ask about sponsorship",
    href: "/contact",
  },
  {
    icon: Sparkles,
    title: "Support Our Programmes",
    description:
      "Not sure which fits best? Tell us your interests and we'll point you to where it's needed most.",
    cta: "Reach out",
    href: "/contact",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <Section tone="white" className="pt-16 md:pt-24">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-500">
            Get Involved
          </p>
          <h1>There&apos;s a place for you here.</h1>
          <p className="mt-6 text-lg text-charcoal-500">
            Whether you give, volunteer, or partner with us, every
            contribution helps BBFF reach more communities across Eastern
            Uganda.
          </p>
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ways.map(({ icon: Icon, title, description, cta, href }) => (
            <Card key={title} className="flex h-full flex-col">
              <Icon size={28} className="text-teal-500" />
              <h3 className="mt-4">{title}</h3>
              <p className="mt-2 flex-1 text-sm text-charcoal-500">{description}</p>
              <Button href={href} variant="ghost" className="mt-5 self-start">
                {cta}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="forest">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-sand-100">Still deciding how to help?</h2>
          <p className="max-w-xl text-sand-100/80">
            Reach out directly — {siteConfig.email} or {siteConfig.phone}
            (also WhatsApp) — and we&apos;ll help you find the right fit.
          </p>
          <Button href="/contact">Contact Us</Button>
        </div>
      </Section>
    </>
  );
}
