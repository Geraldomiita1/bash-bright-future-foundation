import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg bg-sand-50 p-6 shadow-card border border-sand-200",
        className
      )}
    >
      {children}
    </div>
  );
}
