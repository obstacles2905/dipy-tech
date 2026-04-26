import { qualityTiers } from "@/lib/site-content";

export function QualityTiers() {
  return (
    <section id="quality" className="scroll-mt-12 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-[980px] px-4 lg:px-0">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Рівні якості
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Оберіть рівень контролю під ваш продукт — від стандартної збірки до повного
            пакету документації.
          </p>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {qualityTiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-all ${
                tier.highlight
                  ? "bg-foreground text-white ring-1 ring-foreground"
                  : "bg-background ring-1 ring-border/60 hover:ring-border"
              }`}
            >
              {tier.highlight && (
                <p className="absolute -top-3 left-8 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                  Популярний
                </p>
              )}
              <h3 className={`text-xl font-semibold ${tier.highlight ? "text-white" : "text-foreground"}`}>
                {tier.name}
              </h3>
              <p className={`mt-3 text-sm leading-relaxed ${tier.highlight ? "text-white/70" : "text-muted"}`}>
                {tier.description}
              </p>
              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg 
                      className={`mt-0.5 h-4 w-4 shrink-0 ${tier.highlight ? "text-accent" : "text-accent"}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className={tier.highlight ? "text-white/90" : "text-foreground"}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
