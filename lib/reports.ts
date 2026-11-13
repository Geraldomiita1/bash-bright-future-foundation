export type ReportDocument = {
  name: string;
  year: number;
  file: string;
};

export const reportDocuments: ReportDocument[] = [
  {
    name: "Certificate of Incorporation (URSB)",
    year: 2024,
    file: "/documents/registration-certificate.pdf",
  },
  {
    name: "Financial Statement — Year Ended 31 December 2025",
    year: 2025,
    file: "/documents/financial-statement-2025.pdf",
  },
];

// Program expenditure breakdown — the one part of the 2025 financial
// statement that is internally consistent (these five lines sum to the
// Total Program Expenditure figure in the statement). Total income figures
// are not shown here pending confirmation from BBFF (see note on the page).
export const programExpenditure2025 = [
  { label: "Health Program", ugx: 1_000_000 },
  { label: "Education Program", ugx: 1_000_000 },
  { label: "Skills Development Program", ugx: 350_000 },
  { label: "Agriculture Program", ugx: 1_000_000 },
  { label: "Community Outreach", ugx: 2_660_000 },
];
