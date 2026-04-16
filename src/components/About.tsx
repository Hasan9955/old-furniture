import { CheckCircle2, Clock, ThumbsUp, MapPin, Phone } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-slate-900 py-14 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-4 text-2xl font-black sm:mb-6 sm:text-3xl md:text-4xl">
              ليش تختارنا في <span className="text-emerald-400">الدمام؟</span>
            </h2>
            <p className="mb-6 text-base leading-relaxed text-slate-300 sm:mb-8 sm:text-lg md:text-xl">
              حنا متخصصين بشراء الأثاث المستعمل بالدمام والخبر والظهران. نقيم
              عفشك صح ونعطيك أفضل سعر، ونخلصك بسرعة وبدون أي مشاوير متعبة.
            </p>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4">
                <CheckCircle2 className="mt-0.5 h-7 w-7 shrink-0 text-emerald-400 sm:h-8 sm:w-8" />
                <div className="min-w-0">
                  <h3 className="mb-1 text-lg font-bold sm:text-xl">
                    أسعار ممتازة ترضيك
                  </h3>
                  <p className="text-sm text-slate-400 sm:text-base">
                    نعطيك تقييم عادل لجميع أنواع الأثاث والمكيفات والأجهزة.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <Clock className="mt-0.5 h-7 w-7 shrink-0 text-emerald-400 sm:h-8 sm:w-8" />
                <div className="min-w-0">
                  <h3 className="mb-1 text-lg font-bold sm:text-xl">
                    نجيك بنفس اليوم
                  </h3>
                  <p className="text-sm text-slate-400 sm:text-base">
                    بمجرد ما تدق علينا، نجيك للمعاينة ونعطيك حقك كاش بوقتها.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <ThumbsUp className="mt-0.5 h-7 w-7 shrink-0 text-emerald-400 sm:h-8 sm:w-8" />
                <div className="min-w-0">
                  <h3 className="mb-1 text-lg font-bold sm:text-xl">
                    فك ونقل العفش علينا
                  </h3>
                  <p className="text-sm text-slate-400 sm:text-base">
                    حنا نشيل العفش ونفكه مجاناً بدون ما تدفع ولا ريال.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 p-5 sm:rounded-3xl sm:p-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-emerald-500 opacity-10" />
            <h3 className="mb-6 text-xl font-bold sm:text-2xl">وين نخدمك؟</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-3 rounded-2xl bg-slate-700/50 p-3 text-base sm:p-4 sm:text-lg">
                <MapPin className="h-5 w-5 shrink-0 text-emerald-400 sm:h-6 sm:w-6" />
                الدمام (كل الأحياء)
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-slate-700/50 p-3 text-base sm:p-4 sm:text-lg">
                <MapPin className="h-5 w-5 shrink-0 text-emerald-400 sm:h-6 sm:w-6" />
                الخبر
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-slate-700/50 p-3 text-base sm:p-4 sm:text-lg">
                <MapPin className="h-5 w-5 shrink-0 text-emerald-400 sm:h-6 sm:w-6" />
                الظهران
              </li>
            </ul>

            <div className="mt-6 border-t border-slate-700 pt-6 sm:mt-8 sm:pt-8">
              <p className="mb-4 text-sm text-slate-400 sm:text-base">
                دق علينا الحين ومندوبنا يوصلك لمعاينة أثاثك مجاناً.
              </p>
              <a
                href="tel:+9660565642655"
                className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-base font-bold text-white transition-colors hover:bg-emerald-600 sm:py-4 sm:text-lg"
              >
                <Phone className="h-5 w-5 shrink-0" />
                اتصل الآن: <span dir="ltr">+9660565642655</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
