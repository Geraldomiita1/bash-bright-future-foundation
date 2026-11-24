export const siteConfig = {
  name: "Bash Bright Future Foundation",
  shortName: "BBFF",
  country: "Uganda",
  tagline: "Growing brighter futures, together.",
  email: "info@bashbrightfuturefoundation.org",
  phone: "+256 756 654 864",
  headOffice: "Kabwangasi Sub-county, Butebo District, Eastern Uganda",
  operationalOffice: "Mugiti Sub-county, Budaka District, Eastern Uganda",
  address: "Kabwangasi Sub-county, Butebo District, Eastern Uganda",
  registrationNote: "A registered charity in Uganda",
};

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

// Primary navigation — kept deliberately short (5 pages).
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programmes & Projects", href: "/programmes" },
  { label: "Impact & Reports", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
];

export const footerLinks = {
  explore: [
    { label: "About Us", href: "/about" },
    { label: "Programmes & Projects", href: "/programmes" },
    { label: "Impact & Reports", href: "/impact" },
  ],
  resources: [
    { label: "Get Involved", href: "/get-involved" },
    { label: "Donate", href: "/get-involved#donate" },
    { label: "Contact", href: "/get-involved#contact" },
  ],
};

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
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
  { name: "Mr. Omiita Gerald", role: "Chairperson", photo: "/leadership/omiita-gerald.jpg" },
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
