"use client";

import { useCallback, useState } from "react";

const tiers = [
  { value: "", label: "Оберіть рівень (необовʼязково)" },
  { value: "standard", label: "Standard" },
  { value: "pro", label: "Pro" },
  { value: "premium", label: "Premium" },
];

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

  const inputClass =
    "mt-1 w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-foreground outline-none ring-accent/0 transition-shadow focus:ring-2 focus:ring-accent/30";

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
      <h3 className="text-lg font-semibold text-foreground">Форма заявки</h3>
      <p className="mt-1 text-sm text-muted">
        До 4 файлів, до ~1,5 МБ кожен (обмеження безпеки хостингу). Великі архіви —
        краще посиланням у повідомленні.
      </p>
      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Компанія <span className="text-red-600">*</span>
          </label>
          <input id="company" name="company" required className={inputClass} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contactName" className="text-sm font-medium text-foreground">
              Контактна особа <span className="text-red-600">*</span>
            </label>
            <input id="contactName" name="contactName" required className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email <span className="text-red-600">*</span>
            </label>
            <input id="email" name="email" type="email" required className={inputClass} />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="text-sm font-medium text-foreground">
              Телефон
            </label>
            <input id="phone" name="phone" type="tel" className={inputClass} />
          </div>
          <div>
            <label htmlFor="qualityTier" className="text-sm font-medium text-foreground">
              Рівень якості
            </label>
            <select id="qualityTier" name="qualityTier" className={inputClass}>
              {tiers.map((t) => (
                <option key={t.value || "empty"} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Повідомлення
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${inputClass} resize-y min-h-[120px]`}
            placeholder="Кількість плат, терміни, посилання на файли…"
          />
        </div>
        <div>
          <label htmlFor="files" className="text-sm font-medium text-foreground">
            Файли
          </label>
          <input
            id="files"
            name="files"
            type="file"
            multiple
            className="mt-1 block w-full text-sm text-muted file:mr-4 file:rounded-lg file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-accent-hover"
          />
        </div>
        {feedback ? (
          <p
            className={`text-sm ${status === "success" ? "text-emerald-700" : status === "error" ? "text-red-600" : "text-muted"}`}
            role="status"
          >
            {feedback}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-xl bg-accent py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
        >
          {status === "loading" ? "Відправка…" : "Надіслати заявку"}
        </button>
      </form>
    </div>
  );
}
