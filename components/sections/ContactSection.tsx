import { QuoteForm } from "@/components/QuoteForm";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Контакти та заявка
            </h2>
            <p className="mt-4 text-muted">
              Опишіть задачу, додайте Gerber, специфікацію або фото — ми зв&apos;яжемося
              для уточнення термінів та рівня якості.
            </p>
            <div className="mt-8 space-y-4 rounded-2xl border border-border bg-surface p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Email
                </p>
                <a
                  href="mailto:info@company.ua"
                  className="mt-1 text-lg font-medium text-accent hover:underline"
                >
                  info@company.ua
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Телефон
                </p>
                <a
                  href="tel:+380441234567"
                  className="mt-1 text-lg font-medium text-foreground hover:text-accent"
                >
                  +38 (044) 123-45-67
                </a>
              </div>
            </div>
          </div>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
