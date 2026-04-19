import { Star } from "lucide-react";

export default function Testimonials({ dict }: { dict: any }) {
  const reviews = dict.Testimonials.reviews.map((r: any) => ({
    ...r,
    rating: 5
  }));

  return (
    <section className="bg-slate-50 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <h2 className="mb-4 text-2xl font-black text-slate-900 sm:text-3xl md:text-4xl">
            {dict.Testimonials.titlePart1} <span className="text-emerald-600">{dict.Testimonials.titlePart2}</span>
          </h2>
          <p className="text-base text-slate-600 sm:text-lg md:text-xl">
            {dict.Testimonials.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {reviews.map((review: any, index: number) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl sm:rounded-3xl sm:p-8"
            >
              <div className="mb-3 flex gap-1 text-amber-400 sm:mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
                ))}
              </div>
              <p className="mb-4 text-sm font-medium leading-relaxed text-slate-600 sm:mb-6 sm:text-base md:text-lg text-start">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="font-bold text-slate-900 text-start">{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
