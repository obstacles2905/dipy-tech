"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

/** Імена файлів у `public/img` — підпис = назва файлу без розширення. */
const GALLERY_IMAGES = [
  { file: "Чиста пайка по світовим стандартам.PNG", tilt: "-rotate-1" },
  { file: "Пайка розʼємів.PNG", tilt: "rotate-1" },
  { file: "Точність у деталях. Пайка вивідних роʼємів.PNG", tilt: "rotate-0" },
  { file: "Надійність під навантаженням. Пайка кабелю XT-90.PNG", tilt: "-rotate-1" },
  { file: "Комбінований монтаж.PNG", tilt: "rotate-1" },
] as const;

function captionFromFilename(filename: string) {
  return filename.replace(/\.(PNG|png|jpe?g|webp)$/i, "");
}

function imageSrc(file: string) {
  return `/img/${encodeURIComponent(file)}`;
}

const lightboxEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

function GalleryLightbox({ file, onClose }: { file: string; onClose: () => void }) {
  const openCaption = captionFromFilename(file);
  const titleId = useId();
  return createPortal(
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-zinc-950/86 p-3 backdrop-blur-md dark:bg-obsidian/92 sm:p-6"
      onClick={onClose}
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.28, ease: lightboxEase }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[100dvh] w-full max-w-6xl flex-col"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 14, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.34, delay: 0.04, ease: lightboxEase }}
      >
        <h2 id={titleId} className="sr-only">
          {openCaption}
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-0 top-0 z-10 -m-1 flex h-10 w-10 items-center justify-center rounded-sm border border-zinc-300/20 bg-obsidian-soft/90 text-titanium-bright shadow-md backdrop-blur transition hover:border-amber-highlight/50 hover:text-amber-highlight dark:bg-obsidian/95"
          aria-label="Закрити"
        >
          <X className="h-5 w-5" strokeWidth={1.75} />
        </button>
        <div className="flex min-h-0 w-full flex-col items-center justify-center gap-4 pt-10">
          {/* eslint-disable-next-line @next/next/no-img-element -- full resolution in lightbox, natural dimensions */}
          <img
            src={imageSrc(file)}
            alt=""
            className="max-h-[min(85dvh,100%)] w-auto max-w-full object-contain"
            loading="eager"
            decoding="async"
          />
          <p
            className="max-w-2xl text-center text-sm text-titanium-bright/95"
            aria-hidden
          >
            {openCaption}
          </p>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}

export function GallerySection() {
  const [openFile, setOpenFile] = useState<string | null>(null);

  const closeLightbox = useCallback(() => {
    setOpenFile(null);
  }, []);

  useEffect(() => {
    if (openFile === null) {
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openFile, closeLightbox]);

  useEffect(() => {
    if (openFile === null) {
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [openFile]);

  return (
    <section
      id="gallery"
      className="scroll-mt-24 border-t border-zinc-200 py-24 dark:border-titanium/10 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-highlight/90">
            Галерея
          </p>
          <h2 className="font-display mt-4 text-3xl font-light tracking-tight text-lab-ink dark:text-titanium-bright md:text-4xl">
            Макрозйомка монтажу друкованих плат
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-lab-muted dark:text-titanium-dim md:text-base">
            Реальна зйомка робіт: акуратність паяння, контроль дрібного кроку та
            дисципліна монтажу.
          </p>
        </div>

        <motion.div
          initial={false}
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5"
        >
          {GALLERY_IMAGES.map((item) => {
            const caption = captionFromFilename(item.file);
            return (
              <motion.figure
                key={item.file}
                role="button"
                tabIndex={0}
                aria-label={`Відкрити збільшений вигляд: ${caption}`}
                onClick={() => setOpenFile(item.file)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenFile(item.file);
                  }
                }}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className={`group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-sm border border-zinc-200 bg-zinc-100 outline-none ring-amber-highlight/0 transition focus-visible:ring-2 focus-visible:ring-amber-highlight dark:border-titanium/10 dark:bg-obsidian-muted ${item.tilt}`}
              >
                <div className="absolute inset-0 p-1.5 sm:p-2">
                  <Image
                    src={imageSrc(item.file)}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="pointer-events-none object-contain object-center transition duration-500 group-hover:brightness-[1.04]"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/90 to-transparent p-4 pt-10 dark:from-obsidian dark:via-obsidian/90">
                  <p className="text-xs text-lab-ink dark:text-titanium-bright">{caption}</p>
                </figcaption>
              </motion.figure>
            );
          })}
        </motion.div>
      </div>

      {openFile && typeof document !== "undefined" && (
        <GalleryLightbox file={openFile} onClose={closeLightbox} />
      )}
    </section>
  );
}
