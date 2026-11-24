export type GalleryPhoto = {
  src: string;
  category: "Education" | "Health" | "Agriculture";
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
  { src: "/programmes/health/borehole-6.jpg", category: "Health", caption: "Community gathered at a newly completed borehole" },
  { src: "/programmes/health/borehole-5.jpg", category: "Health", caption: "A child at the new borehole pump" },
  { src: "/programmes/agriculture/poultry-3.jpg", category: "Agriculture", caption: "New chicks in the brooder" },
  { src: "/programmes/agriculture/poultry-4.jpg", category: "Agriculture", caption: "Day-old chicks feeding and drinking" },
  { src: "/programmes/agriculture/poultry-1.jpg", category: "Agriculture", caption: "Poultry farming project" },
  { src: "/programmes/agriculture/poultry-2.jpg", category: "Agriculture", caption: "Poultry farming project" },
];
