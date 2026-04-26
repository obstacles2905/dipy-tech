"use client";

import { useCallback, useState } from "react";

const tiers = [
  { value: "", label: "Оберіть рівень" },
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
    "w-full rounded-xl border-0 bg-surface px-4 py-3 text-foreground placeholder:text-muted/60 ring-1 ring-border/60 outline-none transition-all focus:ring-2 focus:ring-accent/40";

  return (
    <div className="rounded-2xl bg-surface p-6 ring-1 ring-border/60 sm:p-8">
      <form className="space-y-5" onSubmit={onSubmit}>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
            Компанія <span className="text-accent">*</span>
          </label>
          <input 
            id="company" 
            name="company" 
            required 
            className={inputClass}
            placeholder="Назва компанії"
          />
        </div>
        
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contactName" className="block text-sm font-medium text-foreground mb-2">
              Контактна особа <span className="text-accent">*</span>
            </label>
            <input 
              id="contactName" 
              name="contactName" 
              required 
              className={inputClass}
              placeholder="Ваше ім'я"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email <span className="text-accent">*</span>
            </label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className={inputClass}
              placeholder="email@company.com"
            />
          </div>
        </div>
        
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Телефон
            </label>
            <input 
              id="phone" 
              name="phone" 
              type="tel" 
              className={inputClass}
              placeholder="+380"
            />
          </div>
          <div>
            <label htmlFor="qualityTier" className="block text-sm font-medium text-foreground mb-2">
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
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Повідомлення
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder="Кількість плат, терміни, особливі вимоги..."
          />
        </div>
        
        <div>
          <label htmlFor="files" className="block text-sm font-medium text-foreground mb-2">
            Файли
          </label>
          <input
            id="files"
            name="files"
            type="file"
            multiple
            className="block w-full text-sm text-muted file:mr-4 file:rounded-full file:border-0 file:bg-accent file:px-5 file:py-2.5 file:text-sm file:font-medium file:text-white file:cursor-pointer hover:file:bg-accent-hover file:transition-colors"
          />
          <p className="mt-2 text-xs text-muted">До 4 файлів, до 1.5 МБ кожен</p>
        </div>
        
        {feedback && (
          <p
            className={`text-sm font-medium ${
              status === "success" ? "text-green-600" : status === "error" ? "text-red-600" : "text-muted"
            }`}
            role="status"
          >
            {feedback}
          </p>
        )}
        
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-full bg-accent py-3.5 text-sm font-medium text-white transition-all hover:bg-accent-hover hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
        >
          {status === "loading" ? "Відправка..." : "Надіслати заявку"}
        </button>
      </form>
    </div>
  );
}
