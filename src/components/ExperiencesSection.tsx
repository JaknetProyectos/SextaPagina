"use client";

import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    slug: "experiencia-fotografica-viajera",
    title: "Experiencia Fotográfica Viajera",
    description: "Convierte tus viajes en recuerdos eternos con fotógrafos profesionales.",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&q=80",
  },
  {
    id: 2,
    slug: "experiencia-picnic-romantico-boho",
    title: "Picnic Romántico / Boho",
    description: "Vive un momento íntimo, estético y diseñado en un entorno natural.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
  },
  {
    id: 3,
    slug: "experiencias-paseo-privado-en-lancha",
    title: "Paseo Privado En Lancha",
    description: "Navega en un entorno natural espectacular con total privacidad.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  },
  {
    id: 4,
    slug: "cena-rooftop-secret-spot",
    title: "Cena Rooftop Secret Spot",
    description: "Azotea exclusiva con vista panorámica, diseñada para momentos íntimos.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    id: 5,
    slug: "propuesta-de-matrimonio",
    title: "Propuesta De Matrimonio",
    description: "Diseños románticos y coordinados para que ese sí sea inolvidable.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    id: 6,
    slug: "decoracion-sorpresa-hotel-playa",
    title: "Decoración Sorpresa",
    description: "Transformamos habitaciones o villas en escenarios románticos perfectos.",
    image: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=800&q=80",
  },
];

export function ExperiencesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Encabezado de Sección */}
        <div className="text-center mb-16 space-y-4">
          <span className="bg-green-100 text-green-600 px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest">
            Catálogo Exclusivo
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900">
            Experiencias <span className="text-orange-400">Inolvidables</span>
          </h2>
          <div className="w-24 h-2 bg-orange-400 mx-auto rounded-full" />
        </div>

        {/* Grid de Experiencias */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="group bg-gray-50 rounded-[32px] overflow-hidden flex flex-col h-full hover:bg-green-50 transition-colors duration-300 border-none"
            >
              {/* Imagen */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 p-3 rounded-2xl text-orange-400">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Contenido Texto */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight group-hover:text-orange-400 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-gray-600 font-medium text-base leading-relaxed mb-8">
                  {exp.description}
                </p>

                {/* Botón Acción - Al final de la card */}
                <div className="mt-auto">
                  <Link href={`/experiencias/${exp.slug}`} className="block">
                    <button className="w-full py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-orange-400 transition-all flex items-center justify-center gap-2">
                      VER DETALLES
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}