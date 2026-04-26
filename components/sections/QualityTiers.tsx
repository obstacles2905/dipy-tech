import { qualityTiers } from "@/lib/site-content";

export function QualityTiers() {
  return (
    <section id="quality" className="scroll-mt-20 border-b border-border bg-slate-50/80 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Рівні якості
          </h2>
          <p className="mt-4 text-muted">
            Оберіть рівень контролю під ваш продукт — від стандартної збірки до повного
            пакету документації та пріоритету в черзі.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {qualityTiers.map((tier) => (
            <article
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-6 shadow-sm ${
                tier.highlight
                  ? "border-accent bg-surface ring-2 ring-accent/20 lg:scale-[1.02]"
                  : "border-border bg-surface"
              }`}
            >
              <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted">{tier.description}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm">
                {tier.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent" aria-hidden>
                      ✓
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              {tier.highlight ? (
                <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent">
                  Популярний вибір
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
