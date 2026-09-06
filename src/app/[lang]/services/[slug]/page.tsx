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
  Sparkles,
  MapPin
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

  const title = serviceDetail.seoTitle?.[lang] || (isArabic
    ? `${dictItem.title} بالدمام | أفضل سعر وكاش فوري`
    : `${dictItem.title} in Dammam | Best Price & Instant Cash`);

  const description = serviceDetail.metaDescription?.[lang] || serviceDetail.longDescription[lang] || dictItem.description;
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
        "en": `https://www.buyoldscrapdammam.com/en/services/${slug}`,
        "ar": `https://www.buyoldscrapdammam.com/ar/services/${slug}`,
        "x-default": `https://www.buyoldscrapdammam.com/en/services/${slug}`,
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

  // Structured Data (JSON-LD) for Service
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceDetail.h1Title?.[lang] || dictItem.title,
    "description": serviceDetail.metaDescription?.[lang] || serviceDetail.longDescription[lang],
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

  // Structured Data (JSON-LD) for FAQ
  const faqJsonLd = serviceDetail.faq[lang]?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceDetail.faq[lang].map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  const processSteps = serviceDetail.processSteps?.[lang] || (isArabic ? [
    { title: "١. التواصل والاستفسار", desc: "تواصل معنا عبر الاتصال أو الواتساب وأرسل صور الكمية." },
    { title: "٢. الفحص والوزن الميداني", desc: "ينزل فريقنا لموقعك بالدمام بفحص ويوزن السكراب بدقة." },
    { title: "٣. دفع الكاش الفوري", desc: "استلم أفضل مبلغ نقدي فوري بمجرد الاتفاق وقبل التحميل." },
    { title: "٤. التحميل والنقل المجاني", desc: "نحمل السكراب وننظف المكان بدون أي تكاليف عليك." }
  ] : [
    { title: "1. Contact & Inquiry", desc: "Call us or message on WhatsApp with details or photos of your scrap." },
    { title: "2. On-Site Inspection", desc: "Our team arrives at your location in Dammam for precise weighing." },
    { title: "3. Instant Cash Payment", desc: "Receive immediate top cash payment on the spot upon agreement." },
    { title: "4. Free Haulage & Removal", desc: "We load and transport everything without charging any extra fees." }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
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
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400 backdrop-blur-md sm:text-sm">
                <Sparkles className="h-4 w-4 text-emerald-400" />
                {dict.Navbar.logoScrap} {dict.Navbar.logoDammam} - Top Scrap Rates
              </span>
              <h1 className="mt-6 text-2xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight sm:leading-tight">
                {serviceDetail.h1Title?.[lang] || dictItem.title}
              </h1>
              <p className="mt-4 text-base text-slate-300 sm:text-xl lg:text-2xl leading-relaxed">
                {serviceDetail.introParagraph?.[lang] || serviceDetail.metaDescription?.[lang] || dictItem.description}
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
              
              {/* Coverage Section (when present) */}
              {serviceDetail.coverageSection && (
                <section className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
                  <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl flex items-center gap-3">
                    <MapPin className="h-7 w-7 text-emerald-600 shrink-0" />
                    {serviceDetail.coverageSection.title[lang]}
                  </h2>
                  <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                    {serviceDetail.coverageSection.intro[lang]}
                  </p>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceDetail.coverageSection.items[lang].map((city, idx) => (
                      <div key={idx} className="flex items-center gap-3 rounded-2xl bg-emerald-50/60 px-4 py-3 border border-emerald-100/80">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xs">
                          •
                        </span>
                        <span className="font-bold text-slate-800 text-base">{city}</span>
                      </div>
                    ))}
                  </div>
                  {serviceDetail.coverageSection.footer?.[lang] && (
                    <p className="mt-6 text-slate-700 text-base border-t border-slate-100 pt-4 font-medium leading-relaxed">
                      {serviceDetail.coverageSection.footer[lang]}
                    </p>
                  )}
                </section>
              )}

              {/* Detailed Description (for general services without custom coverage section) */}
              {!serviceDetail.coverageSection && (
                <section className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
                  <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    {serviceDetail.overviewTitle?.[lang] || (isArabic ? `تفاصيل خدمة ${dictItem.title}` : `Overview of ${dictItem.title}`)}
                  </h2>
                  <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                    {serviceDetail.longDescription[lang]}
                  </p>
                </section>
              )}

              {/* Accepted Items */}
              <section className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl mb-4 flex items-center gap-3">
                  <CheckCircle2 className="h-7 w-7 text-emerald-500 shrink-0" />
                  {serviceDetail.acceptedItemsTitle?.[lang] || dict.Services.acceptedItemsTitle}
                </h2>
                {serviceDetail.acceptedItemsIntro?.[lang] && (
                  <p className="text-slate-600 text-base mb-6 leading-relaxed">
                    {serviceDetail.acceptedItemsIntro[lang]}
                  </p>
                )}
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
                {serviceDetail.acceptedItemsFooter?.[lang] && (
                  <p className="mt-6 text-slate-600 text-base border-t border-slate-100 pt-4 font-medium leading-relaxed">
                    {serviceDetail.acceptedItemsFooter[lang]}
                  </p>
                )}
              </section>

              {/* Why Choose Us / Trusted Buyer */}
              <section className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl mb-6">
                  {serviceDetail.featuresTitle?.[lang] || (isArabic ? "لماذا تختارنا؟" : "Why Choose Us")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {serviceDetail.features[lang].map((feat: string, idx: number) => {
                    const featureIcons = [
                      <Banknote key={0} className="h-6 w-6 text-emerald-600" />,
                      <Truck key={1} className="h-6 w-6 text-emerald-600" />,
                      <ShieldCheck key={2} className="h-6 w-6 text-emerald-600" />,
                      <Scale key={3} className="h-6 w-6 text-emerald-600" />
                    ];
                    
                    // Format features if they contain delimiters like " — ", " – ", or ": "
                    let titlePart = "";
                    let bodyPart = feat;
                    if (feat.includes(" — ")) {
                      const parts = feat.split(" — ");
                      titlePart = parts[0];
                      bodyPart = parts.slice(1).join(" — ");
                    } else if (feat.includes(" – ")) {
                      const parts = feat.split(" – ");
                      titlePart = parts[0];
                      bodyPart = parts.slice(1).join(" – ");
                    } else if (feat.includes(": ")) {
                      const parts = feat.split(": ");
                      titlePart = parts[0];
                      bodyPart = parts.slice(1).join(": ");
                    }

                    return (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                        <div className="rounded-xl bg-white p-3 shadow-sm border border-emerald-100 shrink-0">
                          {featureIcons[idx % featureIcons.length]}
                        </div>
                        <div>
                          {titlePart ? (
                            <>
                              <p className="font-bold text-slate-900 text-base">{titlePart}</p>
                              <p className="text-slate-600 text-sm mt-1">{bodyPart}</p>
                            </>
                          ) : (
                            <p className="font-bold text-slate-800 text-base">{feat}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Process Section */}
              <section className="rounded-3xl bg-slate-900 p-8 text-white shadow-lg">
                <div className="mb-8 text-center sm:text-left rtl:sm:text-right">
                  <h2 className="text-2xl font-black text-white sm:text-3xl">
                    {serviceDetail.processTitle?.[lang] || (isArabic ? "كيف تعمل خدمتنا؟" : "How It Works")}
                  </h2>
                  <p className="mt-2 text-slate-400">
                    {dict.Services.processSubtitle}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="rounded-2xl bg-slate-800/80 p-6 border border-slate-700/60 backdrop-blur-sm">
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                        {isArabic ? `الخطوة ${idx + 1}` : `Step ${idx + 1}`}
                      </span>
                      <h4 className="mt-2 text-lg font-bold text-white">{step.title}</h4>
                      <p className="mt-2 text-sm text-slate-300">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pricing Section (when present) */}
              {serviceDetail.pricingSection && (
                <section className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
                  <h2 className="text-xl font-bold text-slate-900 sm:text-2xl mb-4">
                    {serviceDetail.pricingSection.title[lang]}
                  </h2>
                  {serviceDetail.pricingSection.intro?.[lang] && (
                    <p className="text-slate-600 text-base mb-6 leading-relaxed">
                      {serviceDetail.pricingSection.intro[lang]}
                    </p>
                  )}
                  {serviceDetail.pricingSection.items?.[lang] && serviceDetail.pricingSection.items[lang].length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {serviceDetail.pricingSection.items[lang].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs">
                            ✓
                          </span>
                          <span className="font-semibold text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {serviceDetail.pricingSection.paragraphs?.[lang] && serviceDetail.pricingSection.paragraphs[lang].length > 0 && (
                    <div className="space-y-4">
                      {serviceDetail.pricingSection.paragraphs[lang].map((para, idx) => {
                        const [title, ...rest] = para.includes(": ") ? para.split(": ") : ["", para];
                        return (
                          <div key={idx} className="rounded-2xl bg-slate-50 p-5 border border-slate-100">
                            {title ? (
                              <>
                                <h3 className="font-bold text-slate-900 text-base sm:text-lg">{title}:</h3>
                                <p className="text-slate-600 text-base mt-1 leading-relaxed">{rest.join(": ")}</p>
                              </>
                            ) : (
                              <p className="text-slate-600 text-base leading-relaxed">{para}</p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {serviceDetail.pricingSection.footer?.[lang] && (
                    <p className="mt-6 text-slate-700 text-base border-t border-slate-100 pt-4 font-semibold leading-relaxed">
                      {serviceDetail.pricingSection.footer[lang]}
                    </p>
                  )}
                </section>
              )}

              {/* About Service / Experience Box */}
              {serviceDetail.aboutService?.[lang] && (
                <section className="rounded-3xl bg-emerald-50 border border-emerald-200/60 p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-emerald-950 sm:text-2xl mb-3">
                    {isArabic ? "عن خدمتنا في الدمام" : "About Our Service"}
                  </h3>
                  <p className="text-emerald-900 text-base sm:text-lg leading-relaxed font-medium">
                    {serviceDetail.aboutService[lang]}
                  </p>
                </section>
              )}

              {/* FAQs */}
              {serviceDetail.faq[lang] && serviceDetail.faq[lang].length > 0 && (
                <section className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
                  <h2 className="text-xl font-bold text-slate-900 sm:text-2xl mb-6 flex items-center gap-3">
                    <HelpCircle className="h-7 w-7 text-emerald-500 shrink-0" />
                    {serviceDetail.faqTitle?.[lang] || (isArabic ? "الأسئلة الشائعة" : "Frequently Asked Questions")}
                  </h2>
                  <div className="space-y-4">
                    {serviceDetail.faq[lang].map((item, idx) => (
                      <div key={idx} className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
                        <h3 className="font-bold text-slate-900 text-lg sm:text-xl flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                          {item.question}
                        </h3>
                        <p className="mt-2 text-slate-600 leading-relaxed text-base">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Closing CTA */}
              {serviceDetail.closingCta?.[lang] && (
                <section className="rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 p-8 text-white shadow-xl">
                  <div className="text-center sm:text-left rtl:sm:text-right">
                    <h3 className="text-xl sm:text-2xl font-black leading-snug">
                      {serviceDetail.closingCta[lang]}
                    </h3>
                    <div className="mt-6 flex flex-wrap items-center justify-start gap-4">
                      <a
                        href="https://wa.me/+966565642655"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-base font-bold text-rose-700 shadow-lg transition-all hover:bg-rose-50 hover:scale-105"
                      >
                        <MessageCircle className="h-5 w-5 fill-rose-600 text-rose-600" />
                        <span>{dict.Navbar.whatsapp}</span>
                      </a>
                      <a
                        href="tel:+966565642655"
                        className="inline-flex items-center gap-2 rounded-2xl bg-white/20 px-6 py-3.5 text-base font-bold text-white border border-white/30 backdrop-blur-md transition-all hover:bg-white hover:text-rose-900"
                      >
                        <Phone className="h-5 w-5" />
                        <span dir="ltr">+966565642655</span>
                      </a>
                    </div>
                  </div>
                </section>
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
