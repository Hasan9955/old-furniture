import { CheckCircle2, Clock, ThumbsUp, MapPin, Phone } from "lucide-react";

export default function About({ dict }: { dict: any }) {
  const icons = [CheckCircle2, Clock, ThumbsUp];
  const features = dict.About.features.map((f: any, i: number) => ({
    ...f,
    icon: icons[i]
  }));

  return (
    <section id="about" className="scroll-mt-24 bg-slate-900 py-14 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-4 text-2xl font-black sm:mb-6 sm:text-3xl md:text-4xl">
              {dict.About.titlePart1} <span className="text-emerald-400">{dict.About.titlePart2}</span>
            </h2>
            <p className="mb-6 text-base leading-relaxed text-slate-300 sm:mb-8 sm:text-lg md:text-xl">
              {dict.About.description}
            </p>

            <div className="space-y-5 sm:space-y-6">
              {features.map((f: any, index: number) => (
                <div key={index} className="flex gap-3 sm:gap-4">
                  <f.icon className="mt-0.5 h-7 w-7 shrink-0 text-emerald-400 sm:h-8 sm:w-8" />
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 text-lg font-bold sm:text-xl text-start">
                      {f.title}
                    </h3>
                    <p className="text-sm text-slate-400 sm:text-base text-start">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 p-5 sm:rounded-3xl sm:p-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-emerald-500 opacity-10" />
            <h3 className="mb-6 text-xl font-bold sm:text-2xl text-start">{dict.About.whereToServe}</h3>
            <ul className="space-y-3 sm:space-y-4">
              {dict.About.areas.map((area: string, index: number) => (
                <li key={index} className="flex items-center gap-3 rounded-2xl bg-slate-700/50 p-3 text-base sm:p-4 sm:text-lg">
                  <MapPin className="h-5 w-5 shrink-0 text-emerald-400 sm:h-6 sm:w-6" />
                  {area}
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-slate-700 pt-6 sm:mt-8 sm:pt-8 text-start">
              <p className="mb-4 text-sm text-slate-400 sm:text-base">
                {dict.About.callActionDesc}
              </p>
              <a href="tel:+9660565642655" className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-base font-bold text-white transition-colors hover:bg-emerald-600 sm:py-4 sm:text-lg">
                <Phone className="h-5 w-5 shrink-0" />
                {dict.About.callActionBtn} <span dir="ltr">+9660565642655</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
