import Image from "next/image";
import Button from "@/components/ui/Button";
import { Project } from "@/types";

export default function ProjectExtract({ project }: { project: Project }) {
  const [lead, ...rest] = project.photos;
  return (
    <article
      id={project.slug}
      className="scroll-mt-28 rounded-lg border border-sand-200 bg-sand-50 p-6 shadow-card md:p-10"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-teal-500">
        {project.category}
      </p>
      <h3 className="mt-2 text-xl md:text-2xl">{project.title}</h3>

      {lead && (
        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src={lead}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="mt-6 max-w-3xl space-y-4 text-charcoal-500">
        {project.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {rest.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {rest.map((src) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={project.title}
                fill
                sizes="(min-width: 640px) 300px, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 border-t border-sand-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-base text-forest-700 md:text-lg">
          And if you would like to get involved and support…
        </p>
        <Button href="/get-involved#donate">Donate</Button>
      </div>
    </article>
  );
}
