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
  {
    title: "SMD-монтаж (автоматизований та ручний)",
    description:
      "Мінімалістична презентація процесу: точне розміщення за технологічними картами та ручне доопрацювання критичних вузлів.",
    icon: CircuitBoard,
  },
  {
    title: "Двосторонній SMD-монтаж",
    description:
      "Повний цикл з контролем планарності та послідовності операцій без зайвого навантаження на ланцюг постачання.",
    icon: Layers,
  },
  {
    title: "Змішаний монтаж (SMD + THT)",
    description:
      "Гібридні плати з поверхневими та навісними компонентами з акцентом на механічну надійність з'єднань.",
    icon: Combine,
  },
  {
    title: "Професійне миття плат",
    description:
      "Видалення флюсу та залишків відповідно до вимог наступних етапів — у т.ч. перед лакуванням.",
    icon: Droplets,
  },
  {
    title: "Conformal coating",
    description:
      "Захист від вологи та агресивних середовищ з дотриманням зон конекторів і критичних контактних майданчиків.",
    icon: Shield,
  },
  {
    title: "Box build",
    description:
      "Фінальна збірка в корпусі: кріплення, електромеханіка, перевірка готовності до відвантаження.",
    icon: Box,
  },
  {
    title: "Кабелі та жгути",
    description:
      "Силові та сигнальні комплекти з каліброваними довжинами та промисловим обжимом.",
    icon: Cable,
  },
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
            Технологічний спектр
          </p>
          <h2 className="font-display mt-4 text-3xl font-light tracking-tight text-lab-ink dark:text-titanium-bright md:text-4xl">
            Послуги монтажу та збірки
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-lab-muted dark:text-titanium-dim md:text-base">
            Лаконічний огляд можливостей: від SMD/THT до захисних покриттів. Процеси
            узгоджуються з адміністратором проєкту та вашими внутрішніми стандартами.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-zinc-200 bg-white/70 p-6 dark:border-titanium/10 dark:bg-obsidian-soft/50">
          <ComplianceBadges />
          <p className="mt-4 text-xs leading-relaxed text-lab-muted dark:text-titanium-dim">
            Сертифікація персоналу та обладнання ведеться згідно з вимогами IPC. Деталі
            надаються на етапі NDA та технічного аудиту.
          </p>
        </div>

        <motion.ul
          variants={container}
          initial={false}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.li
              key={service.title}
              variants={item}
              className="group flex flex-col rounded-sm border border-zinc-200 bg-white/80 p-6 shadow-sm transition hover:border-zinc-300 dark:border-titanium/10 dark:bg-obsidian-soft/60 dark:shadow-[inset_0_1px_0_rgba(232,234,239,0.04)] dark:hover:border-titanium/20"
            >
              <service.icon
                className="h-5 w-5 text-amber-highlight/85 transition group-hover:text-amber-glow"
                strokeWidth={1.25}
                aria-hidden
              />
              <h3 className="mt-5 text-sm font-medium leading-snug text-lab-ink dark:text-titanium-bright">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-lab-muted dark:text-titanium-dim md:text-sm">
                {service.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
