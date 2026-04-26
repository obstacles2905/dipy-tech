/**
 * Ukrainian E.164: +380 + 9 national digits. Empty = valid (optional field).
 */
const UA_E164_RE = /^\+380[0-9]{9}$/;

export function isValidUkrainianPhone(phone: string): boolean {
  const t = phone.trim();
  if (t === "") return true;
  return UA_E164_RE.test(t);
}

export const UKRAINIAN_PHONE_PLACEHOLDER = "00 000 00 00";

export const UKRAINIAN_PHONE_HINT =
  "9 цифр після +380 (наприклад, 50 123 45 67). Можна залишити порожнім.";

/** 9 optional digits (0–9 only) → +380XXXXXXXXX or "". */
export function e164FromNineDigits(nine: string): string {
  const d = nine.replace(/\D/g, "").slice(0, 9);
  if (d.length === 0) return "";
  return `+380${d}`;
}
