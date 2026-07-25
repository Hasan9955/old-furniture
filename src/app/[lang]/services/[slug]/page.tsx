import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Scale, 
  Truck, 
  Banknote, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight,
  ArrowLeft,
  HelpCircle,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContacts from "@/components/FloatingWhatsApp";
import { getDictionary } from "@/i18n/dictionaries";
import { getServiceDetails, getAllServiceSlugs } from "@/i18n/serviceData";

export async function generateStaticParams() {
  const locales = ["ar", "en"];
  const slugs = getAllServiceSlugs();
  const params: { lang: string; slug: string }[] = [];

  for (const lang of locales) {
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: 'ar' | 'en'; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const isArabic = lang === "ar";
  const dict = await getDictionary(lang);
  const serviceDetail = getServiceDetails(slug);
  
  const dictItem = dict.Services.items.find((item: any) => item.slug === slug);

  if (!serviceDetail || !dictItem) {
    return {
      title: isArabic ? "الخدمة غير موجودة" : "Service Not Found",
    };
  }

  const title = isArabic
    ? `${dictItem.title} بالدمام | أفضل سعر وكاش فوري`
    : `${dictItem.title} in Dammam | Best Price & Instant Cash`;

  const description = serviceDetail.longDescription[lang] || dictItem.description;
  const canonicalUrl = `https://www.buyoldscrapdammam.com/${lang}/services/${slug}`;

  return {
    title,
    description,
    keywords: [
      dictItem.keywords,
      isArabic ? `${dictItem.title} الدمام` : `${dictItem.title} dammam`,
      isArabic ? `شراء سكراب ${dictItem.title}` : `buy scrap ${slug}`,
      "scrap buyer dammam",
      "buy old scrap dammam"
    ],
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: isArabic ? "شراء سكراب واثاث الدمام" : "Dammam Scrap Buyers",
      locale: isArabic ? "ar_SA" : "en_US",
      type: "article",
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": `https://www.buyoldscrapdammam.com/en/services/${slug}`,
        "ar-SA": `https://www.buyoldscrapdammam.com/ar/services/${slug}`,
      },
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ lang: 'ar' | 'en'; slug: string }>;
}) {
  const { lang, slug } = await params;
  const isArabic = lang === "ar";
  const dict = await getDictionary(lang);
  const serviceDetail = getServiceDetails(slug);
  const dictItem = dict.Services.items.find((item: any) => item.slug === slug);

  if (!serviceDetail || !dictItem) {
    notFound();
  }

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;
  const ChevronIcon = isArabic ? ChevronLeft : ChevronRight;

  // Filter other services for recommendations
  const otherServices = dict.Services.items
    .filter((item: any) => item.slug !== slug)
    .slice(0, 3);

  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": dictItem.title,
    "description": serviceDetail.longDescription[lang],
    "provider": {
      "@type": "LocalBusiness",
      "name": isArabic ? "مؤسسة شراء السكراب بالدمام" : "Dammam Scrap Buyers",
      "telephone": "+966565642655",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dammam",
        "addressRegion": "Eastern Province",
        "addressCountry": "SA"
      }
    },
    "areaServed": ["Dammam", "Khobar", "Dhahran", "Qatif", "Jubail"],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "SAR",
      "availability": "https://schema.org/InStock"
    }
  };

  const processSteps = isArabic ? [
    { title: "١. التواصل والاستفسار", desc: "تواصل معنا عبر الاتصال أو الواتساب وأرسل صور الكمية." },
    { title: "٢. الفحص والوزن الميداني", desc: "ينزل فريقنا لموقعك بالدمام بفحص ويوزن السكراب بدقة." },
    { title: "٣. دفع الكاش الفوري", desc: "استلم أفضل مبلغ نقدي فوري بمجرد الاتفاق وقبل التحميل." },
    { title: "٤. التحميل والنقل المجاني", desc: "نحمل السكراب وننظف المكان بدون أي تكاليف عليك." }
  ] : [
    { title: "1. Contact & Inquiry", desc: "Call us or message on WhatsApp with details or photos of your scrap." },
    { title: "2. On-Site Inspection", desc: "Our team arrives at your location in Dammam for precise weighing." },
    { title: "3. Instant Cash Payment", desc: "Receive immediate top cash payment on the spot upon agreement." },
    { title: "4. Free Haulage & Removal", desc: "We load and transport everything without charging any extra fees." }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar dict={dict} lang={lang} />
      
      <main className="min-h-screen bg-slate-50 pt-20 pb-20">
        {/* ── Breadcrumbs ────────────────────────────────────────────── */}
        <div className="bg-white border-b border-slate-200 py-3">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 sm:text-sm">
              <Link href={`/${lang}` as any} className="hover:text-emerald-600 transition-colors">
                {dict.Navbar.links.services === "خدماتنا" ? "الرئيسية" : "Home"}
              </Link>
              <ChevronIcon className="h-4 w-4 text-slate-400" />
              <Link href={`/${lang}#services` as any} className="hover:text-emerald-600 transition-colors">
                {dict.Navbar.links.services}
              </Link>
              <ChevronIcon className="h-4 w-4 text-slate-400" />
              <span className="font-bold text-slate-800">{dictItem.title}</span>
            </nav>
          </div>
        </div>

        {/* ── Hero Banner ───────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src={serviceDetail.image}
              alt={dictItem.title}
              fill
              priority
              className="object-cover opacity-35 backdrop-blur-sm"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400 backdrop-blur-md sm:text-sm">
                <Sparkles className="h-4 w-4 text-emerald-400" />
                {dict.Navbar.logoScrap} {dict.Navbar.logoDammam} - Top Scrap Rates
              </span>
              <h1 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {dictItem.title}
              </h1>
              <p className="mt-4 text-base text-slate-300 sm:text-xl lg:text-2xl leading-relaxed">
                {dictItem.description}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/+966565642655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-emerald-600 hover:shadow-emerald-500/25"
                >
                  <MessageCircle className="h-5 w-5" />
                  {dict.Navbar.whatsapp}
                </a>
                <a
                  href="tel:+966565642655"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-6 py-3.5 text-base font-bold text-white border border-white/20 backdrop-blur-md transition-all hover:bg-white hover:text-slate-900"
                >
                  <Phone className="h-5 w-5" />
                  <span dir="ltr">+966565642655</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Content Grid ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            
            {/* Main Content Area */}
            <div className="space-y-12 lg:col-span-8">
              
              {/* Detailed Description */}
              <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
                <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  {isArabic ? `تفاصيل خدمة ${dictItem.title}` : `Overview of ${dictItem.title}`}
                </h2>
                <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                  {serviceDetail.longDescription[lang]}
                </p>
              </div>

              {/* Accepted Items */}
              <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl mb-6 flex items-center gap-3">
                  <CheckCircle2 className="h-7 w-7 text-emerald-500" />
                  {dict.Services.acceptedItemsTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceDetail.acceptedItems[lang].map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold text-xs">
                        ✓
                      </div>
                      <span className="font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl mb-6">
                  {dict.Services.whyChooseUs}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {serviceDetail.features[lang].map((feat: string, idx: number) => {
                    const featureIcons = [
                      <Banknote key={0} className="h-6 w-6 text-emerald-600" />,
                      <Truck key={1} className="h-6 w-6 text-emerald-600" />,
                      <ShieldCheck key={2} className="h-6 w-6 text-emerald-600" />,
                      <Scale key={3} className="h-6 w-6 text-emerald-600" />
                    ];
                    return (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                        <div className="rounded-xl bg-white p-3 shadow-sm border border-emerald-100">
                          {featureIcons[idx % featureIcons.length]}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-base">{feat}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Process Section */}
              <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-lg">
                <div className="mb-8 text-center sm:text-left rtl:sm:text-right">
                  <h3 className="text-2xl font-black text-white sm:text-3xl">
                    {dict.Services.processTitle}
                  </h3>
                  <p className="mt-2 text-slate-400">
                    {dict.Services.processSubtitle}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="rounded-2xl bg-slate-800/80 p-6 border border-slate-700/60 backdrop-blur-sm">
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                        Step {idx + 1}
                      </span>
                      <h4 className="mt-2 text-lg font-bold text-white">{step.title}</h4>
                      <p className="mt-2 text-sm text-slate-300">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {serviceDetail.faq[lang] && serviceDetail.faq[lang].length > 0 && (
                <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl mb-6 flex items-center gap-3">
                    <HelpCircle className="h-7 w-7 text-emerald-500" />
                    {isArabic ? "أسئلة شائعة حول الخدمة" : "Frequently Asked Questions"}
                  </h3>
                  <div className="space-y-4">
                    {serviceDetail.faq[lang].map((item, idx) => (
                      <div key={idx} className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
                        <h4 className="font-bold text-slate-900 text-lg">{item.question}</h4>
                        <p className="mt-2 text-slate-600">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Sticky Contact & Summary */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                
                {/* Contact Card */}
                <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-black tracking-tight">
                    {dict.Services.contactCtaTitle}
                  </h3>
                  <p className="mt-3 text-emerald-100 text-sm leading-relaxed">
                    {dict.Services.contactCtaSub}
                  </p>

                  <div className="mt-8 space-y-4">
                    <a
                      href="https://wa.me/+966565642655"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-bold text-emerald-700 shadow-md transition-all hover:bg-emerald-50 hover:shadow-lg"
                    >
                      <MessageCircle className="h-5 w-5 fill-emerald-600 text-emerald-600" />
                      <span>{dict.Navbar.whatsapp}</span>
                    </a>

                    <a
                      href="tel:+966565642655"
                      className="flex items-center justify-center gap-3 rounded-2xl border border-white/30 bg-emerald-800/40 px-6 py-4 font-bold text-white transition-all hover:bg-emerald-800/80"
                    >
                      <Phone className="h-5 w-5" />
                      <span dir="ltr">+966565642655</span>
                    </a>
                  </div>

                  <div className="mt-6 border-t border-white/20 pt-6 text-center text-xs font-medium text-emerald-100">
                    {isArabic ? "خدمة سريعة في الدمام، الخبر، والظهران" : "Fast Service across Dammam, Khobar & Dhahran"}
                  </div>
                </div>

                {/* Service Highlights Box */}
                <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-base mb-4">
                    {isArabic ? "خدماتنا المتاحة:" : "Available Coverage:"}
                  </h4>
                  <ul className="space-y-3 text-sm font-semibold text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      {isArabic ? "الدمام وحي الشاطئ والفيصلية" : "Dammam City & Suburbs"}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      {isArabic ? "الخبر والظهران والراكة" : "Khobar, Dhahran & Rakah"}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      {isArabic ? "القطيف والجبيل والمناطق المجاورة" : "Qatif, Jubail & Eastern Area"}
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ── Related Services Section ────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 border-t border-slate-200 pt-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">
              {dict.Services.relatedServices}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {otherServices.map((item: any, idx: number) => (
              <Link
                key={idx}
                href={`/${lang}/services/${item.slug}` as any}
                className="group rounded-3xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-bold text-emerald-600">
                  <span>{dict.Services.viewDetails}</span>
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer dict={dict} />
      <FloatingContacts dict={dict} />
    </>
  );
}
