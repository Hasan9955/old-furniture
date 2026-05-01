import { getDictionary } from "@/i18n/dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContacts from "@/components/FloatingWhatsApp";
import Image from "next/image";

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
              <article key={item.id} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
                <div className="md:flex">
                  <div className="relative aspect-[16/9] md:w-2/5 md:shrink-0 md:aspect-auto">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="p-8 md:w-3/5">
                    <time dateTime={item.date} className="text-sm font-semibold tracking-wide text-emerald-600">
                      {item.date}
                    </time>
                    <h2 className="mt-2 text-2xl font-bold text-slate-800">
                      {item.title}
                    </h2>
                    <div className="mt-4 prose prose-slate max-w-none text-slate-600">
                      <p>{item.content}</p>
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
