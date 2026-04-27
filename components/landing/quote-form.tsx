"use client";

import { useCallback, useState } from "react";
import {
  e164FromNineDigits,
  isValidUkrainianPhone,
  UKRAINIAN_PHONE_HINT,
  UKRAINIAN_PHONE_PLACEHOLDER,
} from "@/lib/ukrainian-phone";

const tiers = [
  { value: "", label: "Оберіть рівень (необовʼязково)" },
  { value: "standard", label: "Standard" },
  { value: "pro", label: "Pro" },
  { value: "premium", label: "Premium" },
  { value: "express", label: "Express" },
] as const;

const fieldClass =
  "mt-1.5 w-full rounded-md border border-zinc-200 bg-white/90 px-3 py-2.5 text-sm text-lab-ink outline-none transition placeholder:text-lab-muted focus:border-amber-highlight/50 focus:ring-1 focus:ring-amber-highlight/30 dark:border-titanium/15 dark:bg-obsidian-soft/90 dark:text-titanium-bright dark:placeholder:text-titanium-dim/80 dark:focus:border-amber-highlight/40";

const labelClass =
  "text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-titanium-dim/90";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [phone9, setPhone9] = useState("");

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback("");

    if (!isValidUkrainianPhone(e164FromNineDigits(phone9))) {
      setStatus("error");
      setFeedback(UKRAINIAN_PHONE_HINT);
      return;
    }

    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as { ok?: boolean; message?: string };

      if (!res.ok || !json.ok) {
        setStatus("error");
        setFeedback(json.message ?? "Помилка відправки");
        return;
      }

      setStatus("success");
      setFeedback(json.message ?? "Успішно надіслано");
      setPhone9("");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Мережова помилка. Перевірте зʼєднання.");
    }
  }, [phone9]);

  return (
    <div
      className="rounded-2xl border border-zinc-200/80 bg-white/50 p-6 shadow-sm dark:border-titanium/10 dark:bg-obsidian-muted/30 sm:p-8"
    >
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-highlight/90">
        Заявка
      </p>
      <h3 className="font-display mt-3 text-xl font-light text-lab-ink dark:text-titanium-bright">
        Безкоштовна консультація та прорахунок
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-lab-muted dark:text-titanium-dim">
        Можна додати до 4 фотографій (JPEG, PNG, WebP) — до 1,5 МБ кожна.
      </p>
      <form className="mt-8 space-y-5" onSubmit={onSubmit}>
        <div>
          <label htmlFor="quote-company" className={labelClass}>
            Компанія <span className="text-red-600 dark:text-red-400">*</span>
          </label>
          <input
            id="quote-company"
            name="company"
            required
            autoComplete="organization"
            className={fieldClass}
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="quote-contact" className={labelClass}>
              Контактна особа <span className="text-red-600 dark:text-red-400">*</span>
            </label>
            <input
              id="quote-contact"
              name="contactName"
              required
              autoComplete="name"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="quote-email" className={labelClass}>
              Email <span className="text-red-600 dark:text-red-400">*</span>
            </label>
            <input
              id="quote-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClass}
            />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <span className={labelClass}>Телефон</span>
            <div
              className={`mt-1.5 flex min-h-[42px] w-full items-center overflow-hidden rounded-md border border-zinc-200 bg-white/90 text-sm text-lab-ink focus-within:border-amber-highlight/50 focus-within:ring-1 focus-within:ring-amber-highlight/30 dark:border-titanium/15 dark:bg-obsidian-soft/90 dark:text-titanium-bright dark:focus-within:border-amber-highlight/40`}
            >
              <span
                className="shrink-0 border-r border-zinc-200/90 bg-zinc-50/90 px-3 py-2.5 font-mono text-xs text-lab-muted dark:border-titanium/20 dark:bg-obsidian-muted/80 dark:text-titanium-dim"
                aria-hidden
              >
                +380
              </span>
              <input
                id="quote-phone"
                type="text"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder={UKRAINIAN_PHONE_PLACEHOLDER}
                maxLength={9}
                value={phone9}
                onChange={(e) => setPhone9(e.target.value.replace(/\D/g, "").slice(0, 9))}
                aria-describedby="quote-phone-hint"
                className="min-w-0 flex-1 border-0 bg-transparent px-3 py-2.5 outline-none placeholder:text-lab-muted dark:placeholder:text-titanium-dim/80"
              />
            </div>
            <input type="hidden" name="phone" value={e164FromNineDigits(phone9)} />
            <p id="quote-phone-hint" className="mt-1.5 text-xs text-lab-muted dark:text-titanium-dim/80">
              {UKRAINIAN_PHONE_HINT} За потреби — лише email.
            </p>
          </div>
          <div>
            <label htmlFor="quote-tier" className={labelClass}>
              Рівень якості
            </label>
            <select id="quote-tier" name="qualityTier" className={fieldClass}>
              {tiers.map((t) => (
                <option key={t.value || "empty"} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="quote-message" className={labelClass}>
            Повідомлення
          </label>
          <textarea
            id="quote-message"
            name="message"
            rows={4}
            className={`${fieldClass} min-h-[120px] resize-y`}
            placeholder="Кількість плат, терміни, посилання на файли…"
          />
        </div>
        <div>
          <label htmlFor="quote-files" className={labelClass}>
            Фотографії
          </label>
          <input
            id="quote-files"
            name="files"
            type="file"
            accept="image/*"
            multiple
            className="mt-1.5 block w-full text-sm text-lab-muted file:mr-4 file:rounded-md file:border-0 file:bg-zinc-900 file:px-3 file:py-2 file:text-xs file:font-medium file:uppercase file:tracking-wide file:text-white hover:file:bg-zinc-800 dark:text-titanium-dim dark:file:bg-titanium-bright dark:file:text-obsidian dark:hover:file:bg-titanium"
          />
        </div>
        {feedback ? (
          <p
            className={`text-sm ${
              status === "success"
                ? "text-emerald-700 dark:text-emerald-400/90"
                : status === "error"
                  ? "text-red-600 dark:text-red-400"
                  : "text-lab-muted dark:text-titanium-dim"
            }`}
            role="status"
          >
            {feedback}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center rounded-full bg-zinc-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-titanium-bright dark:text-obsidian dark:hover:bg-titanium sm:w-auto"
        >
          {status === "loading" ? "Відправка…" : "Надіслати заявку"}
        </button>
      </form>
    </div>
  );
}
