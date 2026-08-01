import type { Metadata } from "next";
import { Landmark, Smartphone } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import CopyField from "@/components/ui/CopyField";
import { donationDetails, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Bash Bright Future Foundation (BBFF) via bank transfer or mobile money — every contribution supports education, health, agriculture, skills development, and humanitarian work in Eastern Uganda.",
};

export default function DonatePage() {
  return (
    <>
      <Section tone="white" className="pt-16 md:pt-24">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-500">
            Donate
          </p>
          <h1>Your gift changes lives.</h1>
          <p className="mt-6 text-lg text-charcoal-500">
            Every contribution — large or small — supports education,
            health, agriculture, skills development, and humanitarian work
            across Eastern Uganda.
          </p>
        </div>
      </Section>

      {/* Donation methods */}
      <Section tone="sand">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card>
            <div className="flex items-center gap-3">
              <Landmark size={22} className="text-teal-500" />
              <h2 className="text-xl">Bank Donation</h2>
            </div>
            <div className="mt-4">
              <CopyField label="Account Name" value={donationDetails.bank.accountName} />
              <CopyField label="Account Number" value={donationDetails.bank.accountNumber} />
              <CopyField label="Bank" value={donationDetails.bank.bankName} />
              <CopyField label="Branch" value={donationDetails.bank.branch} />
              <CopyField label="SWIFT Code" value={donationDetails.bank.swift} />
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3">
              <Smartphone size={22} className="text-teal-500" />
              <h2 className="text-xl">Mobile Money</h2>
            </div>
            <div className="mt-4">
              <CopyField label="Mobile Money Number" value={donationDetails.mobileMoney.number} />
            </div>
            <p className="mt-6 text-sm text-charcoal-500">
              International donors: bank transfer (above) is generally more
              reliable than mobile money for cross-border gifts.
            </p>
          </Card>
        </div>
      </Section>

      {/* Purpose, contact, confirmation */}
      <Section tone="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <h3>Donation Purpose</h3>
            <p className="mt-3 text-sm text-charcoal-500">
              Gifts support BBFF&apos;s programmes in Education, Health,
              Agriculture, Skills Development, and Humanitarian Support. If
              you&apos;d like your gift directed to a specific programme or
              project, mention it when you confirm your donation (see
              below).
            </p>
          </div>
          <div>
            <h3>Contact Person</h3>
            <p className="mt-3 text-sm text-charcoal-500">
              {donationDetails.contactPerson.name}
              <br />
              {donationDetails.contactPerson.role}
              <br />
              <a href={`mailto:${siteConfig.email}`} className="text-teal-500 hover:text-teal-700">
                {siteConfig.email}
              </a>
              <br />
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-teal-500 hover:text-teal-700">
                {siteConfig.phone}
              </a>
            </p>
          </div>
          <div>
            <h3>Confirming Your Donation</h3>
            <p className="mt-3 text-sm text-charcoal-500">
              After sending your gift, please share your payment
              confirmation (bank slip or mobile money message) with us by
              email, WhatsApp, or phone so we can acknowledge your donation
              and issue a receipt.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
