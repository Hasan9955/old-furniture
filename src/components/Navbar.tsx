"use client";

import { useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "#house-shifting", label: "نقل المنازل" },
  { href: "#services", label: "خدماتنا" },
  { href: "#about", label: "من نحن" },
  { href: "#contact", label: "اتصل بنا" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-lg transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3 sm:h-20">
          <Link
            href="/"
            className="shrink-0 text-xl font-black tracking-tight text-emerald-600 sm:text-2xl md:text-3xl"
            onClick={() => setOpen(false)}
          >
            أثاث<span className="text-amber-500">الدمام</span>
          </Link>

          <div className="hidden items-center gap-8 text-lg font-semibold text-slate-700 md:flex">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-emerald-600"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <a
              href="tel:+966561385512"
              className="hidden items-center gap-2 font-bold text-slate-700 transition-colors hover:text-emerald-600 lg:flex"
            >
              <Phone className="h-5 w-5 shrink-0" />
              <span dir="ltr" className="text-sm xl:text-base">
                +966561385512
              </span>
            </a>
            <a
              href="https://wa.me/+966561385512"
              className="hidden items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg sm:flex"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              <span>واتساب</span>
            </a>

            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition hover:bg-slate-50 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-slate-100 bg-white md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-800 transition hover:bg-emerald-50 hover:text-emerald-700"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:+966561385512"
            className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3 font-bold text-slate-800"
            dir="ltr"
          >
            <Phone className="h-5 w-5 shrink-0" />
            +966561385512
          </a>
          <a
            href="https://wa.me/+966561385512"
            className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 font-bold text-white"
            onClick={() => setOpen(false)}
          >
            <MessageCircle className="h-5 w-5 shrink-0" />
            واتساب
          </a>
        </div>
      </div>
    </nav>
  );
}
