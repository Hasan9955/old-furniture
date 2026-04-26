import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

export default function Footer({ dict }: { dict: any }) {
  return (
    <footer id="contact" className="scroll-mt-24 bg-slate-950 pb-8 pt-12 text-slate-300 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-10 md:mb-12 md:grid-cols-3 md:gap-12">
          <div>
            <Link
              href={"/ar" as any}
              className="mb-4 block text-2xl font-black tracking-tight text-emerald-500 sm:mb-6 sm:text-3xl"
            >
              {dict.Navbar.logoScrap}<span className="text-amber-500">{dict.Navbar.logoDammam}</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              {dict.Footer.desc}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white sm:mb-6 sm:text-xl">
              {dict.Footer.quickLinks}
            </h4>
            <ul className="space-y-3 text-sm sm:space-y-4 sm:text-base">
              <li>
                <Link href={"#house-shifting" as any} className="transition-colors hover:text-emerald-400">
                  {dict.Navbar.links.houseShifting}
                </Link>
              </li>
              <li>
                <Link href={"#services" as any} className="transition-colors hover:text-emerald-400">
                  {dict.Navbar.links.services}
                </Link>
              </li>
              <li>
                <Link href={"#about" as any} className="transition-colors hover:text-emerald-400">
                  {dict.Navbar.links.about}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white sm:mb-6 sm:text-xl">
              {dict.Footer.contactUs}
            </h4>
            <div className="space-y-3 text-sm sm:space-y-4 sm:text-base">
              <a href="tel:+966565642655" className="flex items-center gap-3 transition-colors hover:text-emerald-400">
                <Phone className="h-5 w-5 shrink-0 text-emerald-500" />
                <span dir="ltr">+966565642655</span>
              </a>
              <a href="https://wa.me/+966565642655" className="flex items-center gap-3 transition-colors hover:text-emerald-400">
                <MessageCircle className="h-5 w-5 shrink-0 text-emerald-500" />
                {dict.Navbar.whatsapp}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left sm:text-sm">
          <p>
            {dict.Footer.rights} &copy; {new Date().getFullYear()}
            <span> - </span> {dict.Navbar.logoScrap}{dict.Navbar.logoDammam}
          </p>
          <p>{dict.Footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
