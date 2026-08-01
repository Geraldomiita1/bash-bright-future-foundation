import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import GalleryGrid from "@/components/ui/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Bash Bright Future Foundation (BBFF) programmes across Eastern Uganda.",
};

export default function GalleryPage() {
  return (
    <>
      <Section tone="white" className="pt-16 md:pt-24">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-500">
            Gallery
          </p>
          <h1>Our work, in pictures.</h1>
          <p className="mt-6 text-lg text-charcoal-500">
            A look at BBFF&apos;s programmes across Eastern Uganda. More
            photos and videos are added as programmes progress.
          </p>
        </div>
      </Section>

      <Section tone="sand">
        <GalleryGrid />
      </Section>
    </>
  );
}
