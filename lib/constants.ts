export const siteConfig = {
  name: "Bash Bright Future Foundation",
  shortName: "BBFF",
  country: "Uganda",
  tagline: "Growing brighter futures, together.",
  email: "bashbrightfuturefoundation@gmail.com",
  phone: "+256 756 654 864",
  headOffice: "Kabwangasi Sub-county, Butebo District, Eastern Uganda",
  operationalOffice: "Mugiti Sub-county, Budaka District, Eastern Uganda",
  address: "Kabwangasi Sub-county, Butebo District, Eastern Uganda",
  registrationNote: "A registered foundation in Uganda",
};

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

// Primary navigation. Admin Dashboard intentionally excluded from public nav.
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Projects", href: "/projects" },
  { label: "Impact", href: "/impact" },
  { label: "News & Blog", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reports & Transparency", href: "/reports" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  explore: [
    { label: "About Us", href: "/about" },
    { label: "Programmes", href: "/programmes" },
    { label: "Projects", href: "/projects" },
    { label: "Impact", href: "/impact" },
  ],
  resources: [
    { label: "News & Blog", href: "/news" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reports & Transparency", href: "/reports" },
  ],
  connect: [
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact", href: "/contact" },
    { label: "Donate", href: "/donate" },
  ],
};

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export type ProgrammeSummary = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  highlights: string[];
  photos: string[];
};

// Source: BBFF Website Requirements Document, Section A.9 / C.3
export const programmes: ProgrammeSummary[] = [
  {
    slug: "education",
    title: "Education",
    description:
      "Sponsoring vulnerable children and strengthening schools across Eastern Uganda.",
    intro:
      "BBFF supports vulnerable children to access and stay in school — from sponsorship and scholastic materials to improving the classrooms themselves and mentoring pupils through school life.",
    highlights: ["Child sponsorship", "Scholastic materials", "School development", "Mentorship"],
    photos: [
      "/programmes/education/classroom-1.jpg",
      "/programmes/education/classroom-2.jpg",
      "/programmes/education/classroom-3.jpg",
      "/programmes/education/classroom-4.jpg",
      "/programmes/education/classroom-5.jpg",
    ],
  },
  {
    slug: "health",
    title: "Health",
    description:
      "Bringing medical care, clean water, and health education to underserved communities.",
    intro:
      "From medical outreach to clean water access, BBFF's health work focuses on prevention and access — including Water, Sanitation and Hygiene (WASH) projects such as borehole drilling at schools and community sites.",
    highlights: ["Medical outreach", "WASH", "Nutrition", "Disease prevention"],
    photos: [
      "/programmes/health/borehole-1.jpg",
      "/programmes/health/borehole-2.jpg",
      "/programmes/health/borehole-3.jpg",
    ],
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    description:
      "Building food security through climate-smart, sustainable farming practices.",
    intro:
      "BBFF works with local farmers on climate-smart agriculture, poultry, and crop production — building food security and household income across the communities we serve.",
    highlights: ["Climate-smart agriculture", "Poultry", "Crop production", "Farmer training"],
    photos: [
      "/programmes/agriculture/poultry-1.jpg",
      "/programmes/agriculture/poultry-2.jpg",
    ],
  },
  {
    slug: "skills-development",
    title: "Skills Development",
    description:
      "Equipping youth and women with practical skills for lasting economic independence.",
    intro:
      "Through vocational training in trades and ICT, BBFF equips youth and women with practical, income-generating skills — building independence beyond direct aid.",
    highlights: ["Tailoring", "Welding", "Carpentry", "ICT", "Entrepreneurship"],
    photos: [
      "/programmes/skills-development/tailoring-1.jpg",
      "/programmes/skills-development/tailoring-2.jpg",
    ],
  },
  {
    slug: "humanitarian-support",
    title: "Humanitarian Support",
    description:
      "Responding to urgent needs among the most vulnerable — food, water, and relief.",
    intro:
      "BBFF responds to urgent needs among the most vulnerable — emergency food, disaster response, water projects, and dedicated support for widows, elderly persons, and persons with disabilities.",
    highlights: ["Food support", "Disaster response", "Water projects", "Vulnerable groups support"],
    photos: [],
  },
];

// Source: BBFF Website Requirements Document, Section A.8
export type LeaderProfile = {
  name: string;
  role: string;
  photo: string;
};

export const founder: LeaderProfile = {
  name: "Prof. Ndibo Bashiri Manje",
  role: "Founder & Chief Executive Officer",
  photo: "/leadership/ndibo-bashiri-manje.jpg",
};

export const trustees: LeaderProfile[] = [
  { name: "Prof. Ndibo Bashiri Manje", role: "Founder & CEO", photo: "/leadership/ndibo-bashiri-manje.jpg" },
  { name: "Mr. Omitta Gerald", role: "Trustee", photo: "" },
  { name: "Oryang Sam", role: "Secretary & Trustee", photo: "/leadership/oryang-sam.jpg" },
  { name: "Talengela David", role: "Treasurer & Trustee", photo: "/leadership/talengela-david.jpg" },
];

export const coreValues = [
  "Integrity", "Accountability", "Transparency", "Compassion", "Equality",
  "Community Empowerment", "Excellence", "Sustainability", "Teamwork", "Innovation",
];

// Impact figures confirmed by BBFF — see Requirements Doc Section C.5.
export const impactStats: { label: string; value: string }[] = [
  { label: "vulnerable children supported", value: "300" },
  { label: "communities reached", value: "2" },
  { label: "farmers trained", value: "100" },
  { label: "boreholes constructed", value: "60" },
];

export const donationDetails = {
  bank: {
    accountName: "Bash Bright Future Foundation",
    accountNumber: "9030024731919",
    bankName: "Stanbic Bank Uganda",
    branch: "Mbale",
    swift: "SBICUGKX",
  },
  mobileMoney: {
    number: "+256 756 654 864",
  },
  contactPerson: {
    name: "Prof. Ndibo Bashiri Manje",
    role: "Founder & Chief Executive Officer",
  },
};
export const communitiesServed = [
  {
    name: "Mugiti Sub-county",
    district: "Budaka District, Eastern Uganda",
  },
  {
    name: "Kabwangasi Sub-county",
    district: "Butebo District, Eastern Uganda",
  },
];
