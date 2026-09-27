import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Script from "next/script";
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
    ? "أفضل مشتري سكراب وأثاث مستعمل | شراء سكراب الدمام" 
    : "Best Scrap & Old Furniture Buyer | Buy Old Scrap Dammam";
    
  const description = isArabic
    ? "هل تبحث عن أفضل مشتري سكراب وأثاث مستعمل في الدمام؟ نشتري المكيفات القديمة، سكراب المعادن، الثلاجات، والغسالات كاش فوراً. اتصل بنا اليوم!"
    : "Looking for the best scrap & old furniture buyer in Dammam? We buy old AC, metal scrap, fridge, and washing machines for instant cash. Contact us today!";

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
        "en": "https://www.buyoldscrapdammam.com/en",
        "ar": "https://www.buyoldscrapdammam.com/ar",
        "x-default": "https://www.buyoldscrapdammam.com/en",
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
    <html
      lang={lang}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`${cairo.variable} font-sans scroll-smooth`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W43422QZ');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>

      <body className="flex min-h-screen flex-col bg-slate-50 pb-24 text-slate-900 antialiased sm:pb-8">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W43422QZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}