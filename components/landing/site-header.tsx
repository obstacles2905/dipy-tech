"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { id: "services" as const, label: "Послуги" },
  { id: "quality" as const, label: "Рівні" },
  { id: "extra" as const, label: "Додатково" },
  { id: "gallery" as const, label: "Галерея" },
  { id: "contact" as const, label: "Контакти" },
] as const;

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (window.location.hash !== `#${sectionId}`) {
    window.history.replaceState(null, "", `/#${sectionId}`);
  }
}

function scrollToPageTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (window.location.pathname !== "/" || window.location.hash) {
    window.history.replaceState(null, "", "/");
  }
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const onHashLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      if (!isHome) return;
      e.preventDefault();
      scrollToSection(sectionId);
    },
    [isHome],
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl dark:border-titanium/10 dark:bg-obsidian/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          scroll={false}
          onClick={(e) => {
            if (!isHome) return;
            e.preventDefault();
            scrollToPageTop();
          }}
          className="group flex min-w-0 shrink items-center gap-2 text-lab-ink transition-colors hover:text-zinc-600 dark:text-titanium-bright dark:hover:text-titanium"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-amber-highlight/90 shadow-[0_0_12px_rgba(201,162,39,0.45)]" />
          <span className="truncate text-xs font-medium tracking-[0.22em] uppercase sm:text-sm">
            DipyTech
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:gap-10 md:flex"
          aria-label="Основна навігація"
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              scroll={false}
              onClick={(e) => onHashLinkClick(e, item.id)}
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
            scroll={false}
            onClick={(e) => onHashLinkClick(e, "contact")}
            aria-label="Перейти до контактів і форми: зворотний зв'язок DipyTech"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-3 py-2 text-[10px] font-medium tracking-wide text-lab-ink shadow-sm transition hover:border-zinc-300 dark:border-titanium/20 dark:bg-obsidian-soft/90 dark:text-titanium-bright dark:hover:border-amber-highlight/40 sm:px-4 sm:text-xs"
          >
            <MessageCircle className="h-3.5 w-3.5 text-amber-highlight" aria-hidden />
            <span className="hidden sm:inline">Зворотний зв&rsquo;язок</span>
            <span className="sm:hidden">Зв&rsquo;язок</span>
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
                  key={item.id}
                  href={`/#${item.id}`}
                  scroll={false}
                  className="rounded-md px-3 py-3 text-sm font-medium tracking-[0.12em] text-lab-muted transition hover:bg-zinc-100 hover:text-lab-ink dark:text-titanium-dim dark:hover:bg-obsidian-muted dark:hover:text-titanium-bright"
                  onClick={(e) => {
                    onHashLinkClick(e, item.id);
                    setMenuOpen(false);
                  }}
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
