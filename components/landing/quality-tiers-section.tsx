"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Standard",
    featured: false,
    items: [
      "Монтаж SMD/THT",
      "Базовий контроль",
      "Відмивання плат",
    ] as const,
  },
  {
    name: "Pro",
    featured: true,
    items: [
      "Монтаж",
      "Контроль під збільшенням",
      "Макро-фото",
      "Контроль за IPC",
    ] as const,
  },
  {
    name: "Premium",
    featured: false,
    items: [
      "Повний контроль якості",
      "Паспорт якості",
      "Макро-фото та відео",
      "Пріоритет",
    ] as const,
  },
] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function QualityTiersSection() {
  return (
    <section
      id="quality"
      className="scroll-mt-24 border-t border-zinc-200 py-24 dark:border-titanium/10 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-highlight/90">
            Рівні якості
          </p>
          <h2 className="font-display mt-4 text-3xl font-light tracking-tight text-lab-ink dark:text-titanium-bright md:text-4xl">
            Стандарт, Pro чи Premium
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-lab-muted dark:text-titanium-dim md:text-base">
            Оберіть глибину контролю та супроводу під конкретний реліз — від базової збірки до
            пакета з пріоритетом і повним пакетом зафіксованої якості.
          </p>
        </div>

        <motion.ul
          variants={container}
          initial={false}
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-stretch"
        >
          {tiers.map((tier) => {
            const isPro = tier.featured;
            return (
              <motion.li
                key={tier.name}
                variants={item}
                className={`relative flex h-full flex-col overflow-hidden rounded-sm p-6 shadow-sm ${
                  isPro
                    ? "z-10 border-2 border-amber-highlight/55 bg-gradient-to-b from-amber-highlight/[0.12] to-white/80 ring-1 ring-amber-highlight/20 dark:from-amber-highlight/10 dark:to-obsidian-soft/80 dark:ring-amber-highlight/30 lg:shadow-lg"
                    : "border border-zinc-200 bg-white/80 dark:border-titanium/10 dark:bg-obsidian-soft/60"
                }`}
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-highlight/90">
                  {tier.name}
                </p>
                {isPro ? (
                  <div className="mb-1 mt-2 flex flex-col gap-1.5">
                    <p className="inline-flex w-fit items-center rounded-full border border-amber-highlight/50 bg-amber-highlight/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-900 dark:border-amber-highlight/50 dark:bg-amber-highlight/15 dark:text-amber-200">
                      Популярний вибір
                    </p>
                    <p className="text-xs text-lab-muted dark:text-titanium-dim">
                      Оптимальний баланс вартості, контролю та швидкості у більшості сценаріїв.
                    </p>
                  </div>
                ) : null}
                <ul className="mt-4 flex flex-1 flex-col gap-3 text-sm text-lab-ink dark:text-titanium-bright">
                  {tier.items.map((line) => (
                    <li key={line} className="flex gap-2.5">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-amber-highlight/90"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      <span className="leading-relaxed text-lab-muted dark:text-titanium-dim">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
