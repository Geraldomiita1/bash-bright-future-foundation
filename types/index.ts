// Shared content types.

export type Project = {
  slug: string;
  title: string;
  category: string;
  /** Paragraphs, in order. Plain text — also ready to paste into a LinkedIn post. */
  body: string[];
  /** Image paths under /public. Optional. */
  photos: string[];
  /** Set to false to keep a draft in the file without showing it on the site. */
  published: boolean;
};
