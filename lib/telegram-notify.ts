export type QuoteNotifyPayload = {
  company: string;
  contactName: string;
  email: string;
  phone: string;
  qualityTier: string;
  message: string;
  attachments: { name: string; size: number; type: string }[];
};

const TELEGRAM_TEXT_MAX = 3900;

function escapeTelegramHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function buildTelegramText(payload: QuoteNotifyPayload): string {
  const lines: string[] = [
    "🧾 <b>Нова заявка з сайту</b>",
    "",
    `<b>Компанія:</b> ${escapeTelegramHtml(payload.company)}`,
    `<b>Контакт:</b> ${escapeTelegramHtml(payload.contactName)}`,
    `<b>Email:</b> ${escapeTelegramHtml(payload.email)}`,
    `<b>Телефон:</b> ${escapeTelegramHtml(payload.phone || "—")}`,
    `<b>Рівень якості:</b> ${escapeTelegramHtml(payload.qualityTier || "—")}`,
    "",
    "<b>Повідомлення:</b>",
    escapeTelegramHtml(payload.message || "—"),
  ];

  if (payload.attachments.length > 0) {
    lines.push("", "<b>Файли (лише метадані):</b>");
    for (const file of payload.attachments) {
      lines.push(
        `• ${escapeTelegramHtml(file.name)} (${formatBytes(file.size)})`,
      );
    }
  }

  lines.push("", `<i>${escapeTelegramHtml(new Date().toISOString())}</i>`);

  let text = lines.join("\n");
  if (text.length > TELEGRAM_TEXT_MAX) {
    text = `${text.slice(0, TELEGRAM_TEXT_MAX - 24)}\n… <i>обрізано</i>`;
  }
  return text;
}

export function isTelegramQuoteNotifyConfigured(): boolean {
  return Boolean(
    process.env.TELEGRAM_BOT_TOKEN?.trim() && process.env.TELEGRAM_CHAT_ID?.trim(),
  );
}

export async function sendQuoteNotificationToTelegram(
  payload: QuoteNotifyPayload,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();
  if (!token || !chatId) {
    return { ok: true };
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: buildTelegramText(payload),
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  const data = (await response.json()) as { ok?: boolean; description?: string };
  if (!response.ok || !data.ok) {
    return {
      ok: false,
      error: data.description ?? `HTTP ${response.status}`,
    };
  }

  return { ok: true };
}
