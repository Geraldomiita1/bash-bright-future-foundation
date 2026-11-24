import type { Metadata } from "next";
import { MapPin, FileText, Download, ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import GrowthRings from "@/components/ui/GrowthRings";
import GalleryGrid from "@/components/ui/GalleryGrid";
import { impactStats, communitiesServed } from "@/lib/constants";
import { reportDocuments, programExpenditure2025 } from "@/lib/reports";

export const metadata: Metadata = {
  title: "Impact & Reports",
  description:
    "Impact figures, registration, financial summary and reports of Bash Bright Future Foundation (BBFF).",
};

export default function ImpactPage() {
  const totalProgramExpenditure = programExpenditure2025.reduce((sum, r) => sum + r.ugx, 0);

  return (
    <>
      <Section tone="white" className="pt-12 md:pt-16">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-500">
            Impact &amp; Reports
          </p>
          <h1>Our impact, openly shared.</h1>
          <p className="mt-5 text-base text-charcoal-500">
            What we have achieved so far, and the documents that show how we
            are registered and how we spend.
          </p>
        </div>
      </Section>

      {/* Impact */}
      <Section tone="sand">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {impactStats.map((stat) => (
            <GrowthRings key={stat.label} value={stat.value} label={stat.label} size={150} />
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {communitiesServed.map((c) => (
            <Card key={c.name} className="flex items-start gap-3">
              <MapPin size={20} className="mt-1 shrink-0 text-teal-500" />
              <div>
                <h3 className="text-base">{c.name}</h3>
                <p className="mt-1 text-sm text-charcoal-500">{c.district}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Reports */}
      <Section tone="white" id="reports" className="scroll-mt-20">
        <h2>Reports &amp; transparency</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card>
            <div className="flex items-center gap-3">
              <ShieldCheck size={22} className="text-teal-500" />
              <h3>Legal registration</h3>
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
            <Button href="/documents/registration-certificate.pdf" variant="ghost" className="mt-5">
              <Download size={16} className="mr-2" /> View Certificate
            </Button>
          </Card>

          <Card>
            <div className="flex items-center gap-3">
              <FileText size={22} className="text-teal-500" />
              <h3>Financial summary (2025)</h3>
            </div>
            <p className="mt-2 text-sm text-charcoal-500">
              Programme expenditure for the year ended 31 December 2025:
            </p>
            <dl className="mt-4 space-y-2 text-sm">
              {programExpenditure2025.map((row) => (
                <div key={row.label} className="flex justify-between border-b border-sand-200 py-2">
                  <dt className="text-charcoal-500">{row.label}</dt>
                  <dd className="font-medium text-charcoal-700">UGX {row.ugx.toLocaleString()}</dd>
                </div>
              ))}
              <div className="flex justify-between py-2">
                <dt className="font-semibold text-charcoal-700">Total programme expenditure</dt>
                <dd className="font-semibold text-forest-700">
                  UGX {totalProgramExpenditure.toLocaleString()}
                </dd>
              </div>
            </dl>
            <Button href="/documents/financial-statement-2025.pdf" variant="ghost" className="mt-5">
              <Download size={16} className="mr-2" /> View Full Statement
            </Button>
          </Card>
        </div>

        <div className="mt-8 divide-y divide-sand-200 rounded-lg bg-sand-50 shadow-card">
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

      {/* Gallery */}
      <Section tone="sand" id="gallery" className="scroll-mt-20">
        <h2>Gallery</h2>
        <div className="mt-8">
          <GalleryGrid />
        </div>
      </Section>

      <Section tone="forest">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-sand-100">Help us do more</h2>
          <p className="max-w-xl text-sand-100/80">
            And if you would like to get involved and support…
          </p>
          <Button href="/get-involved#donate">Donate</Button>
        </div>
      </Section>
    </>
  );
}
