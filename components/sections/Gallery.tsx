import Image from "next/image";
import { galleryItems } from "@/lib/site-content";

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 border-b border-border bg-slate-50/80 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Галерея
          </h2>
          <p className="mt-4 text-muted">
            Приклади процесів монтажу та контролю. Замініть зображення на власні фото
            виробництва після запуску сайту.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <figure
              key={item.src}
              className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-medium text-foreground">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
