import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-slate-50 to-background"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgb(14 116 144 / 0.15), transparent 45%),
            radial-gradient(circle at 80% 60%, rgb(15 23 42 / 0.08), transparent 40%)`,
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <p className="mb-4 inline-flex rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
          B2B · Надійність · Стандарти
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Ручний монтаж плат для вашого виробництва
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Працюємо з бізнесом, якому важлива якість збірки, повторюваність процесів і
          відповідність міжнародним вимогам — від прототипів до серійних партій.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-900/10 transition-colors hover:bg-accent-hover"
          >
            Надіслати заявку
          </Link>
          <Link
            href="#quality"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-6 py-3 text-base font-semibold text-foreground transition-colors hover:border-accent/40 hover:bg-slate-50"
          >
            Рівні якості
          </Link>
        </div>
        <dl className="mt-16 grid gap-8 sm:grid-cols-3">
          {[
            { k: "IPC", v: "контроль за стандартами" },
            { k: "SMD + THT", v: "комбіновані рішення" },
            { k: "24–48 год", v: "термінові замовлення" },
          ].map((item) => (
            <div key={item.k} className="rounded-2xl border border-border bg-surface/80 p-5">
              <dt className="text-2xl font-bold text-foreground">{item.k}</dt>
              <dd className="mt-1 text-sm text-muted">{item.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
