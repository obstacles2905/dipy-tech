"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "#services", label: "Послуги" },
  { href: "#quality", label: "Якість" },
  { href: "#extras", label: "Додатково" },
  { href: "#gallery", label: "Галерея" },
  { href: "#contact", label: "Контакти" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl backdrop-saturate-150 border-b border-border/40">
      <div className="mx-auto flex h-12 max-w-[980px] items-center justify-between px-4 lg:px-0">
        <Link
          href="#hero"
          className="text-sm font-semibold text-foreground transition-opacity hover:opacity-70"
        >
          PCB Assembly
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Головна навігація">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs text-foreground/90 transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden md:inline-flex text-xs font-medium text-accent transition-opacity hover:opacity-70"
        >
          Заявка
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-2 text-foreground"
          aria-label="Меню"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
            {mobileMenuOpen ? (
              <path d="M4.5 4.5l9 9m0-9l-9 9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            ) : (
              <>
                <rect y="3" width="18" height="1.5" rx="0.75" />
                <rect y="8.25" width="18" height="1.5" rx="0.75" />
                <rect y="13.5" width="18" height="1.5" rx="0.75" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm text-foreground/90 transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-accent"
            >
              Заявка
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
