export type GalleryPhoto = {
  src: string;
  category: "Education" | "Health" | "Agriculture" | "Skills Development" | "Humanitarian Support";
  caption: string;
};

// Pulled from programme/project photos already uploaded by BBFF.
export const galleryPhotos: GalleryPhoto[] = [
  { src: "/programmes/education/classroom-1.jpg", category: "Education", caption: "A partner school classroom" },
  { src: "/programmes/education/classroom-2.jpg", category: "Education", caption: "A lesson in session" },
  { src: "/programmes/education/classroom-3.jpg", category: "Education", caption: "Pupils at a partner school" },
  { src: "/programmes/education/classroom-4.jpg", category: "Education", caption: "Classroom activity" },
  { src: "/programmes/education/classroom-5.jpg", category: "Education", caption: "Pupils gathered for a lesson" },
  { src: "/programmes/health/borehole-1.jpg", category: "Health", caption: "A completed borehole in use" },
  { src: "/programmes/health/borehole-2.jpg", category: "Health", caption: "Borehole drilling site" },
  { src: "/programmes/health/borehole-3.jpg", category: "Health", caption: "Borehole construction in progress" },
  { src: "/programmes/health/borehole-4.jpg", category: "Health", caption: "Children fetching clean water at a completed borehole" },
  { src: "/programmes/agriculture/poultry-1.jpg", category: "Agriculture", caption: "Poultry farming project" },
  { src: "/programmes/agriculture/poultry-2.jpg", category: "Agriculture", caption: "Poultry farming project" },
  { src: "/programmes/skills-development/tailoring-1.jpg", category: "Skills Development", caption: "Tailoring training centre, Mugiti Sub-county" },
  { src: "/programmes/skills-development/tailoring-2.jpg", category: "Skills Development", caption: "Sewing machines at the tailoring centre" },
];
