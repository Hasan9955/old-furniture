import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-slate-950 pb-8 pt-12 text-slate-300 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-10 md:mb-12 md:grid-cols-3 md:gap-12">
          <div>
            <Link
              href="/"
              className="mb-4 block text-2xl font-black tracking-tight text-emerald-500 sm:mb-6 sm:text-3xl"
            >
              
         سكراب<span className="text-amber-500">الدمام</span>
              {/* أثاث<span className="text-amber-500">الدمام</span> */}
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              أفضل محل شراء أثاث مستعمل في الدمام والمنطقة الشرقية. نعطيك أفضل
              الأسعار ونشيل العفش بسرعة وبدون تعب.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white sm:mb-6 sm:text-xl">
              روابط سريعة
            </h4>
            <ul className="space-y-3 text-sm sm:space-y-4 sm:text-base">
              <li>
                <Link
                  href="#house-shifting"
                  className="transition-colors hover:text-emerald-400"
                >
                  نقل المنازل
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="transition-colors hover:text-emerald-400"
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="transition-colors hover:text-emerald-400"
                >
                  ليش تختارنا؟
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white sm:mb-6 sm:text-xl">
              تواصل معنا
            </h4>
            <div className="space-y-3 text-sm sm:space-y-4 sm:text-base">
              <a
                href="tel:+9660565642655"
                className="flex items-center gap-3 transition-colors hover:text-emerald-400"
              >
                <Phone className="h-5 w-5 shrink-0 text-emerald-500" />
                <span dir="ltr">+9660565642655</span>
              </a>
              <a
                href="https://wa.me/+9660565642655"
                className="flex items-center gap-3 transition-colors hover:text-emerald-400"
              >
                <MessageCircle className="h-5 w-5 shrink-0 text-emerald-500" />
                تواصل عبر واتساب
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left sm:text-sm">
          <p>
  جميع الحقوق محفوظة &copy; {new Date().getFullYear()} 
  <span> - </span> سكراب الدمام   
</p>
          <p>تصميم وتطوير بكل ❤️</p>
        </div>
      </div>
    </footer>
  );
}
