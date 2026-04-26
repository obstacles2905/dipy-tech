"use client";

import { motion } from "framer-motion";

const placeholders = [
  { label: "Паяне з'єднання", tilt: "-rotate-1" },
  { label: "Поверхня після флюсу", tilt: "rotate-1" },
  { label: "QFN / дрібний крок", tilt: "rotate-0" },
  { label: "Механіка роз'єму", tilt: "-rotate-1" },
  { label: "Шаруватість пасти", tilt: "rotate-1" },
  { label: "Фінальний вигляд вузла", tilt: "rotate-0" },
] as const;

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 border-t border-zinc-200 py-24 dark:border-titanium/10 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-highlight/90">
            Галерея
          </p>
          <h2 className="font-display mt-4 text-3xl font-light tracking-tight text-lab-ink dark:text-titanium-bright md:text-4xl">
            Макрозйомка як стандарт презентації
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-lab-muted dark:text-titanium-dim md:text-base">
            Плейсхолдери під високороздільну зйомку: ювелірна акуратність паяння та
            дисципліна монтажу.
          </p>
        </div>

        <motion.div
          initial={false}
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5"
        >
          {placeholders.map((item) => (
            <motion.figure
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className={`group relative aspect-[4/3] overflow-hidden rounded-sm border border-zinc-200 bg-zinc-100 dark:border-titanium/10 dark:bg-obsidian-muted ${item.tilt}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/80 via-transparent to-amber-highlight/5 opacity-80 transition group-hover:opacity-100 dark:from-titanium/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="rounded-full border border-zinc-300 bg-white/80 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-lab-muted dark:border-titanium/20 dark:bg-obsidian-soft/80 dark:text-titanium-dim">
                  High-res macro
                </span>
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/85 to-transparent p-4 dark:from-obsidian dark:via-obsidian/80">
                <p className="text-xs text-lab-ink dark:text-titanium-bright">{item.label}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
