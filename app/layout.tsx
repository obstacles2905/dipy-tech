import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ручний монтаж плат | B2B послуги",
  description:
    "SMD, THT, двосторонній та комбінований монтаж. Контроль якості за IPC, відмивання, захисні покриття. Для бізнесу з фокусом на надійність та стандарти.",
  openGraph: {
    title: "Ручний монтаж плат — професійні B2B послуги",
    description:
      "Монтаж плат, контроль якості, термінові замовлення та малі партії.",
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${plusJakarta.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
