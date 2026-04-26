"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { ComplianceBadges } from "@/components/trust/compliance-badges";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] pt-28 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-grain-soft opacity-40" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-end lg:gap-16 lg:px-8">
        <div className="flex-1 space-y-8 pb-8 lg:pb-16">
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-medium tracking-[0.28em] text-amber-highlight/90"
          >
            Приватна майстерня електроніки
          </motion.p>
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display max-w-xl text-4xl font-light leading-[1.08] tracking-tight text-lab-ink dark:text-titanium-bright md:text-5xl lg:text-6xl"
          >
            Досконалість у збірці
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md text-sm leading-relaxed text-lab-muted dark:text-titanium-dim md:text-base"
          >
            Преміальний сервіс ручного паяння та монтажу для проєктів, де важлива
            кожна доріжка. Дискретність, стабільні терміни та рівень виконання,
            який відчувається без пояснень.
          </motion.p>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <ComplianceBadges />
          </motion.div>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              href="/#services"
              className="rounded-full bg-zinc-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-zinc-800 dark:bg-titanium-bright dark:text-obsidian dark:hover:bg-titanium"
            >
              Ознайомитися з послугами
            </Link>
            <Link
              href="/#gallery"
              className="text-xs font-medium tracking-[0.2em] text-lab-muted underline-offset-4 transition hover:text-lab-ink hover:underline dark:text-titanium-dim dark:hover:text-titanium-bright"
            >
              Галерея робіт
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-1"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-zinc-200 bg-zinc-200 shadow-xl dark:border-titanium/10 dark:bg-obsidian-muted dark:shadow-[0_40px_120px_-40px_rgba(0,0,0,0.85)] lg:aspect-[3/4]">
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-90 dark:opacity-90"
              role="img"
              aria-label="Макрофото електронної плати — ілюстративне зображення преміум-якості"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lab-page via-transparent to-transparent dark:from-obsidian" />
            <div className="absolute bottom-6 left-6 right-6 border-l border-amber-highlight/50 pl-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-lab-muted dark:text-titanium-dim">
                Макрозйомка
              </p>
              <p className="mt-1 text-sm text-lab-ink dark:text-titanium-bright">
                Ювелірна акуратність монтажу
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <Link
          href="/#services"
          className="flex flex-col items-center gap-2 text-lab-muted transition hover:text-lab-ink dark:text-titanium-dim dark:hover:text-titanium"
          aria-label="Прокрутити до послуг"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Далі</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
