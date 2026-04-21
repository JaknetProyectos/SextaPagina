"use client";

import { Link } from "@/i18n/routing";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

export function WhyUsSection() {
  const t = useTranslations("WhyUsSection");

  return (
    <section className="py-20 bg-gray-200 relative overflow-hidden">
      {/* Patrón de puntos decorativo sutil en verde */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiM0YWRlODAiLz48L3N2Zz4=')] bg-repeat" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Lado Izquierdo - Contenido de Texto */}
          <div className="space-y-8">
            <div>
              <span className="bg-green-400 text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest">
                {t("badge")}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-6 leading-tight">
                {t.rich("title", {
                  br: () => <br />,
                  span: (chunks) => <span className="text-green-400">{chunks}</span>
                })}
              </h2>
            </div>

            <div className="bg-green-50 rounded-[32px] p-8 border-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-400 rounded-bl-[100px] opacity-20" />
              
              <div className="flex gap-4 items-start relative z-10">
                <CheckCircle2 className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    {t("feature.title")}
                  </h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {t("feature.description")}
                  </p>
                </div>
              </div>
            </div>

            <Link href={"/contacto"}>
              <button className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-orange-400 transition-all group">
                {t("button_text")}
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Lado Derecho - Ilustración SVG */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square bg-gray-50 rounded-[60px] flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 300 300" className="w-4/5 h-4/5" fill="none">
                <circle cx="150" cy="150" r="130" fill="#4ade80" opacity="0.1" />
                <path
                  d="M60 200 Q 100 120, 160 150 Q 200 170, 240 80"
                  stroke="#4ade80"
                  strokeWidth="4"
                  strokeDasharray="12,8"
                  strokeLinecap="round"
                />
                <g transform="translate(60, 200)">
                  <circle cx="0" cy="0" r="10" fill="#fb923c" />
                  <circle cx="0" cy="0" r="5" fill="white" />
                </g>
                <g transform="translate(160, 140) rotate(-20)">
                  <path d="M0 0 L15 8 L0 16 L4 8 Z" fill="#111827" />
                </g>
                <g transform="translate(235, 85) rotate(-50)">
                  <path d="M0 10 L30 0 L30 6 L10 10 L30 14 L30 20 Z" fill="#111827" />
                </g>
                <g transform="translate(245, 75)">
                  <circle cx="0" cy="0" r="12" fill="#fb923c" />
                  <circle cx="0" cy="0" r="6" fill="white" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}