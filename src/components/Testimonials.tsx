import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "أحمد عبدالله",
      text: "خدمة ممتازة وسريعة، دقيت عليهم وجو شافوا العفش بنفس اليوم. أنصح بالتعامل معهم وبقوة، تقييمهم للعفش كان منصف جداً وعطوني حقي كاش بوقتها.",
      rating: 5,
    },
    {
      name: "فهد العتيبي",
      text: "نقلت عفشي معهم واشتريت منهم بعد، تيم محترف جداً والأسعار أكثر من ممتازة. صراحة من أفضل اللي تعاملت معهم بالدمام.",
      rating: 5,
    },
    {
      name: "خالد سعيد",
      text: "مصداقية وأمانة في الشراء. بعت لهم مكيفات وأجهزة مستعملة وكان السعر يرضي. فكوا ونقلوا كل شيء مجاناً وبدون أي قروشة.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-slate-50 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <h2 className="mb-4 text-2xl font-black text-slate-900 sm:text-3xl md:text-4xl">
            آراء <span className="text-emerald-600">عملائنا</span>
          </h2>
          <p className="text-base text-slate-600 sm:text-lg md:text-xl">
            شهادات نعتز بها من عملائنا الكرام في الدمام والخبر والظهران
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl sm:rounded-3xl sm:p-8"
            >
              <div className="mb-3 flex gap-1 text-amber-400 sm:mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
                ))}
              </div>
              <p className="mb-4 text-sm font-medium leading-relaxed text-slate-600 sm:mb-6 sm:text-base md:text-lg">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="font-bold text-slate-900">{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
