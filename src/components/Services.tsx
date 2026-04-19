import Image from "next/image";
import Link from "next/link";
import { Cpu, Sparkles, Coins, Weight, Construction, Shield, Zap, Pipette, Layout, Wind, Activity } from "lucide-react";
import { images } from "./imageImporter";

export default function Services({ dict }: { dict: any }) {
  const icons = [
    <Wind key={0} className="h-6 w-6 text-emerald-600" />,
    <Layout key={1} className="h-6 w-6 text-emerald-600" />,
    <Pipette key={2} className="h-6 w-6 text-emerald-600" />,
    <Zap key={3} className="h-6 w-6 text-emerald-600" />,
    <Activity key={4} className="h-6 w-6 text-emerald-600" />,
    <Shield key={5} className="h-6 w-6 text-emerald-600" />,
    <Construction key={6} className="h-6 w-6 text-emerald-600" />,
    <Cpu key={7} className="h-6 w-6 text-emerald-600" />,
    <Coins key={8} className="h-6 w-6 text-emerald-600" />,
    <Weight key={9} className="h-6 w-6 text-emerald-600" />
  ];

  const imageFiles = [
    images.electric1, images.aluminum1, images.brassScrap2, images.electric2, 
    images.generator2, images.stainless, images.construction, images.electric4,
    images.copper, images.iron
  ];

  const services = dict.Services.items.map((item: any, index: number) => ({
    ...item,
    icon: icons[index],
    image: imageFiles[index]
  }));

  return (
    <section id="services" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <h2 className="mb-4 text-2xl font-black text-slate-900 sm:text-3xl md:text-4xl">
            {dict.Services.titlePart1} <span className="text-emerald-600">{dict.Services.titlePart2}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {services.map((service: any, index: number) => (
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
