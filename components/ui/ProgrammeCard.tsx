import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Card from "./Card";
import { ProgrammeSummary } from "@/lib/constants";

export default function ProgrammeCard({ programme }: { programme: ProgrammeSummary }) {
  return (
    <Card className="flex h-full flex-col">
      <h3>{programme.title}</h3>
      <p className="mt-2 flex-1 text-sm text-charcoal-500">{programme.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {programme.highlights.slice(0, 3).map((h) => (
          <li
            key={h}
            className="rounded-full bg-forest-50 px-3 py-1 text-xs font-medium text-forest-700"
          >
            {h}
          </li>
        ))}
      </ul>
      <Link
        href={`/programmes/${programme.slug}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal-500 hover:text-teal-700"
      >
        Learn more <ArrowRight size={14} />
      </Link>
    </Card>
  );
}
