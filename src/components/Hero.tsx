import { MessageCircle, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[min(100dvh,720px)] items-center justify-center overflow-hidden py-16 sm:min-h-[80vh] sm:py-20 lg:min-h-[85vh]">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/75" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6 text-center sm:space-y-8">
          <h1 className="text-balance text-3xl font-black leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl xl:text-7xl">
            نشتري الأثاث المستعمل في{" "}
            <span className="block text-emerald-400 sm:inline">الدمام</span>{" "}
            بأفضل سعر
          </h1>
          <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-slate-200 drop-shadow sm:text-lg md:text-xl">
            نجيك لحد البيت ونشيل العفش بسرعة، ونشتري جميع أنواع الأثاث والأجهزة
            والمكيفات. تقييم منصف وكاش فوري بيدك!
          </p>

          <div className="flex flex-col items-stretch justify-center gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:pt-4">
            <a
              href="https://wa.me/+966561385512"
              className="inline-flex min-h-[48px] w-full max-w-md flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-bold text-white shadow-xl transition hover:bg-[#20bd5a] active:scale-[0.99] sm:w-auto sm:max-w-none sm:px-8 sm:py-4 sm:text-lg"
            >
              تواصل عبر واتساب
              <MessageCircle className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
            </a>
            <a
              href="tel:+966561385512"
              className="inline-flex min-h-[48px] w-full max-w-md flex-1 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-[0_0_20px_rgba(5,150,105,0.4)] transition hover:bg-emerald-500 active:scale-[0.99] sm:w-auto sm:max-w-none sm:px-8 sm:py-4 sm:text-lg"
            >
              <Phone className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
              اتصل الآن
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 pt-6 text-sm font-semibold text-emerald-100 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-10 sm:gap-y-2 sm:pt-8 sm:text-base">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              أفضل سعر بالسوق
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              استجابة سريعة
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              نجيك وين ما كنت
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
