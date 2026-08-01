"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — silently ignore, value is still visible/selectable.
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 border-b border-sand-200 py-3 last:border-0">
      <div>
        <p className="text-xs uppercase tracking-wide text-charcoal-500">{label}</p>
        <p className="font-medium text-charcoal-700">{value}</p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${label}`}
        className="flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-teal-500 hover:bg-teal-50"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
