import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { newsPosts } from "@/lib/news";

export function generateStaticParams() {
  return newsPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <Section tone="white" className="pt-16 md:pt-24">
      <div className="mx-auto max-w-2xl">
        <Link href="/news" className="text-sm font-medium text-teal-500 hover:text-teal-700">
          ← All News
        </Link>
        <p className="mt-4 text-xs uppercase tracking-wide text-teal-500">
          {new Date(post.date).toLocaleDateString("en-UG", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="mt-2">{post.title}</h1>
        {post.coverImage && (
          <div className="relative mt-6 h-72 w-full overflow-hidden rounded-lg">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
          </div>
        )}
        <div className="mt-8 space-y-4 text-charcoal-500">
          {post.content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
