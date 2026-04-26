import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { QuoteForm } from "@/components/landing/quote-form";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-zinc-200 bg-white/60 dark:border-titanium/10 dark:bg-obsidian-soft/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-highlight/90">
              Контакти
            </p>
            <h2 className="font-display mt-4 text-2xl font-light text-lab-ink dark:text-titanium-bright md:text-3xl">
              Партнерські відносини понад разові угоди
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-lab-muted dark:text-titanium-dim">
              Ми орієнтовані на довгострокову співпрацю: передбачуваність процесів,
              прозорість комунікації та повага до ваших стандартів якості.
            </p>
          </div>
          <div className="space-y-6 lg:pt-2">
            <a
              href="mailto:admin@example.com"
              className="flex items-start gap-3 text-sm text-lab-muted transition hover:text-lab-ink dark:text-titanium-dim dark:hover:text-titanium-bright"
            >
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-highlight" aria-hidden />
              <span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 dark:text-titanium-dim/80">
                  Електронна пошта
                </span>
                admin@example.com
              </span>
            </a>
            <div className="flex items-start gap-3 text-sm text-lab-muted dark:text-titanium-dim">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-highlight" aria-hidden />
              <span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 dark:text-titanium-dim/80">
                  Локація виробництва
                </span>
                Україна · за узгодженням — зустріч або відвантаження
              </span>
            </div>
            <Link
              href="/#services"
              className="inline-flex text-xs font-medium uppercase tracking-[0.22em] text-lab-muted underline-offset-4 transition hover:text-lab-ink hover:underline dark:text-titanium-dim dark:hover:text-titanium-bright"
            >
              Повернутися до послуг
            </Link>
          </div>
        </div>
        <div className="mt-16 border-t border-zinc-200 pt-12 dark:border-titanium/10">
          <QuoteForm />
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-200 pt-8 text-[10px] uppercase tracking-[0.24em] text-zinc-500 dark:border-titanium/10 dark:text-titanium-dim/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ProfTechnology</p>
          <p className="max-w-xl text-right md:text-left">
            Конфіденційність замовлень · Індивідуальні умови для постійних партнерів
          </p>
        </div>
      </div>
    </footer>
  );
}
