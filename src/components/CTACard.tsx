"use client";

import { Link } from "@/i18n/routing";
import { ArrowUpRight, Heart, Star, Plane } from "lucide-react";
import { useTranslations } from "next-intl";

export function CTACard() {
  const t = useTranslations("CTACard");

  return (
    <section className="py-20 bg-[#1e232f]">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[40px] p-10 md:p-16 max-w-5xl mx-auto shadow-none border-none">
          
          {/* Iconos Decorativos - Estilo sólido y limpio */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="w-12 h-12 bg-orange-400 rounded-2xl flex items-center justify-center">
              <Plane className="text-white w-6 h-6" />
            </div>
            <div className="w-12 h-12 bg-green-400 rounded-2xl flex items-center justify-center">
              <Heart className="text-white w-6 h-6" />
            </div>
            <div className="w-12 h-12 bg-orange-400 rounded-2xl flex items-center justify-center">
              <Star className="text-white w-6 h-6" />
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 text-xl mb-3 font-bold uppercase tracking-wider">
              {t("top_text")}
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-10 text-gray-900 leading-tight">
              {t.rich("title", {
                span: (chunks) => <span className="text-orange-400">{chunks}</span>
              })}
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={"/experiencias"}>
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-orange-400 transition-all group">
                  {t("buttons.experiences")}
                  <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </Link>
              <Link href={"/acerca"}>
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-orange-400 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-green-400 transition-all group">
                  {t("buttons.services")}
                  <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}