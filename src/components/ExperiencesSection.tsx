"use client";

import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

const experiencesConfig = [
  {
    id: "1",
    slug: "experiencia-fotografica-viajera",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&q=80",
  },
  {
    id: "2",
    slug: "experiencia-picnic-romantico-boho",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
  },
  {
    id: "3",
    slug: "experiencias-paseo-privado-en-lancha",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  },
  {
    id: "4",
    slug: "cena-rooftop-secret-spot",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    id: "5",
    slug: "propuesta-de-matrimonio",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    id: "6",
    slug: "decoracion-sorpresa-hotel-playa",
    image: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=800&q=80",
  },
];

export function ExperiencesSection() {
  const t = useTranslations("ExperiencesSection");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Encabezado de Sección */}
        <div className="text-center mb-16 space-y-4">
          <span className="bg-green-100 text-green-600 px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest">
            {t("badge")}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900">
            {t.rich("title", {
              span: (chunks) => <span className="text-orange-400">{chunks}</span>
            })}
          </h2>
          <div className="w-24 h-2 bg-orange-400 mx-auto rounded-full" />
        </div>

        {/* Grid de Experiencias */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiencesConfig.map((exp) => (
            <div 
              key={exp.id}
              className="group bg-gray-50 rounded-[32px] overflow-hidden flex flex-col h-full hover:bg-green-50 transition-colors duration-300 border-none"
            >
              {/* Imagen */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={exp.image}
                  alt={t(`items.${exp.id}.title`)}
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
                  {t(`items.${exp.id}.title`)}
                </h3>
                <p className="text-gray-600 font-medium text-base leading-relaxed mb-8">
                  {t(`items.${exp.id}.description`)}
                </p>

                {/* Botón Acción */}
                <div className="mt-auto">
                  <Link href={`/experiencias/${exp.slug}`} className="block">
                    <button className="w-full py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-orange-400 transition-all flex items-center justify-center gap-2">
                      {t("button_text")}
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