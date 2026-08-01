/**
 * GrowthRings — BBFF's signature visual motif.
 *
 * Concentric rings, like tree growth rings, represent impact that
 * compounds year over year. Used to present a single stat (e.g. years
 * active, number of communities reached) instead of a generic icon+number
 * card. Each ring can be given a fixed stroke or a "progress" fraction
 * (0–1) to visually encode a proportion (e.g. funds allocated to programmes).
 */

type Ring = {
  progress: number; // 0 to 1
  color: string; // tailwind-resolved hex or currentColor
};

type GrowthRingsProps = {
  value: string; // the big number/label shown in the center, e.g. "12,400"
  label: string; // caption below the value, e.g. "children supported"
  rings?: Ring[];
  size?: number;
};

const defaultRings: Ring[] = [
  { progress: 1, color: "#EFE8D8" }, // track
  { progress: 0.78, color: "#D9A441" }, // gold - primary emphasis
  { progress: 0.55, color: "#2A6F77" }, // teal
  { progress: 0.32, color: "#1B4332" }, // forest
];

export default function GrowthRings({
  value,
  label,
  rings = defaultRings,
  size = 180,
}: GrowthRingsProps) {
  const center = size / 2;
  const baseStroke = 6;
  const gap = 10;

  return (
    <div
      className="relative flex flex-col items-center justify-center text-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0">
        {rings.map((ring, i) => {
          const radius = center - baseStroke / 2 - i * gap;
          const circumference = 2 * Math.PI * radius;
          const isTrack = i === 0;
          return (
            <circle
              key={i}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={ring.color}
              strokeWidth={baseStroke}
              strokeLinecap="round"
              strokeDasharray={isTrack ? undefined : circumference}
              strokeDashoffset={
                isTrack ? undefined : circumference * (1 - ring.progress)
              }
              transform={`rotate(-90 ${center} ${center})`}
              opacity={isTrack ? 0.5 : 1}
            />
          );
        })}
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        <span className="font-display text-3xl text-forest-700">{value}</span>
        <span className="mt-1 text-xs font-body text-charcoal-500">
          {label}
        </span>
      </div>
    </div>
  );
}
