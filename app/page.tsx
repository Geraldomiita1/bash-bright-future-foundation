import Image from "next/image";
import { HandHeart, Users, Handshake, GraduationCap } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { donationDetails, siteConfig } from "@/lib/constants";

const ways = [
  { icon: HandHeart, title: "Give", text: "Donate funds or materials." },
  { icon: GraduationCap, title: "Sponsor a child", text: "Support a child's education." },
  { icon: Users, title: "Volunteer", text: "Bring your time and skills." },
  { icon: Handshake, title: "Partner with us", text: "Work with us on shared goals." },
];

export default function HomePage() {
  return (
    <>
      {/* Mission */}
      <Section tone="white" className="pt-12 md:pt-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal-500">
              Our mission
            </p>
            <h1>Building brighter futures for vulnerable communities in Uganda.</h1>
            <p className="mt-6 max-w-xl text-base text-charcoal-500">
              We improve lives through quality education, accessible
              healthcare, clean water and sustainable agriculture — working alongside the communities we serve.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/get-involved#donate">Donate</Button>
              <Button href="/programmes" variant="secondary">See our work</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-44 w-44 overflow-hidden rounded-full shadow-raised md:h-56 md:w-56">
              <Image src="/logo.jpg" alt="Bash Bright Future Foundation logo" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </Section>

      {/* Story */}
      <Section tone="sand">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <h2>Our story</h2>
          </div>
          <div className="space-y-4 text-charcoal-500 lg:col-span-2">
            <p>
              Bash Bright Future Foundation began in 2020 as grassroots work
              with vulnerable children and families in Kabwangasi
              Sub-county, Butebo District. As the work grew, it became a
              registered Ugandan charity in May 2024.
            </p>
            <p>
              Today most of our programmes run in Mugiti Sub-county, Budaka
              District — a school, a poultry project, health
              education and clean water for the community.
            </p>
            <Button href="/about" variant="ghost" className="mt-2">
              Read more about us
            </Button>
          </div>
        </div>
      </Section>

      {/* How to support */}
      <Section tone="forest" id="support">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-sand-100">How to support</h2>
            <p className="mt-4 max-w-md text-sand-100/80">
              Every gift goes toward children&apos;s education, health, clean
              water and farming in Eastern Uganda.
            </p>
            <Button href="/get-involved#donate" className="mt-6">Donate</Button>
          </div>
          <div className="rounded-lg bg-forest-900/40 p-6 text-sm text-sand-100/90">
            <p className="font-semibold text-sand-100">Quick ways to give</p>
            <dl className="mt-4 space-y-2">
              <div>
                <dt className="text-sand-100/60">Mobile Money</dt>
                <dd>{donationDetails.mobileMoney.number}</dd>
              </div>
              <div>
                <dt className="text-sand-100/60">Bank transfer</dt>
                <dd>
                  {donationDetails.bank.accountName}, {donationDetails.bank.bankName}
                  {" "}({donationDetails.bank.branch}), Acc. {donationDetails.bank.accountNumber}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      {/* Engagement */}
      <Section tone="white">
        <div className="text-center">
          <h2>Get involved</h2>
          <p className="mx-auto mt-2 max-w-xl text-charcoal-500">
            Giving is not the only way to help. Tell us how you would like to
            take part.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="text-center">
              <Icon size={28} className="mx-auto text-teal-500" />
              <h3 className="mt-3 text-base">{title}</h3>
              <p className="mt-1 text-sm text-charcoal-500">{text}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/get-involved">Get involved</Button>
          <Button href="/get-involved#contact" variant="ghost">
            Contact {siteConfig.shortName}
          </Button>
        </div>
      </Section>
    </>
  );
}
