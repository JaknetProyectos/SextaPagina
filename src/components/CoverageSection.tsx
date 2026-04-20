"use client";

import { Link } from "@/i18n/routing";
import { ArrowUpRight, MapPin } from "lucide-react";

export function CoverageSection() {
  return (
    <section className="py-20 bg-green-400">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[40px] p-8 md:p-16 max-w-6xl mx-auto shadow-none">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Lado Izquierdo: Título con fuerza visual */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-widest">
                <MapPin className="w-4 h-4" />
                Presencia Nacional
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                Cobertura y <br />
                <span className="text-orange-400">Condiciones</span>
              </h2>
            </div>

            {/* Lado Derecho: Información y Acción */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-[32px] border-none">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                Conoce todos nuestros destinos
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                Nuestros servicios están disponibles en las principales ciudades de México. 
                La logística se adapta a cada destino para garantizar que tu experiencia sea perfecta.
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-black text-orange-400 uppercase tracking-wide mb-3">
                  Operamos en:
                </h4>
                <p className="text-gray-900 font-bold leading-relaxed">
                  CDMX • Guadalajara • Monterrey • Cancún • Riviera Maya • Puerto Vallarta • Los Cabos • San Miguel de Allende • Valle de Bravo
                </p>
              </div>

              <Link href={"/acerca"}>
                <button className="inline-flex items-center gap-3 bg-orange-400 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-gray-900 transition-all group">
                  Ver detalles de cobertura
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