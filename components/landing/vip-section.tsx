"use client";

import { motion } from "framer-motion";
import { Award, UserRound, Clock, ScanEye } from "lucide-react";

const highlights = [
  {
    title: "Три роки експертизи",
    body: "Накопичений досвід у складних платах та малосерійному виробництві без втрати якості.",
    icon: Award,
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    title: "Персональний адміністратор",
    body: "Один відповідальний контакт на весь життєвий цикл замовлення — без зайвих ланок.",
    icon: UserRound,
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    title: "Пунктуальність",
    body: "Погоджені терміни фіксуються та дотримуються; зміни — лише за прозорим погодженням.",
    icon: Clock,
    className: "lg:col-span-1",
  },
  {
    title: "Прискіпливість до деталей",
    body: "Візуальний та процесуальний контроль на рівні майстерні, а не конвеєра.",
    icon: ScanEye,
    className: "lg:col-span-1",
  },
] as const;

export function VipSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-zinc-200 py-24 dark:border-titanium/10 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-highlight/90">
              Статус партнера
            </p>
            <h2 className="font-display mt-4 max-w-lg text-3xl font-light tracking-tight text-lab-ink dark:text-titanium-bright md:text-4xl">
              Стандарти, які не оголошуються голосно
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-lab-muted lg:text-right dark:text-titanium-dim">
            Ми працюємо як приватна ательє: обмежена кількість паралельних проєктів,
            повага до вашого часу та інтелектуальної власності.
          </p>
        </div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-5"
        >
          {highlights.map((block, index) => (
            <article
              key={block.title}
              className={`relative overflow-hidden rounded-sm border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 lg:p-8 dark:border-titanium/10 dark:from-obsidian-soft dark:to-obsidian-muted/80 ${block.className}`}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-highlight/5 blur-2xl" />
              <block.icon
                className="relative h-5 w-5 text-amber-highlight/90"
                strokeWidth={1.25}
                aria-hidden
              />
              <h3 className="relative mt-6 text-sm font-medium text-lab-ink dark:text-titanium-bright md:text-base">
                {block.title}
              </h3>
              <p className="relative mt-3 text-xs leading-relaxed text-lab-muted dark:text-titanium-dim md:text-sm">
                {block.body}
              </p>
              <span className="absolute bottom-4 right-4 font-mono text-[10px] text-zinc-400 dark:text-titanium-dim/40">
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
