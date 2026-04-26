import './globals.css';

import type { Metadata } from 'next';
import {
  Inter,
  Montserrat,
} from 'next/font/google';

import { AppProviders } from '@/components/providers/app-providers';

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://dipytech.com.ua"),
  title: {
    default: "DipyTech — монтаж друкованих плат і виробництво електроніки",
    template: "%s | DipyTech",
  },
  description:
    "SMD і THT монтаж друкованих плат, прототипи, малі партії, кабельна продукція, складання в корпус та контроль якості для виробництва електроніки.",
  applicationName: "DipyTech",
  keywords: [
    "монтаж друкованих плат",
    "монтаж печатных плат",
    "SMD монтаж",
    "THT монтаж",
    "виробництво електроніки",
    "производство электроники",
    "збірка електроніки",
    "прототипи електроніки",
  ],
  authors: [{ name: "DipyTech" }],
  creator: "DipyTech",
  publisher: "DipyTech",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DipyTech — монтаж друкованих плат і виробництво електроніки",
    description:
      "SMD/THT монтаж, прототипи, малі партії, кабельна продукція, складання в корпус та контроль якості для електронних виробів.",
    url: "/",
    siteName: "DipyTech",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Макрофото електронної плати для послуг монтажу друкованих плат DipyTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DipyTech — монтаж друкованих плат",
    description:
      "SMD/THT монтаж, прототипи, малі партії та контроль якості для виробництва електроніки.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
        alt: "Макрофото електронної плати для послуг DipyTech",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body className="min-h-screen">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
