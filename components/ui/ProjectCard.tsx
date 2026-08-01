import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Card from "./Card";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

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

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden !p-0">
      <div className="relative h-44 w-full bg-forest-50">
        {project.photos[0] ? (
          <Image
            src={project.photos[0]}
            alt={project.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-forest-700">
            Photos coming soon
          </div>
        )}
        <span
          className={cn(
            "absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold",
            statusStyles[project.status]
          )}
        >
          {statusLabel[project.status]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-teal-500">
          {project.category}
        </p>
        <h3 className="mt-1">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm text-charcoal-500">{project.location}</p>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-500 hover:text-teal-700"
        >
          View project <ArrowRight size={14} />
        </Link>
      </div>
    </Card>
  );
}
