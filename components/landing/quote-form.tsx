"use client";

import { useCallback, useState } from "react";

const tiers = [
  { value: "", label: "Оберіть рівень (необовʼязково)" },
  { value: "standard", label: "Standard" },
  { value: "pro", label: "Pro" },
  { value: "premium", label: "Premium" },
] as const;

const fieldClass =
  "mt-1.5 w-full rounded-md border border-zinc-200 bg-white/90 px-3 py-2.5 text-sm text-lab-ink outline-none transition placeholder:text-lab-muted focus:border-amber-highlight/50 focus:ring-1 focus:ring-amber-highlight/30 dark:border-titanium/15 dark:bg-obsidian-soft/90 dark:text-titanium-bright dark:placeholder:text-titanium-dim/80 dark:focus:border-amber-highlight/40";

const labelClass =
  "text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-titanium-dim/90";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

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
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Мережова помилка. Перевірте зʼєднання.");
    }
  }, []);

  return (
    <div
      className="rounded-2xl border border-zinc-200/80 bg-white/50 p-6 shadow-sm dark:border-titanium/10 dark:bg-obsidian-muted/30 sm:p-8"
    >
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-highlight/90">
        Заявка
      </p>
      <h3 className="font-display mt-3 text-xl font-light text-lab-ink dark:text-titanium-bright">
        Надішліть технічне завдання
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-lab-muted dark:text-titanium-dim">
        До 4 файлів, до ~1,5 МБ кожен (обмеження безпеки хостингу). Великі архіви
        — краще посиланням у повідомленні.
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
            <label htmlFor="quote-phone" className={labelClass}>
              Телефон
            </label>
            <input
              id="quote-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={fieldClass}
            />
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
            Файли
          </label>
          <input
            id="quote-files"
            name="files"
            type="file"
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
