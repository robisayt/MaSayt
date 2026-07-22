import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Space Grotesk has no Cyrillic subset on Google Fonts, so it is only
// requested for latin glyphs; Ukrainian headings fall back to the next
// font in the stack for Cyrillic characters (same behaviour as before).
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-raw",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-raw",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-raw",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MaSayt",
  description:
    "Створюємо сучасні сайти, які допомагають бізнесу зростати: лендінги, сайти-візитки та невеликі корпоративні сайти.",
  openGraph: {
    title: "MaSayt — команда веб-дизайну та розробки сайтів",
    description: "Сучасний дизайн. Чистий код. Адаптивність на всіх пристроях.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="uk"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased" style={{ background: "var(--bg)", color: "var(--text)" }}>
        {children}
      </body>
    </html>
  );
}
