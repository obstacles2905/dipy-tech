import Image from "next/image";
import { galleryItems } from "@/lib/site-content";

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-12 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-[980px] px-4 lg:px-0">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Галерея
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Приклади процесів монтажу та контролю якості.
          </p>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <figure
              key={item.src}
              className="group relative overflow-hidden rounded-2xl bg-background"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-sm font-medium text-white">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
