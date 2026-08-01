"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200 bg-sand-50/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image src="/logo.jpg" alt="BBFF logo" fill className="object-cover" />
          </span>
          <span className="font-display text-xl font-semibold text-forest-700">
            {siteConfig.shortName}
          </span>
          <span className="hidden text-xs text-charcoal-500 sm:block">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium text-charcoal-700 hover:text-forest-700",
                  active && "text-forest-700 font-semibold"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/donate">Donate</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {/* Mobile nav panel */}
      {open && (
        <nav
          className="border-t border-sand-200 bg-sand-50 lg:hidden"
          aria-label="Mobile"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-charcoal-700 hover:bg-forest-50 hover:text-forest-700"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 px-3">
              <Button href="/donate" className="w-full" onClick={() => setOpen(false)}>
                Donate
              </Button>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
