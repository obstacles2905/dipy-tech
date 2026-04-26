import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background"
    >
      <div className="mx-auto max-w-[980px] px-4 pt-20 pb-16 text-center sm:pt-28 sm:pb-20 lg:px-0">
        <p className="mb-4 text-sm font-medium text-accent">
          B2B Послуги
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Ручний монтаж плат
          <br />
          <span className="bg-gradient-to-r from-foreground to-muted bg-clip-text text-transparent">
            для вашого виробництва
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          Працюємо з бізнесом, якому важлива якість збірки, повторюваність процесів і
          відповідність міжнародним вимогам.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-medium text-white transition-all hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]"
          >
            Надіслати заявку
          </Link>
          <Link
            href="#quality"
            className="inline-flex items-center justify-center rounded-full bg-transparent px-7 py-3 text-sm font-medium text-accent transition-opacity hover:opacity-70"
          >
            Дізнатися більше
            <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-t border-border/50 bg-surface">
        <div className="mx-auto max-w-[980px] px-4 py-12 lg:px-0">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { value: "IPC", label: "Контроль за стандартами" },
              { value: "SMD + THT", label: "Комбіновані рішення" },
              { value: "24-48 год", label: "Термінові замовлення" },
            ].map((item) => (
              <div key={item.value} className="text-center">
                <dt className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {item.value}
                </dt>
                <dd className="mt-2 text-sm text-muted">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
