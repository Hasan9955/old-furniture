import Image from "next/image";
import Link from "next/link";
import { Bed, Tv, Coffee, Cpu, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "شراء الأثاث المنزلي المستعمل",
      description:
        "نشتري كل أنواع الأثاث المنزلي والمكتبي، من غرف نوم ومجالس وطاولات، ونعطيك حقها وزيادة.",
      icon: <Bed className="h-6 w-6 text-emerald-600" />,
      image:
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=600",
      keywords: "شراء أثاث مستعمل الدمام",
    },
    {
      title: "شراء الأجهزة الكهربائية",
      description:
        "نشتري الثلاجات، الغسالات، والشاشات والمكيفات المستعملة، ونقدم لك تقييم عالي يرضيك.",
      icon: <Tv className="h-6 w-6 text-emerald-600" />,
      image:
        "https://plus.unsplash.com/premium_photo-1664371206019-a82cb8dabb15?auto=format&fit=crop&q=80&w=600",
      keywords: "شراء أجهزة مستعملة الدمام",
    },
    {
      title: "شراء المطابخ والأدوات المنزلية",
      description:
        "عندك مطبخ أو أدوات منزلية تبي تبيعها؟ حنا نشتريها منك بأفضل أسعار السوق بدون ما تبخس حقها.",
      icon: <Coffee className="h-6 w-6 text-emerald-600" />,
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
      keywords: "شراء مطابخ وأدوات منزلية",
    },
    {
      title: "شراء الألمنيوم والخردة",
      description:
        "نشتري خردة الألمنيوم والنوافذ والأبواب القديمة. نستلمها منك من مكانك وبأسعار ممتازة.",
      icon: <Cpu className="h-6 w-6 text-emerald-600" />,
      image:
        "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=600",
      keywords: "شراء خردة الألمنيوم الدمام",
    },
  ];

  return (
    <section id="services" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <h2 className="mb-4 text-2xl font-black text-slate-900 sm:text-3xl md:text-4xl">
            خدماتنا <span className="text-emerald-600">المتكاملة</span>
          </h2>
          <p className="text-base text-slate-600 sm:text-lg md:text-xl">
            نغطي احتياجاتك في بيع الأثاث والأجهزة بأسعار تنافسية وخدمة سريعة في
            الدمام. وللنقل والمنازل عندنا{" "}
            <Link
              href="#house-shifting"
              className="font-bold text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-800"
            >
              قسم نقل المنازل المميز
            </Link>
            .
          </p>
        </div>

        <div className="group relative mb-12 overflow-hidden rounded-2xl bg-emerald-600 p-6 text-center text-white shadow-xl sm:mb-16 sm:rounded-3xl sm:p-10 md:p-12">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-500 opacity-50 blur-3xl transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-amber-400 opacity-20 blur-2xl" />

          <Sparkles className="relative z-10 mx-auto mb-3 h-10 w-10 text-amber-300 sm:mb-4 sm:h-12 sm:w-12" />
          <h3 className="relative z-10 mb-3 text-xl font-black sm:text-3xl md:text-4xl">
            نحن نشتري جميع أنواع الأثاث المستعمل
          </h3>
          <p className="relative z-10 mx-auto max-w-3xl text-sm font-medium leading-relaxed text-emerald-50 sm:text-lg md:text-xl">
            القائمة أدناه ليست للحصر؛ نحن نقوم بشراء أي نوع من الأثاث المستعمل
            المنزلي، المكتبي، أو التجاري. نشتري المطابخ، السجاد، التحف، وأكثر مع
            توفير فك مجاني ودفع كاش فوري!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:rounded-3xl"
            >
              <div className="relative h-48 w-full overflow-hidden sm:h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110 sm:bottom-4 sm:right-4 sm:h-14 sm:w-14">
                  {service.icon}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-8">
                <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-emerald-600 sm:text-xl md:text-2xl">
                  {service.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
                  {service.description}
                </p>
                <div className="inline-block w-max max-w-full rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 sm:px-4 sm:py-2 sm:text-sm">
                  {service.keywords}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
