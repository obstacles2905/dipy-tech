import { QuoteForm } from "@/components/QuoteForm";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-12 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-[980px] px-4 lg:px-0">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Контакти
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Опишіть задачу — ми зв&apos;яжемося для уточнення термінів та вартості.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted">
                Email
              </p>
              <a
                href="mailto:info@company.ua"
                className="mt-2 block text-lg font-medium text-foreground transition-colors hover:text-accent"
              >
                info@company.ua
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted">
                Телефон
              </p>
              <a
                href="tel:+380441234567"
                className="mt-2 block text-lg font-medium text-foreground transition-colors hover:text-accent"
              >
                +38 (044) 123-45-67
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted">
                Робочі години
              </p>
              <p className="mt-2 text-lg font-medium text-foreground">
                Пн — Пт, 9:00 — 18:00
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
