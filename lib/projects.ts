import { Project } from "@/types";

// HOW TO ADD OR EDIT A PROGRAMME / PROJECT
// 1. Copy one block below and paste it into the list.
// 2. Give it a unique lowercase "slug" (used for the link, e.g. /programmes#my-slug).
// 3. Put each paragraph as one line of text inside "body".
// 4. Add photos (files inside /public) or leave photos: [].
// 5. Set published: false to keep a draft hidden until it is ready.
// Each entry automatically ends with the "get involved and support… Donate" call.
export const projects: Project[] = [
  {
    slug: "boreholes-clean-water-wash-soap-making",
    title: "Boreholes, Clean Water, WASH and Soap Making",
    category: "Water & Hygiene",
    published: true,
    body: [
      "In rural Uganda, access to clean water is a challenge, and usually not readily available. Local people must walk quite a distance to fetch water from a local river. Usually, this river is not a source of clean water, because people use it for washing, animals pass through it. Therefore, the chances of disease and waterborne illnesses is quite high.",
      "Through generous donations, we have been able to provide bore holes for accessing drinking water and for domestic use. Bringing the water to the community, reducing journeys to and from the river but most importantly the water is clean, and disease free.",
      "A borehole is a narrow shaft drilled several hundred feet to reach an underground aquifer containing ground water which can then be pumped.",
      "We have managed to have one near our site supporting the hygiene programme and the soap making programme.",
      "We teach the necessity of water, its use for domestic purposes, but also a means for hygiene, and health, educating children and the wider community simultaneously. The boreholes are a source of life for everyone.",
    ],
    photos: [
      "/programmes/health/borehole-6.jpg",
      "/programmes/health/borehole-5.jpg",
      "/programmes/health/borehole-4.jpg",
      "/programmes/health/borehole-1.jpg",
      "/programmes/health/borehole-2.jpg",
      "/programmes/health/borehole-3.jpg",
    ],
  },
  {
    slug: "agriculture-and-farming",
    title: "Agriculture and Farming",
    category: "Agriculture",
    published: true,
    body: [
      "In a rural community where the land is vast, we believe that we need to enable our young people to learn how to use the land for good. The land can provide them with food, and a source of income.",
      "We collaborate with local farmers who in turn support us by taking on apprentices.",
      "Our most recent project is one of ‘poultry’ where we teach young people how to rear chickens, as a source of food, and work.",
      "We encourage our young people to look after the chickens and take the correct hygiene precautions so as to ensure that there are no diseases transmitted.",
      "We teach them that chickens, can be reared for eggs as well as meat, and how to engage with local abattoirs for mass meat production, whilst simultaneously educating them about the domestic use of chickens and how they can be a source of nourishment for households.",
      "Through this programme we ensure that the nourishment of our young people in our care, ensuring that they will at least have one meal a day.",
    ],
    photos: ["/programmes/agriculture/poultry-2.jpg"],
  },
  {
    slug: "education",
    title: "Education",
    category: "Education",
    published: true,
    body: [
      "BASH Bright Future Foundation (BBFF) is a community-based, secular, volunteer-led charitable organisation in Eastern Uganda, established in 2020 to support children and improve their opportunities for a better future.",
      "The project focuses on children aged 5–25 who come from disadvantaged backgrounds or who have lost their parents. BASH acts as a haven for these young people, providing them with the skills and opportunities they need to become self-reliant and contribute positively to their wider community.",
      "BASH aims to support, train and educate these young people so that, later in life, they can strengthen their communities, contribute to economic stability and help create a sustainable future.",
      "BASH is not just about its direct beneficiaries; it is also about the wider communities from which they come. After all, what better way is there to support young people than by investing in their future and the future of their communities?",
      "Through our work, we support over 300 children in the Mugiti area of Budaka District and surrounding communities. We believe every child deserves access to quality education, regardless of their family's financial circumstances.",
      "Our education programme aims to reduce the barriers that prevent disadvantaged children from accessing education, participating fully in learning and progressing towards a more secure future.",
      "BASH envisions supporting vulnerable communities by empowering disadvantaged young people to transform their circumstances and become entrepreneurs, leaders and catalysts for positive change.",
    ],
    photos: [
      "/programmes/education/classroom-2.jpg",
      "/programmes/education/classroom-1.jpg",
      "/programmes/education/classroom-3.jpg",
      "/programmes/education/classroom-4.jpg",
      "/programmes/education/classroom-5.jpg",
    ],
  },
  {
    slug: "health",
    title: "Health",
    category: "Health",
    published: true,
    body: [
      "Health education encompasses many elements in a rural community, especially when supporting teenagers, in an environment where water and soap are not easily accessible.",
      "In a rural community where girls are ‘seen’ different to boys in many ways, and through tradition and culture are expected to behave in certain ways, we try to offer ‘education’ and ‘understanding’.",
      "We have qualified medics that support our young women to understand their bodies, and what is appropriate, but also empower them to be able to say no. Furthermore, and more fundamentally, we educate them on FGM and Child marriages, so that they are fully alert and aware.",
      "We offer the same education for boys and again support them and educate them to understand and respect boundaries, but to also protect themselves; especially in a region where AIDS and teenage pregnancy are rife.",
      "Our medics and consultants support our young people to understand the meaning of wellbeing, hygiene and covering sexual health.",
    ],
    photos: [],
  },
  {
    slug: "poultry",
    title: "Poultry",
    category: "Agriculture",
    published: true,
    body: [
      "In this part of Uganda, poultry is a key nutritional provider as well as an income provider. As a school that also feeds our young people, we invested in a poultry program where we are both in a position to offer our young people a nutritional meal, as well as educate them in a safe way how to rear chickens.",
      "We take extra care when exposing the children to the chickens, ensuring that they wash their hands, and that we bring the chickens out of the pen to be accessible, and thus avoiding any possibility of cross contaminations and exposure to disease.",
    ],
    photos: [
      "/programmes/agriculture/poultry-4.jpg",
      "/programmes/agriculture/poultry-3.jpg",
      "/programmes/agriculture/poultry-1.jpg",
    ],
  },

  // ---- Hidden drafts (not shown on the site). Set published: true to bring one back. ----
  {
    slug: "draft-classroom-learning-continues",
    title: "Classroom Learning Continues Despite Challenging Conditions",
    category: "Education",
    published: false,
    body: [
      "At Bright Future Learning Centre in Mugiti Sub-county, Budaka District, vulnerable children continue to attend classes each day with determination and hope for a brighter future. Some lessons are conducted in temporary structures that are vulnerable to heavy rains and harsh weather.",
      "We are actively seeking support to improve classroom facilities by constructing permanent classrooms, providing desks, textbooks, and other essential learning materials.",
    ],
    photos: [],
  },
  {
    slug: "draft-tailoring-skills",
    title: "Equipping Young People with Skills for a Better Future",
    category: "Skills",
    published: false,
    body: [
      "As part of our Skills Development Programme, we have established a tailoring training centre in Mugiti Sub-county, Budaka District, where we have purchased five sewing machines to equip young women and men with vocational skills.",
    ],
    photos: ["/programmes/skills-development/tailoring-1.jpg", "/programmes/skills-development/tailoring-2.jpg"],
  },
];
