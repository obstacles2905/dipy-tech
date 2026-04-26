"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, PhoneForwarded, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { href: "/#services", label: "Послуги" },
  { href: "/#about", label: "Про нас" },
  { href: "/#gallery", label: "Галерея" },
  { href: "/#contact", label: "Контакти" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl dark:border-titanium/10 dark:bg-obsidian/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 shrink items-center gap-2 text-lab-ink transition-colors hover:text-zinc-600 dark:text-titanium-bright dark:hover:text-titanium"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-amber-highlight/90 shadow-[0_0_12px_rgba(201,162,39,0.45)]" />
          <span className="truncate text-xs font-medium tracking-[0.22em] uppercase sm:text-sm">
            ProfTechnology
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:gap-10 md:flex"
          aria-label="Основна навігація"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium tracking-[0.18em] text-lab-muted transition-colors hover:text-lab-ink dark:text-titanium-dim dark:hover:text-titanium-bright"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-3 py-2 text-[10px] font-medium tracking-wide text-lab-ink shadow-sm transition hover:border-zinc-300 dark:border-titanium/20 dark:bg-obsidian-soft/90 dark:text-titanium-bright dark:hover:border-amber-highlight/40 sm:px-4 sm:text-xs"
          >
            <PhoneForwarded className="h-3.5 w-3.5 text-amber-highlight" aria-hidden />
            <span className="hidden sm:inline">Пряма лінія до адміністратора</span>
            <span className="sm:hidden">Адміністратор</span>
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-lab-ink transition hover:border-zinc-300 dark:border-titanium/15 dark:text-titanium-bright dark:hover:border-titanium/30 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-zinc-200 bg-white/95 dark:border-titanium/10 dark:bg-obsidian/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 text-sm font-medium tracking-[0.12em] text-lab-muted transition hover:bg-zinc-100 hover:text-lab-ink dark:text-titanium-dim dark:hover:bg-obsidian-muted dark:hover:text-titanium-bright"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
