"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryPhotos, GalleryPhoto } from "@/lib/gallery";
import { cn } from "@/lib/utils";

const categories: (GalleryPhoto["category"] | "All")[] = [
  "All",
  "Education",
  "Health",
  "Agriculture",
  "Skills Development",
  "Humanitarian Support",
];

export default function GalleryGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered =
    active === "All" ? galleryPhotos : galleryPhotos.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "bg-forest-700 text-sand-100"
                : "bg-sand-50 text-charcoal-700 hover:bg-forest-50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {filtered.map((photo) => (
            <div key={photo.src} className="group relative aspect-square overflow-hidden rounded-lg shadow-card">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal-900/70 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-xs text-sand-100">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-8 text-charcoal-500">
          Photos for this category are coming soon.
        </p>
      )}
    </div>
  );
}
