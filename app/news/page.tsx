import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { newsPosts } from "@/lib/news";

export const metadata: Metadata = {
  title: "News & Blog",
  description: "Updates and stories from Bash Bright Future Foundation (BBFF).",
};

export default function NewsPage() {
  return (
    <>
      <Section tone="white" className="pt-16 md:pt-24">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-500">
            News &amp; Blog
          </p>
          <h1>Updates from the field.</h1>
          <p className="mt-6 text-lg text-charcoal-500">
            Stories, activities, and announcements from BBFF&apos;s work
            across Eastern Uganda.
          </p>
        </div>
      </Section>

      <Section tone="sand">
        {newsPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newsPosts.map((post) => (
              <Link key={post.slug} href={`/news/${post.slug}`}>
                <Card className="flex h-full flex-col overflow-hidden !p-0">
                  {post.coverImage && (
                    <div className="relative h-44 w-full">
                      <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-wide text-teal-500">
                      {new Date(post.date).toLocaleDateString("en-UG", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h3 className="mt-1">{post.title}</h3>
                    <p className="mt-2 text-sm text-charcoal-500">{post.excerpt}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card>
            <p className="text-charcoal-500">
              No posts yet — check back soon for updates from BBFF&apos;s
              work across Eastern Uganda.
            </p>
          </Card>
        )}
      </Section>
    </>
  );
}
