"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({ dict }: { dict: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = dict.FAQ.items;

  return (
    <section className="bg-emerald-50 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="mb-3 text-2xl font-black text-slate-900 sm:text-3xl md:text-4xl">
            {dict.FAQ.title}
          </h2>
          <p className="text-base text-slate-600 sm:text-lg md:text-xl">
            {dict.FAQ.description}
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq: any, index: number) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition-all"
            >
              <button
                type="button"
                className="flex min-h-[52px] w-full items-center justify-between gap-3 px-4 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 sm:px-6 sm:py-5"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-bold text-slate-900 sm:text-lg text-start">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-emerald-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="border-t border-slate-100 px-4 pb-4 pt-2 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-5 sm:text-base md:text-lg text-start">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
