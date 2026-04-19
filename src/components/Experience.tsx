export default function Experience({ dict }: { dict: any }) {
  const stats = dict.Experience.stats;

  return (
    <section className="relative overflow-hidden bg-emerald-600 py-14 text-white sm:py-16 lg:py-20">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500 opacity-50 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-500 opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <h2 className="mb-4 text-2xl font-black sm:text-3xl md:text-4xl">
            {dict.Experience.title}
          </h2>
          <p className="text-base text-emerald-100 sm:text-lg">
            {dict.Experience.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 text-center sm:gap-6 md:grid-cols-3 md:gap-8">
          {stats.map((stat: any, index: number) => (
            <div
              key={index}
              className="rounded-2xl border border-emerald-500/30 bg-emerald-700/50 p-6 backdrop-blur-sm sm:rounded-3xl sm:p-8"
            >
              <div
                className="mb-3 text-4xl font-black text-amber-300 sm:mb-4 sm:text-5xl md:text-6xl"
                dir="ltr"
              >
                {stat.number}
              </div>
              <div className="text-base font-bold sm:text-lg md:text-xl">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
