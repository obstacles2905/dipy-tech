import { extras } from "@/lib/site-content";

export function Extras() {
  return (
    <section id="extras" className="scroll-mt-20 border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Додаткові послуги
          </h2>
          <p className="mt-4 text-muted">
            Гнучкі умови для стартапів, дослідних зразків і виробництва з короткими
            дедлайнами.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {extras.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-gradient-to-br from-surface to-slate-50 p-6"
            >
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm font-medium text-accent">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
