import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, 
  ChevronLeft, 
  Calendar, 
  Clock, 
  Share2, 
  MessageCircle, 
  Phone, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  BookOpen
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContacts from "@/components/FloatingWhatsApp";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateStaticParams() {
  const locales = ["ar", "en"];
  const ids = ["scrap-ac", "scrap-refrigerator", "scrap-copper", "scrap-furniture"];
  const params: { lang: string; id: string }[] = [];

  for (const lang of locales) {
    for (const id of ids) {
      params.push({ lang, id });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: 'ar' | 'en'; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  const isArabic = lang === "ar";
  const dict = await getDictionary(lang);
  const blogItem = dict.Blog.items.find((item: any) => item.id === id);

  if (!blogItem) {
    return {
      title: isArabic ? "المقال غير موجود" : "Blog Post Not Found",
    };
  }

  const title = `${blogItem.title} | ${dict.Navbar.logoScrap}${dict.Navbar.logoDammam}`;
  const description = blogItem.excerpt || blogItem.content.substring(0, 160);
  const canonicalUrl = `https://www.buyoldscrapdammam.com/${lang}/blog/${id}`;

  return {
    title,
    description,
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
        "en": `https://www.buyoldscrapdammam.com/en/blog/${id}`,
        "ar": `https://www.buyoldscrapdammam.com/ar/blog/${id}`,
        "x-default": `https://www.buyoldscrapdammam.com/en/blog/${id}`,
        "en-US": `https://www.buyoldscrapdammam.com/en/blog/${id}`,
        "ar-SA": `https://www.buyoldscrapdammam.com/ar/blog/${id}`,
      },
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ lang: 'ar' | 'en'; id: string }>;
}) {
  const { lang, id } = await params;
  const isArabic = lang === "ar";
  const dict = await getDictionary(lang);
  const blogItem = dict.Blog.items.find((item: any) => item.id === id);

  if (!blogItem) {
    notFound();
  }

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;
  const ChevronIcon = isArabic ? ChevronLeft : ChevronRight;

  // Filter other articles for recommendations
  const otherBlogs = dict.Blog.items.filter((item: any) => item.id !== id);

  return (
    <>
      <Navbar dict={dict} lang={lang} />

      <main className="min-h-screen bg-slate-50 pt-20 pb-20">
        {/* ── Breadcrumbs ────────────────────────────────────────────── */}
        <div className="bg-white border-b border-slate-200 py-3">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 sm:text-sm flex-wrap">
              <Link href={`/${lang}` as any} className="hover:text-emerald-600 transition-colors">
                {isArabic ? "الرئيسية" : "Home"}
              </Link>
              <ChevronIcon className="h-4 w-4 text-slate-400 shrink-0" />
              <Link href={`/${lang}/blog` as any} className="hover:text-emerald-600 transition-colors">
                {dict.Blog.mainTitle || (isArabic ? "المدونة" : "Blog")}
              </Link>
              <ChevronIcon className="h-4 w-4 text-slate-400 shrink-0" />
              <span className="font-bold text-slate-800 line-clamp-1">{blogItem.title}</span>
            </nav>
          </div>
        </div>
    
        {/* ── Article Header ───────────────────────────────────────── */}
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
          
          <div className="space-y-4 text-center sm:text-start">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-700">
              <BookOpen className="h-4 w-4" />
              {isArabic ? "مقالات ودليل السكراب" : "Scrap Guide & Insights"}
            </div>

            <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              {blogItem.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-slate-500 pt-2">
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="h-4 w-4 text-emerald-600" />
                {blogItem.date}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="h-4 w-4 text-emerald-600" />
                {isArabic ? "قراءة 3 دقائق" : "3 min read"}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-3xl bg-slate-200 shadow-lg">
            <Image
              src={blogItem.image}
              alt={blogItem.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>

          {/* Excerpt Box */}
          <div className="mt-8 rounded-2xl bg-emerald-50/70 border border-emerald-100 p-6 sm:p-8">
            <p className="text-lg font-bold text-slate-800 leading-relaxed italic">
              &quot;{blogItem.excerpt}&quot;
            </p>
          </div>

          {/* Main Article Content */}
          <div className="mt-8 rounded-3xl bg-white p-6 sm:p-10 shadow-sm border border-slate-200 leading-relaxed text-slate-700 text-lg space-y-6">
            <p>{blogItem.content}</p>

            <p>
              {isArabic
                ? "في مؤسستنا بالدمام، نحرص دائماً على تقديم أفضل الأسعار اليومية لجميع أنواع السكراب والمعادن والأجهزة الكهربائية التالفة. نضمن لك عملية وزن وتقييم دقيقة مع الدفع الكاش الفوري والتحميل المجاني بدون أي تكاليف إضافية."
                : "At our facility in Dammam, we always ensure offering the best daily rates for all types of scrap metals and damaged electrical appliances. We guarantee precise weighing, immediate cash payment, and free transport from your location."}
            </p>

            {/* Key Takeaways Callout */}
            <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 mt-8">
              <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                {isArabic ? "أهم المزايا عند بيع السكراب معنا:" : "Why Sell Your Scrap to Us?"}
              </h3>
              <ul className="space-y-3 text-base text-slate-300 font-medium">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                  {isArabic ? "دفع نقدي كاش فوري في موقعك" : "Instant cash payment at your location"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                  {isArabic ? "فحص ووزن دقيق بالميزان المعتمد" : "Accurate digital scale weighing"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                  {isArabic ? "فك وتحميل ونقل مجاني بدون أي رسوم" : "Free dismantling, loading, and haulage"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                  {isArabic ? "تغطية شاملة: الدمام، الخبر، والظهران" : "Coverage across Dammam, Khobar, and Dhahran"}
                </li>
              </ul>
            </div>

            {/* Contact Action Inside Article */}
            <div className="mt-10 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white text-center sm:text-start flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold">
                  {isArabic ? "تبي تبيع السكراب بأفضل سعر اليوم؟" : "Want to Sell Your Scrap Today?"}
                </h4>
                <p className="text-sm text-emerald-100 mt-1">
                  {isArabic ? "تواصل معنا الحين لمعاينة وتقييم مجاني" : "Contact us now for a free evaluation and instant quote"}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="https://wa.me/+966565642655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-700 shadow-md transition-all hover:bg-emerald-50"
                >
                  <MessageCircle className="h-4 w-4" />
                  {dict.Navbar.whatsapp}
                </a>
                <a
                  href="tel:+966565642655"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-800/50 px-5 py-3 text-sm font-bold text-white border border-white/20 transition-all hover:bg-emerald-800"
                >
                  <Phone className="h-4 w-4" />
                  <span dir="ltr">+966565642655</span>
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* ── Related Articles Section ───────────────────────────── */}
        {otherBlogs.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 border-t border-slate-200 pt-16">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-extrabold text-slate-900">
                {isArabic ? "مقالات أخرى قد تهمك" : "Other Articles You Might Like"}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {otherBlogs.slice(0, 3).map((item: any) => (
                <div
                  key={item.id}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl hover:ring-emerald-200"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <time dateTime={item.date} className="mb-2 text-sm font-medium text-emerald-600">
                      {item.date}
                    </time>
                    <h3 className="mb-3 text-xl font-bold leading-tight text-slate-800 group-hover:text-emerald-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mb-6 flex-1 text-slate-600 line-clamp-3 text-sm">
                      {item.excerpt}
                    </p>
                    <Link
                      href={`/${lang}/blog/${item.id}` as any}
                      className="inline-flex items-center gap-2 font-semibold text-emerald-600 hover:text-emerald-700"
                    >
                      {dict.Blog.readMore}
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer dict={dict} />
      <FloatingContacts dict={dict} />
    </>
  );
}
