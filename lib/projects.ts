import { Project } from "@/types";

// Source: BBFF Website Requirements Document, Section C.4 / Section 10 (Projects & Impact).
// Objectives and beneficiary figures are written generically where BBFF
// has not yet confirmed exact numbers — see Section C.5: "use real figures only."
export const projects: Project[] = [
  {
    slug: "borehole-clean-water-drilling",
    name: "Borehole & Clean Water Drilling Project",
    category: "Health (WASH)",
    location: "School and community sites, Budaka District, Eastern Uganda",
    status: "ongoing",
    description:
      "BBFF drills boreholes at schools and community sites to provide safe, clean drinking water — reducing waterborne disease and the time children and caregivers spend fetching water from unsafe sources.",
    objectives: [
      "Provide safe, reliable drinking water at partner sites",
      "Reduce incidence of waterborne illness",
      "Support Water, Sanitation and Hygiene (WASH) education alongside each site",
    ],
    beneficiaries:
      "Pupils and surrounding community members at each drilling site (exact figures to be confirmed by BBFF)",
    photos: [
      "/programmes/health/borehole-1.jpg",
      "/programmes/health/borehole-2.jpg",
      "/programmes/health/borehole-3.jpg",
      "/programmes/health/borehole-4.jpg",
    ],
  },
  {
    slug: "educational-support-vulnerable-children",
    name: "Educational Support for Vulnerable Children",
    category: "Education",
    location: "Partner primary schools, Budaka District, Eastern Uganda",
    status: "ongoing",
    description:
      "BBFF supports vulnerable children to access and stay in school — sponsorship, scholastic materials, and mentorship — while working with partner schools to improve learning conditions.",
    objectives: [
      "Sponsor vulnerable children through primary education",
      "Provide scholastic materials to reduce barriers to attendance",
      "Mentor pupils through school life",
    ],
    beneficiaries:
      "Vulnerable children at partner primary schools (exact figures to be confirmed by BBFF)",
    photos: [
      "/programmes/education/classroom-1.jpg",
      "/programmes/education/classroom-2.jpg",
      "/programmes/education/classroom-3.jpg",
      "/programmes/education/classroom-4.jpg",
      "/programmes/education/classroom-5.jpg",
    ],
  },
  {
    slug: "poultry-farming-empowerment",
    name: "Poultry Farming Empowerment Project",
    category: "Agriculture",
    location: "Eastern Uganda",
    status: "ongoing",
    description:
      "BBFF supports local farmers and youth with poultry farming — building practical skills and a source of household income and food security.",
    objectives: [
      "Train participants in poultry-rearing practices",
      "Improve household income and food security",
      "Build a replicable model for other farmer groups",
    ],
    beneficiaries:
      "Local farmers and youth participants (exact figures to be confirmed by BBFF)",
    photos: [
      "/programmes/agriculture/poultry-1.jpg",
      "/programmes/agriculture/poultry-2.jpg",
    ],
  },
  {
    slug: "bright-future-learning-centre",
    name: "Bright Future Learning Centre",
    category: "Education",
    location: "Eastern Uganda (site details to be confirmed by BBFF)",
    status: "ongoing",
    description:
      "A dedicated learning centre established by BBFF to expand access to education for vulnerable children in the communities it serves. Full background, activities, and impact details are being finalized with the Foundation.",
    objectives: [
      "Details to be confirmed by BBFF",
    ],
    beneficiaries: "To be confirmed by BBFF",
    photos: [],
  },
  {
    slug: "health-outreach-programmes",
    name: "Health Outreach Programmes",
    category: "Health",
    location: "Eastern Uganda",
    status: "ongoing",
    description:
      "Medical outreach, community health education, and maternal and child health services delivered to underserved communities.",
    objectives: ["Details to be confirmed by BBFF"],
    beneficiaries: "To be confirmed by BBFF",
    photos: [],
  },
  {
    slug: "skills-training-initiatives",
    name: "Skills Training Initiatives",
    category: "Skills Development",
    location: "Mugiti Sub-county, Budaka District, Eastern Uganda",
    status: "ongoing",
    description:
      "A tailoring training centre equipped with five sewing machines, giving young women and men hands-on vocational training. BBFF plans to expand into carpentry, welding, hairdressing, and crafts as capacity grows.",
    objectives: [
      "Provide hands-on tailoring training to youth and women",
      "Enable participants to start small businesses or secure employment",
      "Expand into carpentry, welding, hairdressing, and crafts",
    ],
    beneficiaries:
      "Young women and men in Mugiti Sub-county (exact figures to be confirmed by BBFF)",
    photos: [
      "/programmes/skills-development/tailoring-1.jpg",
      "/programmes/skills-development/tailoring-2.jpg",
    ],
  },
  {
    slug: "humanitarian-relief-programmes",
    name: "Humanitarian Relief Programmes",
    category: "Humanitarian Support",
    location: "Eastern Uganda",
    status: "ongoing",
    description:
      "Emergency food distribution, disaster response, and dedicated support for widows, elderly persons, and persons with disabilities.",
    objectives: ["Details to be confirmed by BBFF"],
    beneficiaries: "To be confirmed by BBFF",
    photos: [],
  },
];
