import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ProjectExtract from "@/components/ui/ProjectExtract";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Programmes & Projects",
  description:
    "The programmes and projects of Bash Bright Future Foundation (BBFF) in Eastern Uganda: clean water, agriculture, education, health and poultry.",
};

export default function ProgrammesPage() {
  const published = projects.filter((p) => p.published);

  return (
    <>
      <Section tone="white" className="pt-12 md:pt-16">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-500">
            Programmes &amp; Projects
          </p>
          <h1>What we do.</h1>
          <p className="mt-5 text-base text-charcoal-500">
            Our programmes give young people in rural Uganda the skills,
            health and opportunities to become independent.
          </p>
          <nav aria-label="On this page" className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-teal-500">
            {published.map((p) => (
              <a key={p.slug} href={`#${p.slug}`} className="hover:text-teal-700">
                {p.title.split(",")[0]}
              </a>
            ))}
          </nav>
        </div>
      </Section>

      <Section tone="sand">
        <div className="space-y-10">
          {published.map((p) => (
            <ProjectExtract key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section tone="forest">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-sand-100">Help us do more</h2>
          <p className="max-w-xl text-sand-100/80">
            And if you would like to get involved and support…
          </p>
          <Button href="/get-involved#donate">Donate</Button>
        </div>
      </Section>
    </>
  );
}
