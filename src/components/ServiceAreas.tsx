import { MapPin } from "lucide-react";

export default function ServiceAreas({ dict }: { dict: any }) {
  const areas = dict.ServiceAreas.areas;

  return (
    <section className="relative overflow-hidden bg-emerald-700 py-12 text-white sm:py-16 lg:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-black sm:mb-8 sm:text-3xl">
          {dict.ServiceAreas.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
          {areas.map((area: string, idx: number) => (
            <div
              key={idx}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm sm:gap-3 sm:px-8 sm:py-4"
            >
              <MapPin className="h-5 w-5 shrink-0 text-amber-400 sm:h-6 sm:w-6" />
              <span className="text-lg font-bold sm:text-2xl">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
