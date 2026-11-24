import type { Metadata } from "next";
import { HandHeart, Package, Users, Handshake, GraduationCap, Landmark, Smartphone, Mail, Phone, MapPin } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CopyField from "@/components/ui/CopyField";
import ContactForm from "@/components/ui/ContactForm";
import { donationDetails, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get Involved, Donate & Contact",
  description:
    "Get involved with Bash Bright Future Foundation (BBFF): donate by bank transfer or mobile money, volunteer, partner with us, or get in touch.",
};

const ways = [
  { icon: HandHeart, title: "Donate funds", description: "Give by bank transfer or mobile money.", cta: "Donate", href: "#donate" },
  { icon: Package, title: "Donate materials", description: "Scholastic materials, clothing, blankets and household items.", cta: "Contact us", href: "#contact" },
  { icon: GraduationCap, title: "Sponsor a child", description: "Support a vulnerable child's education over time.", cta: "Ask us", href: "#contact" },
  { icon: Users, title: "Volunteer", description: "Bring your time and skills to our programmes.", cta: "Get in touch", href: "#contact" },
  { icon: Handshake, title: "Partner with us", description: "Organisations: let's work on shared goals.", cta: "Start a conversation", href: "#contact" },
];

const offices = [
  { label: "Head Office", address: siteConfig.headOffice },
  { label: "Operational Office", address: siteConfig.operationalOffice },
];

export default function GetInvolvedPage() {
  return (
    <>
      <Section tone="white" className="pt-12 md:pt-16">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-500">
            Get Involved
          </p>
          <h1>There&apos;s a place for you here.</h1>
          <p className="mt-5 text-base text-charcoal-500">
            Whether you give, volunteer or partner with us, every
            contribution helps more young people in Eastern Uganda.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ways.map(({ icon: Icon, title, description, cta, href }) => (
            <Card key={title} className="flex h-full flex-col">
              <Icon size={26} className="text-teal-500" />
              <h3 className="mt-3 text-base">{title}</h3>
              <p className="mt-1 flex-1 text-sm text-charcoal-500">{description}</p>
              <Button href={href} variant="ghost" className="mt-4 self-start">
                {cta}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Donate */}
      <Section tone="sand" id="donate" className="scroll-mt-20">
        <h2>Donate</h2>
        <p className="mt-2 max-w-2xl text-charcoal-500">
          Every contribution, large or small, supports our work in clean
          water, agriculture, education and health.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card>
            <div className="flex items-center gap-3">
              <Landmark size={22} className="text-teal-500" />
              <h3>Bank donation</h3>
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
              <h3>Mobile Money</h3>
            </div>
            <div className="mt-4">
              <CopyField label="Mobile Money Number" value={donationDetails.mobileMoney.number} />
            </div>
            <p className="mt-6 text-sm text-charcoal-500">
              International donors: bank transfer is generally more reliable
              than mobile money for cross-border gifts.
            </p>
          </Card>
        </div>
        <p className="mt-6 max-w-3xl text-sm text-charcoal-500">
          After sending your gift, please share your payment confirmation
          (bank slip or mobile money message) with us by email, WhatsApp or
          phone so we can acknowledge your donation and issue a receipt. If
          you would like your gift directed to a specific programme, tell us
          when you confirm.
        </p>
      </Section>

      {/* Contact */}
      <Section tone="white" id="contact" className="scroll-mt-20">
        <h2>Contact us</h2>
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <div className="space-y-4">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-charcoal-700 hover:text-forest-700">
                  <Mail size={20} className="text-teal-500" />
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-charcoal-700 hover:text-forest-700">
                  <Phone size={20} className="text-teal-500" />
                  {siteConfig.phone} (also WhatsApp)
                </a>
              </div>
              <p className="mt-4 text-sm text-charcoal-500">
                Contact person: {donationDetails.contactPerson.name},{" "}
                {donationDetails.contactPerson.role}
              </p>
            </Card>
            {offices.map((office) => (
              <Card key={office.label} className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 shrink-0 text-teal-500" />
                <div>
                  <h3 className="text-base">{office.label}</h3>
                  <p className="mt-1 text-sm text-charcoal-500">{office.address}</p>
                </div>
              </Card>
            ))}
          </div>
          <Card>
            <h3 className="mb-6 text-xl">Send us a message</h3>
            <ContactForm />
          </Card>
        </div>
      </Section>
    </>
  );
}
