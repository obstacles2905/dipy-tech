import { extras } from "@/lib/site-content";

const icons = [
  // Термінові замовлення
  <svg key="urgent" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Прототипи
  <svg key="proto" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-.974.162a9.001 9.001 0 01-14.322 0l-.974-.162c-1.717-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </svg>,
  // Малі партії
  <svg key="small" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
  </svg>,
  // Під ключ
  <svg key="turnkey" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
  </svg>,
];

export function Extras() {
  return (
    <section id="extras" className="scroll-mt-12 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-[980px] px-4 lg:px-0">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Додаткові послуги
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Гнучкі умови для стартапів, дослідних зразків і виробництва з короткими дедлайнами.
          </p>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {extras.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-2xl bg-surface p-6 text-center transition-colors hover:bg-surface/80"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform group-hover:scale-110">
                {icons[index]}
              </div>
              <h3 className="mt-4 font-medium text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-accent font-medium">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
