// Shared content types — will be extended as each page/section is built.

export type Programme = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  coverImageUrl?: string;
};

export type ProjectStatus = "planned" | "ongoing" | "completed";

export type Project = {
  slug: string;
  name: string;
  category: string;
  location: string;
  status: ProjectStatus;
  description: string;
  objectives: string[];
  beneficiaries: string;
  photos: string[];
};

export type NewsPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  coverImageUrl?: string;
};

export type ImpactStat = {
  id: string;
  label: string;
  value: string;
};
