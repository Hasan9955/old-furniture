import { Bed, Tv, Coffee, Cpu } from "lucide-react";

export default function Categories({ dict }: { dict: any }) {
  const categories = [
    {
      name: dict.Categories.items.furniture,
      icon: <Bed className="mb-3 h-10 w-10 text-emerald-500 sm:mb-4 sm:h-12 sm:w-12" />,
    },
    {
      name: dict.Categories.items.appliances,
      icon: <Tv className="mb-3 h-10 w-10 text-emerald-500 sm:mb-4 sm:h-12 sm:w-12" />,
    },
    {
      name: dict.Categories.items.housewares,
      icon: <Coffee className="mb-3 h-10 w-10 text-emerald-500 sm:mb-4 sm:h-12 sm:w-12" />,
    },
    {
      name: dict.Categories.items.aluminum,
      icon: <Cpu className="mb-3 h-10 w-10 text-emerald-500 sm:mb-4 sm:h-12 sm:w-12" />,
    },
  ];

  return (
    <section className="bg-emerald-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
            {dict.Categories.title}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-emerald-100 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-3xl sm:p-8"
            >
              <div className="flex justify-center">{cat.icon}</div>
              <h3 className="text-base font-bold text-slate-800 sm:text-xl md:text-2xl">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
