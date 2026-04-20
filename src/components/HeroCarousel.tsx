"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=1920&q=80",
    title: "Decoración Sorpresa Hotel / Playa",
    subtitle: "Diseñar Tu Propuesta Completamente A Tu Medida",
    slug: "decoracion-sorpresa-hotel-playa"
  },
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
    title: "Experiencia Propuesta de Matrimonio",
    subtitle: "Diseñamos propuestas únicas y románticas para que ese sí sea inolvidable",
    slug: "propuesta-de-matrimonio"
  },
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    title: "Experiencia Picnic Romántico",
    subtitle: "Vive un momento íntimo, estético y diseñado en un entorno natural",
    slug: "experiencia-picnic-romantico-boho"
  }
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[600px] md:h-[700px] w-full bg-white overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          {/* Imagen con bordes redondeados sutiles en los lados para despegar del fondo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay sólido sin gradientes ni transparencias complejas */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Contenido Central */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="bg-white p-8 md:p-12 rounded-[40px] max-w-3xl mx-4 text-center shadow-none border-none">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl text-green-500 font-bold mb-8">
                {slide.subtitle}
              </p>
              <Link href={`/experiencias/${slide.slug}`}>
                <button className="px-10 py-4 bg-orange-400 text-white font-black text-lg rounded-2xl hover:bg-green-400 hover:scale-105 transition-all">
                  DESCUBRIR AHORA
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Flechas de Navegación - Redondeadas y limpias */}
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

      {/* Indicadores - Estilo Píldora */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "bg-orange-400 w-10 h-3"
                : "bg-white w-3 h-3 hover:bg-green-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}