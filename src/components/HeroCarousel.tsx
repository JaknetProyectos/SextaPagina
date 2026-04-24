"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const slidesConfig = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=1920&q=80",
    slug: "decoracion-sorpresa-hotel-playa"
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
    slug: "propuesta-de-matrimonio"
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    slug: "experiencia-picnic-romantico-boho"
  }
];

export function HeroCarousel() {
  const t = useTranslations("HeroCarousel");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesConfig.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesConfig.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slidesConfig.length) % slidesConfig.length);

  return (
    <section className="relative h-[600px] md:h-[700px] w-full bg-white overflow-hidden">
      {slidesConfig.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
              ? "opacity-100 scale-100 z-10" // El activo sube y recibe clics
              : "opacity-0 scale-105 pointer-events-none" // Los ocultos no estorban
            }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="bg-white p-8 md:p-12 rounded-[40px] max-w-3xl mx-4 text-center shadow-none border-none">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                {t(`slides.${slide.id}.title`)}
              </h2>
              {/* Subtítulo correctamente vinculado */}
              <p className="text-lg md:text-xl text-green-500 font-bold mb-8">
                {t(`slides.${slide.id}.subtitle`)}
              </p>
              <Link href={`/experiencias/${slide.slug}`}>
                <button className="px-10 py-4 bg-orange-400 text-white font-black text-lg rounded-2xl hover:bg-green-400 hover:scale-105 transition-all">
                  {t("cta_button")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          className="w-14 h-14 bg-white text-orange-400 rounded-full flex items-center justify-center hover:bg-orange-400 hover:text-white transition-all pointer-events-auto shadow-sm"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="w-14 h-14 bg-white text-orange-400 rounded-full flex items-center justify-center hover:bg-orange-400 hover:text-white transition-all pointer-events-auto shadow-sm"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slidesConfig.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${index === currentSlide
                ? "bg-orange-400 w-10 h-3"
                : "bg-white w-3 h-3 hover:bg-green-400"
              }`}
          />
        ))}
      </div>
    </section>
  );
}