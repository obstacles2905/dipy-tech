import { services } from "@/lib/site-content";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Послуги
          </h2>
          <p className="mt-4 text-muted">
            Повний спектр операцій з ручного монтажу та супутніх процесів для друкованих
            плат.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((title) => (
            <li
              key={title}
              className="flex gap-3 rounded-2xl border border-border bg-surface p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span
                className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              <span className="font-medium text-foreground">{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
