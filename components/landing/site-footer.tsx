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
        <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2 lg:items-start lg:gap-x-16 lg:gap-y-0">
          <div className="min-w-0 max-w-lg">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-highlight/90">
              Контакти
            </p>
            <h2 className="font-display mt-4 text-2xl font-light text-balance text-lab-ink dark:text-titanium-bright md:text-3xl">
              Виробництво електроніки з партнерським супроводом
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-lab-muted dark:text-titanium-dim">
              Ми орієнтовані на довгострокову співпрацю: передбачуваність процесів,
              прозорість комунікації та повага до ваших стандартів якості.
            </p>
          </div>
          <div className="min-w-0 space-y-6 lg:max-w-md">
            <a
              href="mailto:dipytechnology@gmail.com"
              className="flex items-start gap-3 text-sm text-lab-muted transition hover:text-lab-ink dark:text-titanium-dim dark:hover:text-titanium-bright"
            >
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-highlight" aria-hidden />
              <span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 dark:text-titanium-dim/80">
                  Електронна пошта
                </span>
                dipytechnology@gmail.com
              </span>
            </a>
            <div className="flex items-start gap-3 text-sm text-lab-muted dark:text-titanium-dim">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-highlight" aria-hidden />
              <span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 dark:text-titanium-dim/80">
                  Локація
                </span>
                Україна, м. Дніпро - зустріч або відвантаження
              </span>
            </div>
            <div>
              <Link
                href="/#services"
                className="text-xs font-medium uppercase tracking-[0.22em] text-lab-muted underline-offset-4 transition hover:text-lab-ink hover:underline dark:text-titanium-dim dark:hover:text-titanium-bright"
              >
                Повернутися до послуг
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-zinc-200 pt-10 dark:border-titanium/10">
          <QuoteForm />
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-8 dark:border-titanium/10">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-8">
            <p className="shrink-0 text-[10px] uppercase tracking-[0.24em] text-zinc-500 dark:text-titanium-dim/70">
              © {new Date().getFullYear()} DipyTech
            </p>
            <p className="min-w-0 max-w-2xl text-balance text-[10px] uppercase leading-relaxed tracking-[0.2em] text-zinc-500 dark:text-titanium-dim/70 sm:text-right">
              Конфіденційність замовлень · Індивідуальні умови для постійних партнерів
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
