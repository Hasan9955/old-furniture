import Image from "next/image";
import {
  Truck,
  Package,
  Wrench,
  ShieldCheck,
  Clock,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

export default function HouseShifting() {
  const waHref =
    "https://wa.me/+966561385512?text=" +
    encodeURIComponent("السلام عليكم، أبي أستفسر عن خدمة نقل العفش / نقل المنزل.");

  const features = [
    {
      title: "فك وتركيب محترف",
      desc: "فريق يفك ويركب غرف النوم والمطابخ والمكيفات بدون خدوش.",
      icon: Wrench,
    },
    {
      title: "تغليف وتأمين",
      desc: "تغليف للزجاج والأجهزة الحساسة حتى يوصل عفشك سليم.",
      icon: Package,
    },
    {
      title: "نقل بسيارات مجهزة",
      desc: "سيارات مغطاة ومناسبة لحجم العفش داخل الدمام وخارجها.",
      icon: Truck,
    },
    {
      title: "مواعيد واضحة",
      desc: "نحدد معك الوقت ونلتزم بالوصول والتسليم قدر الإمكان.",
      icon: Clock,
    },
  ];

  return (
    <section
      id="house-shifting"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-amber-50 via-white to-slate-50 py-14 sm:py-20 lg:py-24"
      aria-labelledby="house-shifting-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
      >
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-200 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-emerald-200 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center gap-3 text-center sm:mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100/80 px-3 py-1 text-sm font-bold text-amber-900 shadow-sm">
            <Sparkles className="h-4 w-4 shrink-0 text-amber-600" />
            خدمة مميزة لعملائنا
          </span>
          <h2
            id="house-shifting-heading"
            className="max-w-3xl text-2xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            نقل منازل وعفش{" "}
            <span className="text-emerald-600">باحتراف وأمان</span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            سواء تبي تنتقل من حي لحي أو من الدمام لمدينة ثانية، نجهز لك فريق
            نقل، تغليف، وفك وتركيب — ونسوّي لك عرض سعر واضح قبل ما نتحرك.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-amber-200/80 bg-white shadow-xl shadow-amber-900/5 sm:rounded-3xl">
          <div className="grid lg:grid-cols-2 lg:items-stretch">
            <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1400"
                alt="شاحنة نقل عفش ومنزل جاهز للتسليم"
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-slate-900/20 lg:bg-gradient-to-l lg:from-transparent lg:via-slate-900/25 lg:to-slate-900/70" />
              <div className="absolute bottom-4 right-4 left-4 flex flex-wrap items-center gap-2 sm:bottom-6 sm:right-6 sm:left-6">
                <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-900 shadow-md backdrop-blur sm:text-sm">
                  نقل منازل · شقق · مكاتب
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-bold text-white shadow-md sm:text-sm">
                  <ShieldCheck className="h-4 w-4 shrink-0" />
                  عناية بعفشك
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6 p-5 sm:p-8 lg:p-10">
              <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {features.map(({ title, desc, icon: Icon }) => (
                  <li
                    key={title}
                    className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-colors hover:border-emerald-200 hover:bg-emerald-50/50"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/25">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0 text-right">
                      <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                        {title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={waHref}
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-base font-bold text-white shadow-lg transition hover:bg-[#20bd5a] hover:shadow-xl active:scale-[0.98] sm:min-w-[200px] sm:flex-none"
                >
                  اطلب عرض سعر واتساب
                  <MessageCircle className="h-5 w-5 shrink-0" />
                </a>
                <a
                  href="tel:+966561385512"
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full border-2 border-emerald-600 bg-white px-5 py-3 text-base font-bold text-emerald-700 transition hover:bg-emerald-50 active:scale-[0.98] sm:min-w-[180px] sm:flex-none"
                >
                  <Phone className="h-5 w-5 shrink-0" />
                  اتصل الآن
                </a>
              </div>
              <p className="text-center text-xs text-slate-500 sm:text-sm">
                اذكر نوع العفش والحي والدور تقريباً عشان نقدر نعطيك تقدير أوضح.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
