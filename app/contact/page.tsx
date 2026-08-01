import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/ui/ContactForm";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bash Bright Future Foundation (BBFF) — Head Office in Butebo District and Operational Office in Budaka District, Eastern Uganda.",
};

const offices = [
  {
    label: "Head Office",
    address: siteConfig.headOffice,
    mapQuery: "Kabwangasi, Butebo District, Uganda",
  },
  {
    label: "Operational Office",
    address: siteConfig.operationalOffice,
    mapQuery: "Mugiti, Budaka District, Uganda",
  },
];

export default function ContactPage() {
  return (
    <>
      <Section tone="white" className="pt-16 md:pt-24">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-500">
            Contact
          </p>
          <h1>Get in touch</h1>
          <p className="mt-6 text-lg text-charcoal-500">
            Questions about our programmes, partnership, or donations?
            We&apos;d love to hear from you.
          </p>
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Contact details + offices */}
          <div className="space-y-8">
            <Card>
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-charcoal-700 hover:text-forest-700"
                >
                  <Mail size={20} className="text-teal-500" />
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-charcoal-700 hover:text-forest-700"
                >
                  <Phone size={20} className="text-teal-500" />
                  {siteConfig.phone} (also WhatsApp)
                </a>
              </div>
            </Card>

            {offices.map((office) => (
              <Card key={office.label}>
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-teal-500" />
                  <div>
                    <h3 className="text-base">{office.label}</h3>
                    <p className="mt-1 text-sm text-charcoal-500">{office.address}</p>
                  </div>
                </div>
                <div className="mt-4 overflow-hidden rounded-md">
                  <iframe
                    title={`Map of ${office.label}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`}
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Contact form */}
          <Card>
            <h2 className="mb-6 text-2xl">Send us a message</h2>
            <ContactForm />
          </Card>
        </div>
      </Section>
    </>
  );
}
