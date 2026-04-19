import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "../globals.css";

const locales = ["ar", "en"];

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "شراء الأثاث المستعمل في الدمام | نشتري العفش بأفضل الأسعار",
  description: "نشتري الأثاث المستعمل في الدمام والخبر والظهران بأفضل الأسعار. نشتري غرف النوم، المطابخ، المكيفات، والأجهزة الكهربائية، خدمة سريعة وموثوقة.",
  keywords: [
    "شراء أثاث مستعمل الدمام",
    "شراء عفش مستعمل",
    "محلات شراء الأثاث المستعمل في الدمام",
    "نشتري الاثاث المستعمل",
    "شراء مكيفات مستعملة",
    "شراء مطابخ مستعملة",
    "نقل عفش الدمام",
    "نقل منازل الدمام",
    "شركة نقل اثاث الدمام",
  ],
  openGraph: {
    title: "شراء الأثاث المستعمل في الدمام | نشتري العفش بأفضل الأسعار",
    description: "نشتري الأثاث المستعمل في الدمام والخبر والظهران بأفضل الأسعار. نشتري غرف النوم، المطابخ، المكيفات، والأجهزة الكهربائية، خدمة سريعة وموثوقة.",
    url: "https://example.com", // Replace with real URL when hosting
    siteName: "أثاث الدمام",
    locale: "ar_SA",
    type: "website",
  },
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} className={`${cairo.variable} font-sans scroll-smooth`}>
      <body className="flex min-h-screen flex-col bg-slate-50 pb-24 text-slate-900 antialiased sm:pb-8">
        {children}
      </body>
    </html>
  );
}
