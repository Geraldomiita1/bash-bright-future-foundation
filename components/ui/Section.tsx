import { cn } from "@/lib/utils";
import Container from "./Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "sand" | "forest" | "white";
  id?: string;
};

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  sand: "bg-sand-100",
  forest: "bg-forest-700 text-sand-100",
  white: "bg-sand-50",
};

export default function Section({
  children,
  className,
  tone = "sand",
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", toneClasses[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}
