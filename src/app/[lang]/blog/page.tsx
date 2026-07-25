import { getDictionary } from "@/i18n/dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContacts from "@/components/FloatingWhatsApp";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: 'ar' | 'en' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return {
    title: `${dict.Blog?.mainTitle || 'Blog'} | ${dict.Navbar.logoScrap}${dict.Navbar.logoDammam}`,
    description: dict.Blog?.mainDesc || 'Read our latest articles about scrap.',
  };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: 'ar' | 'en' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const blogData = dict.Blog;

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      <main className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-black tracking-tight text-slate-800 sm:text-5xl">
              {blogData.mainTitle}
            </h1>
            <p className="mt-4 text-xl text-slate-600">
              {blogData.mainDesc}
            </p>
          </div>

          <div className="space-y-12">
            {blogData.items.map((item: any) => (
              <article key={item.id} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-emerald-300">
                <div className="md:flex">
                  <Link href={`/${lang}/blog/${item.id}` as any} className="relative aspect-[16/9] md:w-2/5 md:shrink-0 md:aspect-auto block overflow-hidden bg-slate-100 min-h-[220px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </Link>
                  <div className="flex flex-col justify-between p-6 sm:p-8 md:w-3/5">
                    <div>
                      <time dateTime={item.date} className="text-sm font-semibold tracking-wide text-emerald-600">
                        {item.date}
                      </time>
                      <h2 className="mt-2 text-2xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                        <Link href={`/${lang}/blog/${item.id}` as any}>
                          {item.title}
                        </Link>
                      </h2>
                      <p className="mt-4 text-slate-600 line-clamp-3">
                        {item.excerpt || item.content}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/${lang}/blog/${item.id}` as any}
                        className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-700"
                      >
                        <span>{blogData.readMore || (lang === "ar" ? "اقرأ المقال الكامل" : "Read Full Article")}</span>
                        <span className="rtl:rotate-180">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer dict={dict} />
      <FloatingContacts dict={dict} />
    </>
  );
}
