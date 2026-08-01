import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import GrowthRings from "@/components/ui/GrowthRings";
import ProgrammeCard from "@/components/ui/ProgrammeCard";
import { programmes, impactStats, siteConfig } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section tone="white" className="pt-16 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-500">
              {siteConfig.registrationNote} · {siteConfig.country}
            </p>
            <h1>
              Transforming Lives Through Education, Healthcare, Agriculture
              and Community Empowerment.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-charcoal-500">
              Since 2020, Bash Bright Future Foundation has worked alongside
              vulnerable children, youth, women, and disadvantaged
              communities in Eastern Uganda — building futures that last.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/donate">Donate</Button>
              <Button href="/get-involved" variant="secondary">
                Partner With Us
              </Button>
            </div>
          </div>

          {/* BBFF logo */}
          <div className="flex items-center justify-center">
            <div className="relative h-56 w-56 overflow-hidden rounded-full shadow-raised md:h-72 md:w-72">
              <Image src="/logo.jpg" alt="Bash Bright Future Foundation logo" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </Section>

      {/* About teaser */}
      <Section tone="sand">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2>Who we are</h2>
          </div>
          <div className="lg:col-span-2 space-y-4 text-charcoal-500">
            <p>
              Bash Bright Future Foundation (BBFF) is a registered foundation
              in Uganda, established in 2020 and officially registered with
              the Uganda Registration Services Bureau (URSB) in May 2024.
            </p>
            <p>
              Our vision is empowered, healthy, educated, and self-reliant
              communities — where every person has equal opportunity to
              reach their full potential.
            </p>
            <Button href="/about" variant="ghost" className="mt-2">
              Read our story
            </Button>
          </div>
        </div>
      </Section>

      {/* Programmes */}
      <Section tone="white">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2>Our Programmes</h2>
            <p className="mt-2 max-w-2xl text-charcoal-500">
              Five programme areas working together toward lasting,
              community-led change.
            </p>
          </div>
          <Button href="/programmes" variant="ghost">
            View all programmes
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p) => (
            <ProgrammeCard key={p.slug} programme={p} />
          ))}
        </div>
      </Section>

      {/* Impact */}
      <Section tone="sand">
        <div className="text-center">
          <h2>Our Impact So Far</h2>
          <p className="mx-auto mt-2 max-w-xl text-charcoal-500">
            Figures below will be published once confirmed by the
            Foundation — we only publish real, verified numbers.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {impactStats.map((stat) => (
            <GrowthRings key={stat.label} value={stat.value} label={stat.label} size={140} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/impact" variant="ghost">
            See our full impact
          </Button>
        </div>
      </Section>

      {/* CTA band */}
      <Section tone="forest">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-sand-100">Join us in transforming lives</h2>
          <p className="max-w-xl text-sand-100/80">
            Whether you give, volunteer, or partner with us — every
            contribution helps build brighter futures across Eastern Uganda.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/donate">Donate</Button>
            <Button href="/get-involved" variant="ghost" className="border-sand-100 text-sand-100 hover:bg-sand-100/10">
              Get Involved
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
