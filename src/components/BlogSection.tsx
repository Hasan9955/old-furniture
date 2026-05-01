"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function BlogSection({ dict, lang }: { dict: any; lang: string }) {
  const isRtl = lang === "ar";
  const blogData = dict.Blog;

  return (
    <section id="blog" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row md:mb-16">
          <div className="text-center sm:text-start">
            <h2 className="text-3xl font-black tracking-tight text-slate-800 sm:text-4xl">
              {blogData.titlePart1}
              <span className="text-emerald-600">{blogData.titlePart2}</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              {blogData.description}
            </p>
          </div>
          <Link
            href={`/${lang}/blog` as any}
            className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-emerald-600 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-emerald-50 hover:ring-emerald-300"
          >
            <span>{blogData.moreBlogs}</span>
            {isRtl ? (
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            )}
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {blogData.items.slice(0, 4).map((item: any) => (
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <time dateTime={item.date} className="mb-2 text-sm font-medium text-emerald-600">
                  {item.date}
                </time>
                <h3 className="mb-3 text-xl font-bold leading-tight text-slate-800 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mb-6 flex-1 text-slate-600 line-clamp-3">
                  {item.excerpt}
                </p>
                <Link
                  href={`/${lang}/blog` as any}
                  className="inline-flex items-center gap-2 font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  {blogData.readMore}
                  {isRtl ? (
                    <ArrowLeft className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
