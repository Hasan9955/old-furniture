import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "../globals.css";

const locales = ["ar", "en"];

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isArabic = lang === "ar";

  const title = isArabic 
    ? "شراء سكراب واثاث مستعمل في الدمام | نشتري العفش بأفضل الأسعار" 
    : "Buy Old Scrap in Dammam | Best Prices for Furniture & Scrap";
    
  const description = isArabic
    ? "نشتري الأثاث المستعمل والسكراب في الدمام والخبر والظهران بأفضل الأسعار. نشتري غرف النوم، المطابخ، المكيفات، والأداوت الكهربائية، خدمة سريعة وموثوقة."
    : "We buy used furniture and old scrap in Dammam, Khobar, and Dhahran at the best prices. We buy bedrooms, kitchens, A/Cs, and appliances. Fast and reliable service.";

  const keywords = isArabic
    ? [
        "شراء سكراب الدمام",
        "نشتري سكراب بالدمام",
        "شراء أثاث مستعمل الدمام",
        "شراء عفش مستعمل",
        "محلات شراء الأثاث المستعمل في الدمام",
        "نشتري الاثاث المستعمل",
        "شراء مكيفات مستعملة",
        "شراء مطابخ مستعملة",
        "buy old scrap dammam"
      ]
    : [
        "buy old scrap dammam",
        "scrap buyer dammam",
        "buy used furniture dammam",
        "buy damaged ACs dammam",
        "aluminum scrap buyers",
        "copper scrap dammam",
        "used furniture buyers"
      ];

  const siteName = isArabic ? "شراء سكراب واثاث الدمام" : "Dammam Scrap & Used Furniture Buyers";

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://www.buyoldscrapdammam.com/${lang}`,
      siteName,
      locale: isArabic ? "ar_SA" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://www.buyoldscrapdammam.com/${lang}`,
      languages: {
        "en-US": "https://www.buyoldscrapdammam.com/en",
        "ar-SA": "https://www.buyoldscrapdammam.com/ar",
      },
    },
  };
}

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
