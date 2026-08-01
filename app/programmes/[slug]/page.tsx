import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { programmes } from "@/lib/constants";

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const programme = programmes.find((p) => p.slug === slug);
  if (!programme) return {};
  return {
    title: programme.title,
    description: programme.description,
  };
}

export default async function ProgrammeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const programme = programmes.find((p) => p.slug === slug);
  if (!programme) notFound();

  return (
    <>
      <Section tone="white" className="pt-16 md:pt-24">
        <Link
          href="/programmes"
          className="text-sm font-medium text-teal-500 hover:text-teal-700"
        >
          ← All Programmes
        </Link>
        <h1 className="mt-4">{programme.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-charcoal-500">
          {programme.intro}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {programme.highlights.map((h) => (
            <span
              key={h}
              className="rounded-full bg-forest-50 px-4 py-1.5 text-sm font-medium text-forest-700"
            >
              {h}
            </span>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <h2>Gallery</h2>
        {programme.photos.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {programme.photos.map((src) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-lg shadow-card"
              >
                <Image
                  src={src}
                  alt={`${programme.title} programme photo`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-charcoal-500">
            Photos for this programme are coming soon — check back shortly,
            or see our other programmes in the meantime.
          </p>
        )}
      </Section>

      <Section tone="forest">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-sand-100">Support the {programme.title} programme</h2>
          <p className="max-w-xl text-sand-100/80">
            Your donation helps BBFF continue and expand this work across
            Eastern Uganda.
          </p>
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
