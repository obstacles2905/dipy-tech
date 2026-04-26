import { NextResponse } from "next/server";
import { isValidUkrainianPhone } from "@/lib/ukrainian-phone";
import {
  isTelegramQuoteNotifyConfigured,
  sendQuoteNotificationToTelegram,
  type QuoteImageForTelegram,
  type QuoteNotifyPayload,
} from "@/lib/telegram-notify";

const MAX_FILES = 4;
const MAX_BYTES_PER_FILE = 1_500_000;

function badRequest(message: string) {
  return NextResponse.json({ ok: false, message }, { status: 400 });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("multipart/form-data")) {
    return badRequest("Очікується multipart/form-data");
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return badRequest("Не вдалося прочитати форму");
  }

  const company = String(formData.get("company") ?? "").trim();
  const contactName = String(formData.get("contactName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const qualityTier = String(formData.get("qualityTier") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!company || !contactName || !email) {
    return badRequest("Заповніть обовʼязкові поля: компанія, контакт, email");
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return badRequest("Некоректний email");
  }

  if (!isValidUkrainianPhone(phone)) {
    return badRequest(
      "Телефон у форматі +380 та 9 цифр (наприклад, +380501234567) або залиште поле порожнім",
    );
  }

  const files = formData.getAll("files").filter((v): v is File => v instanceof File);
  if (files.length > MAX_FILES) {
    return badRequest(`Не більше ${MAX_FILES} фото`);
  }

  const attachments: QuoteNotifyPayload["attachments"] = [];
  const imageBuffers: QuoteImageForTelegram[] = [];

  for (const file of files) {
    if (file.size === 0) continue;
    const type = (file.type || "").toLowerCase();
    const extOk = /\.(jpe?g|png|gif|webp|heic|heif|bmp)$/i.test(file.name);
    const isImage =
      type.startsWith("image/") || (type === "" && extOk);
    if (!isImage) {
      return badRequest(
        "Можна додавати лише зображення (фото), наприклад JPEG чи PNG.",
      );
    }
    if (file.size > MAX_BYTES_PER_FILE) {
      return badRequest(
        `Файл «${file.name}» завеликий (макс. ${Math.round(MAX_BYTES_PER_FILE / 1_000_000 * 10) / 10} МБ на фото)`,
      );
    }
    attachments.push({
      name: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
    });
    const data = await file.arrayBuffer();
    imageBuffers.push({
      filename: file.name,
      mime: file.type || "application/octet-stream",
      data,
    });
  }

  const payload: QuoteNotifyPayload = {
    company,
    contactName,
    email,
    phone,
    qualityTier,
    message,
    attachments,
  };

  const telegramResult = await sendQuoteNotificationToTelegram(
    payload,
    imageBuffers,
  );
  if (!telegramResult.ok) {
    return NextResponse.json(
      {
        ok: false,
        message: "Не вдалося відправити заявку. Спробуйте пізніше або напишіть нам напряму.",
      },
      { status: 502 },
    );
  }

  const webhook = process.env.FORM_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          receivedAt: new Date().toISOString(),
        }),
      });
    } catch {
      return NextResponse.json(
        { ok: false, message: "Не вдалося відправити заявку. Спробуйте пізніше." },
        { status: 502 },
      );
    }
  } else if (
    process.env.NODE_ENV === "development" &&
    !isTelegramQuoteNotifyConfigured()
  ) {
    console.info("[quote]", payload);
  }

  return NextResponse.json({
    ok: true,
    message: "Заявку прийнято. Ми звʼяжемося з вами найближчим часом.",
  });
}
