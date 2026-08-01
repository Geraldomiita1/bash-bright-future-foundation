import type { Metadata } from "next";
import Image from "next/image";
import { FileText, Download, ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { trustees, founder } from "@/lib/constants";
import { reportDocuments, programExpenditure2025 } from "@/lib/reports";

export const metadata: Metadata = {
  title: "Reports & Transparency",
  description:
    "Registration, financial summaries, governance, and reports for Bash Bright Future Foundation (BBFF).",
};

export default function ReportsPage() {
  const totalProgramExpenditure = programExpenditure2025.reduce((sum, r) => sum + r.ugx, 0);

  return (
    <>
      <Section tone="white" className="pt-16 md:pt-24">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-500">
            Reports &amp; Transparency
          </p>
          <h1>Open about how we work.</h1>
          <p className="mt-6 text-lg text-charcoal-500">
            BBFF is committed to accountability. Below are our registration
            documents, financial summaries, governance structure, and
            reports — so donors and partners can see exactly how we operate.
          </p>
        </div>
      </Section>

      {/* Legal registration */}
      <Section tone="sand">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card>
            <div className="flex items-center gap-3">
              <ShieldCheck size={22} className="text-teal-500" />
              <h2 className="text-xl">Legal Registration</h2>
            </div>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between border-b border-sand-200 py-2">
                <dt className="text-charcoal-500">Registration No.</dt>
                <dd className="font-medium text-charcoal-700">80034413062032</dd>
              </div>
              <div className="flex justify-between border-b border-sand-200 py-2">
                <dt className="text-charcoal-500">Certificate issued</dt>
                <dd className="font-medium text-charcoal-700">23 May 2024</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt className="text-charcoal-500">Issuing body</dt>
                <dd className="font-medium text-charcoal-700">
                  Uganda Registration Services Bureau (URSB)
                </dd>
              </div>
            </dl>
            <Button
              href="/documents/registration-certificate.pdf"
              variant="ghost"
              className="mt-5"
            >
              <Download size={16} className="mr-2" /> View Certificate
            </Button>
          </Card>

          {/* Financial summary */}
          <Card>
            <div className="flex items-center gap-3">
              <FileText size={22} className="text-teal-500" />
              <h2 className="text-xl">Financial Summary (2025)</h2>
            </div>
            <p className="mt-2 text-sm text-charcoal-500">
              Programme expenditure for the year ended 31 December 2025:
            </p>
            <dl className="mt-4 space-y-2 text-sm">
              {programExpenditure2025.map((row) => (
                <div key={row.label} className="flex justify-between border-b border-sand-200 py-2">
                  <dt className="text-charcoal-500">{row.label}</dt>
                  <dd className="font-medium text-charcoal-700">
                    UGX {row.ugx.toLocaleString()}
                  </dd>
                </div>
              ))}
              <div className="flex justify-between py-2">
                <dt className="font-semibold text-charcoal-700">Total Programme Expenditure</dt>
                <dd className="font-semibold text-forest-700">
                  UGX {totalProgramExpenditure.toLocaleString()}
                </dd>
              </div>
            </dl>
            <p className="mt-3 text-xs italic text-charcoal-500">
              Full statement — including income, assets, and administrative
              costs — is available in the document below.
            </p>
            <Button
              href="/documents/financial-statement-2025.pdf"
              variant="ghost"
              className="mt-5"
            >
              <Download size={16} className="mr-2" /> View Full Statement
            </Button>
          </Card>
        </div>
      </Section>

      {/* Governance */}
      <Section tone="white">
        <h2>Governance Structure</h2>
        <p className="mt-2 max-w-2xl text-charcoal-500">
          BBFF is led by a Founder/CEO and a Board of Trustees responsible
          for oversight and accountability.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustees.map((person) => (
            <div key={person.name} className="text-center">
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-forest-50 shadow-card">
                {person.photo ? (
                  <Image src={person.photo} alt={person.name} fill className="object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center font-display text-xl text-forest-700">
                    {person.name
                      .split(" ")
                      .filter((w) => !w.endsWith("."))
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}
              </div>
              <p className="mt-3 font-semibold text-forest-700">{person.name}</p>
              <p className="text-sm text-charcoal-500">{person.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Strategic Plan */}
      <Section tone="sand">
        <h2>Strategic Plan</h2>
        <Card className="mt-6">
          <p className="text-charcoal-500">
            BBFF&apos;s strategic plan will be published here once finalized.
          </p>
        </Card>
      </Section>

      {/* Partners */}
      <Section tone="white">
        <h2>Partners &amp; Sponsors</h2>
        <Card className="mt-6">
          <p className="text-charcoal-500">
            BBFF is building partnerships with local and international
            organizations. Partner and sponsor logos will be listed here as
            those relationships are formalized.
          </p>
        </Card>
      </Section>

      {/* All documents */}
      <Section tone="sand">
        <h2>All Reports &amp; Documents</h2>
        <div className="mt-6 divide-y divide-sand-200 rounded-lg bg-sand-50 shadow-card">
          {reportDocuments.map((doc) => (
            <a
              key={doc.file}
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-forest-50"
            >
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-teal-500" />
                <span className="font-medium text-charcoal-700">{doc.name}</span>
              </div>
              <span className="text-sm text-charcoal-500">{doc.year}</span>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
