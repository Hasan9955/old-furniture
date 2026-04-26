"use client";

import { MessageCircle, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const heroImages = [
  "/asset/heroImg1.jpg",
  "/asset/heroImg2.jpg",
  "/asset/heroImg3.jpg",
  "/asset/heroImg4.jpg",
];

export default function Hero({ dict }: { dict: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[min(100dvh,720px)] items-center justify-center overflow-hidden py-16 sm:min-h-[80vh] sm:py-20 lg:min-h-[85vh]">
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/75" />
        </div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6 text-center sm:space-y-8">
          <h1 className="text-balance text-3xl font-black leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl xl:text-7xl">
            {dict.Hero.titlePart1}
            <span className="block text-emerald-400 sm:inline">{dict.Hero.titlePart2}</span>{" "}
            {dict.Hero.titlePart3}
          </h1>
          <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-slate-200 drop-shadow sm:text-lg md:text-xl">
            {dict.Hero.description}
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:pt-4">
            <a
              href="https://wa.me/+966565642655"
              className="inline-flex min-h-[48px] w-full max-w-md flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-bold text-white shadow-xl transition hover:bg-[#20bd5a] active:scale-[0.99] sm:w-auto sm:max-w-none sm:px-8 sm:py-4 sm:text-lg"
            >
              {dict.Hero.whatsappButton}
              <MessageCircle className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
            </a>
            <a
              href="tel:+966565642655"
              className="inline-flex min-h-[48px] w-full max-w-md flex-1 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-[0_0_20px_rgba(5,150,105,0.4)] transition hover:bg-emerald-500 active:scale-[0.99] sm:w-auto sm:max-w-none sm:px-8 sm:py-4 sm:text-lg"
            >
              <Phone className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
              {dict.Hero.callButton}
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 pt-6 text-sm font-semibold text-emerald-100 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-10 sm:gap-y-2 sm:pt-8 sm:text-base">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              {dict.Hero.feature1}
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              {dict.Hero.feature2}
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              {dict.Hero.feature3}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
