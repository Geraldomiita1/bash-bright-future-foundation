export type NewsPost = {
  slug: string;
  title: string;
  date: string; // ISO format, e.g. "2026-07-15"
  excerpt: string;
  content: string;
  coverImage?: string;
};

// Add real posts here as BBFF publishes them.
// Slugs should be lowercase, hyphenated, and unique.
export const newsPosts: NewsPost[] = [
  {
    slug: "classroom-learning-continues-despite-challenging-conditions",
    title: "Classroom Learning Continues Despite Challenging Conditions",
    date: "2026-07-31",
    excerpt:
      "At Bright Future Learning Centre in Mugiti Sub-county, vulnerable children continue attending classes despite temporary structures vulnerable to harsh weather.",
    content: `At Bash Bright Future Foundation, we remain committed to ensuring that every child has access to quality education, regardless of their circumstances. At Bright Future Learning Centre in Mugiti Sub-county, Budaka District, vulnerable children continue to attend classes each day with determination and hope for a brighter future.

Although learning continues, our classrooms face significant challenges. Some lessons are conducted in temporary structures that are vulnerable to heavy rains and harsh weather, creating an uncomfortable environment for both learners and teachers. Despite these difficulties, our dedicated staff work tirelessly to provide a safe, nurturing, and engaging learning experience.

We are actively seeking support to improve classroom facilities by constructing permanent classrooms, providing desks, textbooks, and other essential learning materials. Every contribution helps create a better learning environment where children can thrive academically and build the foundation for a brighter future.`,
    coverImage: "/programmes/education/classroom-2.jpg",
  },
  {
    slug: "empowering-young-people-through-sustainable-poultry-farming",
    title: "Empowering Young People Through Sustainable Poultry Farming",
    date: "2026-07-20",
    excerpt:
      "BBFF is raising 200 broiler chickens at a demonstration poultry project, giving young people hands-on training in poultry management and entrepreneurship.",
    content: `Bash Bright Future Foundation is committed to equipping young people with practical skills that promote self-reliance and long-term economic empowerment. As part of our agriculture programme, we are currently raising 200 broiler chickens at our demonstration poultry project.

This initiative gives young people hands-on experience in modern poultry farming, teaching them essential skills in poultry management, feeding, disease prevention, and business planning. By combining practical training with entrepreneurship, we are preparing the next generation to create sustainable livelihoods, improve household incomes, and contribute to food security within their communities.

Our vision is to expand this programme so that more young people can gain valuable agricultural skills, become self-sustainable, and inspire others to embrace farming as a pathway out of poverty.`,
    coverImage: "/programmes/agriculture/poultry-1.jpg",
  },
  {
    slug: "bringing-clean-water-and-hope-to-rural-communities",
    title: "Bringing Clean Water and Hope to Rural Communities",
    date: "2026-07-10",
    excerpt:
      "BBFF has supported the construction of 60 boreholes across communities in Mbale, Butebo, Budaka, and Sironko districts — and is now appealing for support for two more.",
    content: `Access to clean and safe drinking water is one of the most urgent needs in many rural communities across Uganda. Through our humanitarian initiatives, Bash Bright Future Foundation has successfully supported the construction of 60 boreholes, bringing clean water closer to thousands of people who previously had to walk more than 10 kilometres to access a reliable water source.

These boreholes have been established in communities including Makudui Ward (Mbale District), Kolonyi Ward (Mbale City), Kabwangasi Village (Butebo District), Macholi Village (Budaka District), Bungokho (Mbale District), and Naluggu (Sironko District), among other underserved areas. The projects have reduced the burden of long journeys for water, improved sanitation and health, and given children more time to attend school instead of spending hours collecting water.

While we celebrate this milestone, the need remains great. We are currently appealing for support to construct two additional boreholes in communities that still lack access to safe drinking water. Every new borehole transforms lives by improving health, restoring dignity, and creating opportunities for education and economic development.

At Bash Bright Future Foundation, we believe that access to clean water is a basic human right. With the continued support of our partners and donors, we can bring hope, health, and lasting change to even more communities across Uganda.`,
    coverImage: "/programmes/health/borehole-4.jpg",
  },
  {
    slug: "equipping-young-people-with-skills-for-a-better-future",
    title: "Equipping Young People with Skills for a Better Future",
    date: "2025-10-07",
    excerpt:
      "BBFF has established a tailoring training centre in Mugiti Sub-county with five sewing machines, giving young women and men hands-on vocational skills.",
    content: `Bash Bright Future Foundation believes that practical skills are key to reducing poverty and creating sustainable livelihoods. As part of our Skills Development Programme, we have established a tailoring training centre in Mugiti Sub-county, Budaka District, where we have purchased five sewing machines to equip young women and men with vocational skills.

The programme provides hands-on training in tailoring, enabling participants to gain skills that can help them start small businesses, secure employment, and become financially independent. We are encouraged by the interest from the community, but the demand for training continues to grow. At present, our greatest challenge is limited capital to purchase additional sewing machines and expand the programme to accommodate more trainees.

Looking ahead, we plan to introduce other vocational skills such as carpentry, welding, hairdressing, and crafts as the foundation continues to grow. With the support of partners and donors, we aim to create a vibrant vocational training centre that empowers young people with practical skills, promotes self-reliance, and contributes to the economic development of our communities.`,
    coverImage: "/programmes/skills-development/tailoring-1.jpg",
  },
];
