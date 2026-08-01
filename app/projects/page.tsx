import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Completed and ongoing projects from Bash Bright Future Foundation (BBFF) across Eastern Uganda.",
};

export default function ProjectsPage() {
  return (
    <>
      <Section tone="white" className="pt-16 md:pt-24">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-500">
            Projects
          </p>
          <h1>Our projects on the ground.</h1>
          <p className="mt-6 text-lg text-charcoal-500">
            From clean water to classrooms to poultry farms — a look at the
            work BBFF is doing across Eastern Uganda.
          </p>
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
