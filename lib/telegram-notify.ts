export type QuoteNotifyPayload = {
  company: string;
  contactName: string;
  email: string;
  phone: string;
  qualityTier: string;
  message: string;
  attachments: { name: string; size: number; type: string }[];
};

export type QuoteImageForTelegram = {
  filename: string;
  mime: string;
  data: ArrayBuffer;
};

const TELEGRAM_TEXT_MAX = 3900;
const api = (token: string) => `https://api.telegram.org/bot${token}`;

function escapeTelegramHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function buildTelegramText(payload: QuoteNotifyPayload, photoCount: number): string {
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
    lines.push("", "<b>Фотографії (метадані):</b>");
    for (const file of payload.attachments) {
      lines.push(
        `• ${escapeTelegramHtml(file.name)} (${formatBytes(file.size)})`,
      );
    }
    if (photoCount > 0) {
      lines.push(
        "",
        "<i>Оригінали надіслано окремими повідомленнями в цей чат.</i>",
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

function isImageForPhotoApi(mime: string): boolean {
  return (
    mime === "image/jpeg" ||
    mime === "image/png" ||
    mime === "image/webp" ||
    mime === "image/gif"
  );
}

export async function sendQuoteNotificationToTelegram(
  payload: QuoteNotifyPayload,
  images: QuoteImageForTelegram[] = [],
): Promise<{ ok: true } | { ok: false; error: string }> {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();
  if (!token || !chatId) {
    return { ok: true };
  }

  const text = buildTelegramText(payload, images.length);
  const msgRes = await fetch(`${api(token)}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });
  const msgData = (await msgRes.json()) as { ok?: boolean; description?: string };
  if (!msgRes.ok || !msgData.ok) {
    return { ok: false, error: msgData.description ?? `HTTP ${msgRes.status}` };
  }

  for (let i = 0; i < images.length; i++) {
    const img = images[i]!;
    const body = new Blob([img.data], { type: img.mime || "application/octet-stream" });
    if (isImageForPhotoApi(img.mime)) {
      const form = new FormData();
      form.set("chat_id", chatId);
      if (i === 0) {
        form.set("caption", `🖼 DipyTech — фото з заявки (${images.length} шт.)`);
      }
      form.set("photo", body, img.filename);
      const r = await fetch(`${api(token)}/sendPhoto`, { method: "POST", body: form });
      const d = (await r.json()) as { ok?: boolean; description?: string };
      if (!r.ok || !d.ok) {
        return { ok: false, error: d.description ?? `sendPhoto ${r.status}` };
      }
    } else {
      const form = new FormData();
      form.set("chat_id", chatId);
      if (i === 0) {
        form.set("caption", `📎 DipyTech — зображення з заявки (${images.length} шт.)`);
      }
      form.set("document", body, img.filename);
      const r = await fetch(`${api(token)}/sendDocument`, { method: "POST", body: form });
      const d = (await r.json()) as { ok?: boolean; description?: string };
      if (!r.ok || !d.ok) {
        return { ok: false, error: d.description ?? `sendDocument ${r.status}` };
      }
    }
  }

  return { ok: true };
}
