import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import ProgrammeCard from "@/components/ui/ProgrammeCard";
import { programmes } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "BBFF's five programme areas: Education, Health, Agriculture, Skills Development, and Humanitarian Support.",
};

export default function ProgrammesPage() {
  return (
    <>
      <Section tone="white" className="pt-16 md:pt-24">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-500">
            Programmes
          </p>
          <h1>Five programmes, one goal: lasting change.</h1>
          <p className="mt-6 text-lg text-charcoal-500">
            Each programme is designed to work alongside the others — a
            child supported through school also benefits from a healthier,
            more food-secure household, and a more skilled community.
          </p>
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p) => (
            <ProgrammeCard key={p.slug} programme={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
