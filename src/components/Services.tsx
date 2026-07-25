import Image from "next/image";
import Link from "next/link";
import { Cpu, Sparkles, Coins, Weight, Construction, Shield, Zap, Pipette, Layout, Wind, Activity, ArrowRight, ArrowLeft } from "lucide-react";
import { images } from "./imageImporter";

const getGridClass = (index: number) => {
  const classes = [
    "lg:col-span-2 xl:col-span-2 xl:row-span-2 min-h-[340px] sm:min-h-[400px] xl:min-h-[540px]", // 0
    "lg:col-span-1 xl:col-span-1 min-h-[280px] sm:min-h-[320px] xl:min-h-[260px]", // 1
    "lg:col-span-1 xl:col-span-1 min-h-[280px] sm:min-h-[320px] xl:min-h-[260px]", // 2
    "lg:col-span-2 xl:col-span-2 min-h-[280px] sm:min-h-[320px] xl:min-h-[260px]", // 3
    "lg:col-span-1 xl:col-span-1 min-h-[280px] sm:min-h-[320px] xl:min-h-[260px]", // 4
    "lg:col-span-1 xl:col-span-1 min-h-[280px] sm:min-h-[320px] xl:min-h-[260px]", // 5
    "lg:col-span-2 xl:col-span-2 min-h-[280px] sm:min-h-[320px] xl:min-h-[260px]", // 6
    "lg:col-span-2 xl:col-span-2 min-h-[280px] sm:min-h-[320px] xl:min-h-[260px]", // 7
    "lg:col-span-1 xl:col-span-1 min-h-[280px] sm:min-h-[320px] xl:min-h-[260px]", // 8
    "lg:col-span-1 xl:col-span-1 min-h-[280px] sm:min-h-[320px] xl:min-h-[260px]", // 9
  ];
  return classes[index % 10];
};

export default function Services({ dict, lang = "en" }: { dict: any; lang?: string }) {
  const icons = [
    <Wind key={0} className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400 transition-colors duration-500 group-hover:text-white" />,
    <Layout key={1} className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400 transition-colors duration-500 group-hover:text-white" />,
    <Pipette key={2} className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400 transition-colors duration-500 group-hover:text-white" />,
    <Zap key={3} className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400 transition-colors duration-500 group-hover:text-white" />,
    <Activity key={4} className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400 transition-colors duration-500 group-hover:text-white" />,
    <Shield key={5} className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400 transition-colors duration-500 group-hover:text-white" />,
    <Construction key={6} className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400 transition-colors duration-500 group-hover:text-white" />,
    <Cpu key={7} className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400 transition-colors duration-500 group-hover:text-white" />,
    <Coins key={8} className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400 transition-colors duration-500 group-hover:text-white" />,
    <Weight key={9} className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400 transition-colors duration-500 group-hover:text-white" />
  ];

  const imageFiles = [
    images.airCondition1, images.aluminum1, images.brassScrap2, images.transformer1, 
    images.generator2, images.stainless, images.construction, images.electric4,
    images.copper, images.iron
  ];

  const services = dict.Services.items.map((item: any, index: number) => ({
    ...item,
    icon: icons[index],
    image: imageFiles[index]
  }));

  const ArrowIcon = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="scroll-mt-24 bg-slate-50 py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
            {dict.Services.titlePart1}{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {dict.Services.titlePart2}
            </span>
          </h2>
        </div>

        <div className="grid grid-flow-dense grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service: any, index: number) => (
            <Link
              key={index}
              href={`/${lang}/services/${service.slug}` as any}
              className={`group relative flex flex-col overflow-hidden rounded-3xl bg-slate-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)] ${getGridClass(index)}`}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover opacity-50 transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-75"
                />
              </div>
              
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              
              <div className="relative z-20 flex flex-1 flex-col justify-end p-5 sm:p-7">
                <div className="absolute top-4 sm:top-6 ltr:right-4 ltr:sm:right-6 rtl:left-4 rtl:sm:left-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-white/10 shadow-lg backdrop-blur-md transition-all duration-500 group-hover:rotate-12 group-hover:bg-emerald-500">
                  {service.icon}
                </div>

                <div className="mt-auto transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="mb-2 sm:mb-3 text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mb-4 sm:mb-6 line-clamp-2 text-xs sm:text-sm text-slate-300">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-sm transition-colors duration-500 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/20">
                      {service.keywords}
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1 text-xs sm:text-sm font-bold text-emerald-400 opacity-90 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 rtl:group-hover:-translate-x-1">
                      {dict.Services.viewDetails || (lang === "ar" ? "عرض التفاصيل" : "View Details")}
                      <ArrowIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

