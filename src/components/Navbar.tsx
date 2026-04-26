"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, MessageCircle, Phone, X, Globe, ChevronDown, Check } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar({ dict, lang }: { dict: any; lang: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { href: `/${lang}#house-shifting`, label: dict.Navbar.links.houseShifting },
    { href: `/${lang}#services`, label: dict.Navbar.links.services },
    { href: `/${lang}#about`, label: dict.Navbar.links.about },
    { href: `/${lang}#contact`, label: dict.Navbar.links.contact },
  ];

  const languages = [
    { code: "ar", label: "العربية", flag: "🇸🇦" },
    { code: "en", label: "English", flag: "🇬🇧" },
  ];

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLangSelect(code: string) {
    if (code === lang) return;
    setLangOpen(false);

    // Replace the current locale in the path
    const pathParts = pathname.split('/');
    pathParts[1] = code;
    const newPath = pathParts.join('/');

    router.push(newPath);
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-lg transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3 sm:h-20">
          {/* ── Logo ─────────────────────────────────────────────── */}
          <Link
            href={`/${lang}` as any}
            className="shrink-0 text-xl font-black tracking-tight text-emerald-600 sm:text-2xl md:text-3xl"
            onClick={() => setMobileOpen(false)}
          >
            {dict.Navbar.logoScrap}<span className="text-amber-500">{dict.Navbar.logoDammam}</span>
          </Link>

          {/* ── Desktop Links ─────────────────────────────────────── */}
          <div className="hidden items-center gap-8 text-lg font-semibold text-slate-700 md:flex">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href as any}
                className="transition-colors hover:text-emerald-600"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* ── Right-side Actions ───────────────────────────────── */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Phone (desktop) */}
            <a
              href="tel:+966565642655"
              className="hidden items-center gap-2 font-bold text-slate-700 transition-colors hover:text-emerald-600 lg:flex"
            >
              <Phone className="h-5 w-5 shrink-0" />
              <span dir="ltr" className="text-sm xl:text-base">
                +966565642655
              </span>
            </a>

            {/* WhatsApp (desktop) */}
            <a
              href="https://wa.me/+966565642655"
              className="hidden items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg sm:flex"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              <span>{dict.Navbar.whatsapp}</span>
            </a>

            {/* ── Language Dropdown ─────────────────────────────── */}
            <div ref={langRef} className="relative">
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                aria-expanded={langOpen}
                aria-haspopup="listbox"
                className="flex min-h-10 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <Globe className="h-4 w-4 shrink-0 text-emerald-500" />
                <span className="hidden sm:inline">{currentLang.flag}</span>
                <span className="hidden sm:inline">{currentLang.label}</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 shrink-0 transition-transform ${langOpen ? "rotate-180" : ""}`}
                />
              </button>

              {langOpen && (
                <div
                  role="listbox"
                  className="absolute end-0 z-50 mt-2 w-40 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl ring-1 ring-black/5"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      role="option"
                      aria-selected={lang === l.code}
                      type="button"
                      onClick={() => handleLangSelect(l.code)}
                      className={`flex w-full items-center gap-2.5 px-4 py-3 text-sm font-semibold transition-colors
                        ${lang === l.code
                          ? "bg-emerald-50 text-emerald-700"
                          : "text-slate-700 hover:bg-slate-50"
                        }`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span className="flex-1 text-start">{l.label}</span>
                      {lang === l.code && (
                        <Check className="h-4 w-4 text-emerald-500" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition hover:bg-slate-50 md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────────────── */}
      <div
        id="mobile-nav"
        className={`border-t border-slate-100 bg-white md:hidden ${mobileOpen ? "block" : "hidden"}`}
      >
        <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href as any}
              className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-800 transition hover:bg-emerald-50 hover:text-emerald-700"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}

          {/* ── Mobile Language Switcher ─────────────────────── */}
          <div className="pt-2">
            <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
              {dict.Navbar.language}
            </p>
            <div className="flex gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => {
                    handleLangSelect(l.code);
                    setMobileOpen(false);
                  }}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition
                    ${lang === l.code
                      ? "bg-emerald-500 text-white shadow-md"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50"
                    }`}
                >
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                  {lang === l.code && <Check className="h-4 w-4" />}
                </button>
              ))}
            </div>
          </div>

          {/* Phone */}
          <a
            href="tel:+966565642655"
            className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3 font-bold text-slate-800"
            dir="ltr"
          >
            <Phone className="h-5 w-5 shrink-0" />
            +966565642655
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+966565642655"
            className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 font-bold text-white"
            onClick={() => setMobileOpen(false)}
          >
            <MessageCircle className="h-5 w-5 shrink-0" />
            {dict.Navbar.whatsapp}
          </a>
        </div>
      </div>
    </nav>
  );
}