"use client";

import { motion } from "framer-motion";
import {
  CircuitBoard,
  Layers,
  Combine,
  Droplets,
  Shield,
  Box,
  Cable,
} from "lucide-react";
import { ComplianceBadges } from "@/components/trust/compliance-badges";

const services = [
  { title: "SMD монтаж друкованих плат", icon: CircuitBoard },
  { title: "Двосторонній монтаж плат", icon: Layers },
  { title: "Комбінований монтаж SMD + THT", icon: Combine },
  { title: "Відмивання друкованих плат", icon: Droplets },
  { title: "Захисне покриття електроніки", icon: Shield },
  { title: "Монтаж плат у корпус", icon: Box },
  { title: "Кабельно-джгутова продукція", icon: Cable },
] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-zinc-200 py-24 dark:border-titanium/10 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-highlight/90">
            Послуги
          </p>
          <h2 className="font-display mt-4 text-3xl font-light tracking-tight text-lab-ink dark:text-titanium-bright md:text-4xl">
            SMD/THT монтаж друкованих плат
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-lab-muted dark:text-titanium-dim md:text-base">
            Збірка електроніки, захисне покриття, кабельна продукція та корпус —
            деталізацію погоджуйте з адміністратором під конкретне ТЗ.
          </p>
        </div>

        <motion.ul
          variants={container}
          initial={false}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.li
              key={service.title}
              variants={item}
              className="group flex min-h-[88px] flex-col justify-center rounded-sm border border-zinc-200 bg-white/80 p-5 shadow-sm transition hover:border-zinc-300 dark:border-titanium/10 dark:bg-obsidian-soft/60 dark:shadow-[inset_0_1px_0_rgba(232,234,239,0.04)] dark:hover:border-titanium/20"
            >
              <div className="flex items-start gap-3">
                <service.icon
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-highlight/85 transition group-hover:text-amber-glow"
                  strokeWidth={1.25}
                  aria-hidden
                />
                <h3 className="text-sm font-medium leading-snug text-lab-ink dark:text-titanium-bright">
                  {service.title}
                </h3>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-12 rounded-xl border border-zinc-200 bg-white/70 p-6 dark:border-titanium/10 dark:bg-obsidian-soft/50">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-lab-muted dark:text-titanium-dim/80">
            Відповідність і стандарти
          </p>
          <div className="mt-4">
            <ComplianceBadges />
          </div>
          <p className="mt-4 text-xs leading-relaxed text-lab-muted dark:text-titanium-dim">
            Підхід і обладнання погоджуються з вимогами IPC. Деталі — на етапі NDA та технічного
            аудиту.
          </p>
        </div>
      </div>
    </section>
  );
}
