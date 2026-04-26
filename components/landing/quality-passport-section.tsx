"use client";

import { motion } from "framer-motion";
import { FileImage, Microscope } from "lucide-react";

export function QualityPassportSection() {
  return (
    <section className="border-t border-zinc-200 py-24 dark:border-titanium/10 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-highlight/90">
              Унікальна опція
            </p>
            <h2 className="font-display mt-4 text-3xl font-light tracking-tight text-lab-ink dark:text-titanium-bright md:text-4xl">
              Паспорт якості
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-lab-muted dark:text-titanium-dim md:text-base">
              До кожного проєкту додається пакет високороздільних знімків оптичного
              контролю ключових зон плати. Це фіксація факту виконання на рівні, який
              можна передати вашому клієнту або залишити у виробничому архіві.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-lab-muted dark:text-titanium-dim">
              <li className="flex gap-3">
                <Microscope className="mt-0.5 h-4 w-4 shrink-0 text-amber-highlight" />
                <span>Макрозйомка критичних падів та контрольних точок.</span>
              </li>
              <li className="flex gap-3">
                <FileImage className="mt-0.5 h-4 w-4 shrink-0 text-amber-highlight" />
                <span>Структурований звіт для передачі партнерам.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square max-h-[420px] overflow-hidden rounded-sm border border-zinc-200 bg-white dark:border-titanium/10 dark:bg-obsidian-soft"
          >
            <div className="absolute inset-8 rounded-sm border border-dashed border-zinc-300 dark:border-titanium/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
              <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-lab-muted dark:text-titanium-dim">
                Optical inspection
              </span>
              <p className="max-w-xs text-sm leading-relaxed text-lab-ink dark:text-titanium-bright">
                Формат паспорта якості: серія знімків з однаковим освітленням та
                масштабом для порівняння партій.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
