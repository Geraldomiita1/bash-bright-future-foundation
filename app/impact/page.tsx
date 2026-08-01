import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import GrowthRings from "@/components/ui/GrowthRings";
import { impactStats, communitiesServed } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "The measurable impact of Bash Bright Future Foundation (BBFF) — children supported, communities reached, farmers trained, and boreholes constructed.",
};

export default function ImpactPage() {
  return (
    <>
      <Section tone="white" className="pt-16 md:pt-24">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-500">
            Impact
          </p>
          <h1>Our impact so far.</h1>
          <p className="mt-6 text-lg text-charcoal-500">
            Figures below reflect BBFF&apos;s work to date across Eastern
            Uganda. We update these as programmes grow.
          </p>
        </div>
      </Section>

      {/* Headline stats */}
      <Section tone="sand">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {impactStats.map((stat) => (
            <GrowthRings key={stat.label} value={stat.value} label={stat.label} size={150} />
          ))}
        </div>
      </Section>

      {/* Communities served */}
      <Section tone="white">
        <h2>Communities We Serve</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {communitiesServed.map((c) => (
            <Card key={c.name} className="flex items-start gap-3">
              <MapPin size={20} className="mt-1 shrink-0 text-teal-500" />
              <div>
                <h3 className="text-base">{c.name}</h3>
                <p className="mt-1 text-sm text-charcoal-500">{c.district}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Success stories placeholder */}
      <Section tone="sand">
        <h2>Stories from the Field</h2>
        <p className="mt-3 max-w-2xl text-charcoal-500">
          Success stories, testimonials, and photos/videos from beneficiaries
          will be added here as BBFF collects and shares them.
        </p>
        <Card className="mt-8">
          <p className="text-sm text-charcoal-500">
            Have a story to share from one of our programmes? Reach out via
            the Contact page — we&apos;d love to feature it here.
          </p>
        </Card>
      </Section>

      {/* Reports CTA */}
      <Section tone="forest">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-sand-100">See the full picture</h2>
          <p className="max-w-xl text-sand-100/80">
            Annual reports and project reports are published on our
            Transparency page for anyone who wants to look deeper.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/reports">Reports &amp; Transparency</Button>
            <Button
              href="/donate"
              variant="ghost"
              className="border-sand-100 text-sand-100 hover:bg-sand-100/10"
            >
              Donate
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
