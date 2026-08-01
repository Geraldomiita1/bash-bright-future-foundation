import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { Project } from "@/types";

const statusStyles: Record<Project["status"], string> = {
  planned: "bg-sand-200 text-charcoal-700",
  ongoing: "bg-gold-500 text-charcoal-900",
  completed: "bg-forest-700 text-sand-100",
};

const statusLabel: Record<Project["status"], string> = {
  planned: "Planned",
  ongoing: "Ongoing",
  completed: "Completed",
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.description };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Section tone="white" className="pt-16 md:pt-24">
        <Link href="/projects" className="text-sm font-medium text-teal-500 hover:text-teal-700">
          ← All Projects
        </Link>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <h1 className="!mb-0">{project.name}</h1>
          <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", statusStyles[project.status])}>
            {statusLabel[project.status]}
          </span>
        </div>
        <p className="mt-3 flex items-center gap-2 text-sm text-charcoal-500">
          <MapPin size={16} className="text-teal-500" />
          {project.location}
        </p>
        <p className="mt-6 max-w-2xl text-lg text-charcoal-500">{project.description}</p>
      </Section>

      <Section tone="sand">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <h2 className="text-xl">Objectives</h2>
            <ul className="mt-4 space-y-2">
              {project.objectives.map((obj) => (
                <li key={obj} className="flex gap-2 text-charcoal-500">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {obj}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-xl">Beneficiaries</h2>
            <p className="mt-4 text-charcoal-500">{project.beneficiaries}</p>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <h2>Gallery</h2>
        {project.photos.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {project.photos.map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-lg shadow-card">
                <Image src={src} alt={project.name} fill className="object-cover" />
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-charcoal-500">
            Photos for this project are coming soon.
          </p>
        )}
      </Section>

      <Section tone="forest">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-sand-100">Help us do more work like this</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/donate">Donate</Button>
            <Button
              href="/get-involved"
              variant="ghost"
              className="border-sand-100 text-sand-100 hover:bg-sand-100/10"
            >
              Get Involved
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
