"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, BoxSelect, KeyRound } from "lucide-react";

const extras = [
  { label: "Термінові замовлення (24–48 год)", icon: Zap },
  { label: "Прототипи від 1 плати", icon: Cpu },
  { label: "Малі партії", icon: BoxSelect },
  { label: "Під ключ", icon: KeyRound },
] as const;

export function ExtraServicesSection() {
  return (
    <section
      id="extra"
      className="scroll-mt-24 border-t border-zinc-200 py-24 dark:border-titanium/10 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-highlight/90">
            Додаткові послуги
          </p>
          <h2 className="font-display mt-4 text-3xl font-light tracking-tight text-lab-ink dark:text-titanium-bright md:text-4xl">
            Прототипи, малі партії та виробництво під ключ
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-lab-muted dark:text-titanium-dim md:text-base">
            Окрім стандартного потоку — опції для прототипів електроніки, малих серій
            і термінових поставок.
          </p>
        </div>

        <motion.ul
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid gap-3 sm:grid-cols-2"
        >
          {extras.map((row, i) => (
            <li
              key={row.label}
              className="flex items-center gap-4 rounded-sm border border-zinc-200 bg-white/70 px-4 py-4 dark:border-titanium/10 dark:bg-obsidian-soft/50"
            >
              <span className="font-mono text-[10px] text-zinc-400 dark:text-titanium-dim/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <row.icon
                className="h-5 w-5 shrink-0 text-amber-highlight/85"
                strokeWidth={1.25}
                aria-hidden
              />
              <span className="text-sm text-lab-ink dark:text-titanium-bright">{row.label}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
