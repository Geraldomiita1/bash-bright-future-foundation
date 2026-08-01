import Image from "next/image";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { trustees, coreValues } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The history, vision, mission, values, and leadership of Bash Bright Future Foundation (BBFF), a registered foundation in Uganda.",
};

export default function AboutPage() {
  return (
    <>
      <Section tone="white" className="pt-16 md:pt-24">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-500">
            About Us
          </p>
          <h1>Building brighter futures since 2020.</h1>
          <p className="mt-6 text-lg text-charcoal-500">
            Bash Bright Future Foundation (BBFF) began as a community
            initiative to improve the lives of vulnerable children, youth,
            women, persons with disabilities, and disadvantaged communities
            in Eastern Uganda.
          </p>
        </div>
      </Section>

      {/* History & registration */}
      <Section tone="sand">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <h2>Our Story</h2>
          </div>
          <div className="lg:col-span-2 space-y-4 text-charcoal-500">
            <p>
              BBFF was established in 2020, growing out of grassroots work
              with vulnerable communities in Kabwangasi Sub-county, Butebo
              District. As the work grew, so did the need for a formal
              structure — leading to incorporation as Bash Bright Future
              Foundation Limited on 23 May 2024 (Registration No.
              80034413062032), registered with the Uganda Registration
              Services Bureau (URSB) under the Companies Act, 2012.
            </p>
            <p>
              Today, most of BBFF&apos;s programmes are implemented in Mugiti
              Sub-county, Budaka District, while the Head Office remains in
              Kabwangasi Sub-county, Butebo District — both in Eastern
              Uganda.
            </p>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section tone="white">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card>
            <h3>Our Vision</h3>
            <p className="mt-3 italic text-forest-700">
              &ldquo;To build empowered, healthy, educated, and self-reliant
              communities where every person has equal opportunities to
              reach their full potential.&rdquo;
            </p>
          </Card>
          <Card>
            <h3>Our Mission</h3>
            <p className="mt-3 text-charcoal-500">
              To improve the lives of vulnerable communities through quality
              education, accessible healthcare, sustainable agriculture,
              skills development, humanitarian assistance, and strategic
              partnerships that promote sustainable development.
            </p>
          </Card>
        </div>
      </Section>

      {/* Core Values */}
      <Section tone="sand">
        <h2 className="text-center">Our Core Values</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {coreValues.map((value) => (
            <span
              key={value}
              className="rounded-full bg-forest-700 px-5 py-2 text-sm font-medium text-sand-100"
            >
              {value}
            </span>
          ))}
        </div>
      </Section>

      {/* Leadership */}
      <Section tone="white">
        <h2 className="text-center">Leadership</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-charcoal-500">
          BBFF is guided by a Founder/CEO and a Board of Trustees committed
          to accountability and sound governance.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustees.map((person) => (
            <div key={person.name} className="text-center">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full bg-forest-50 shadow-card">
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center font-display text-2xl text-forest-700">
                    {person.name
                      .split(" ")
                      .filter((w) => !w.endsWith("."))
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}
              </div>
              <p className="mt-4 font-semibold text-forest-700">{person.name}</p>
              <p className="text-sm text-charcoal-500">{person.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
