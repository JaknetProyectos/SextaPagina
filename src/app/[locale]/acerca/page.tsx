"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, MapPin, Calendar, PlusCircle, Truck, Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";
import { CustomQuoteSection } from "@/components/CustomQuoteSection";
import { PagarCotizacion } from "@/components/PagarCotizacion";

export default function AcercaPage() {
  const ciudades = [
    "CDMX", "Guadalajara", "Monterrey", "Cancún", "Riviera Maya",
    "Puerto Vallarta", "Los Cabos", "San Miguel de Allende", "Valle de Bravo",
    "Xochimilco", "Querétaro", "León", "Puebla", "Toluca", "Tijuana",
    "Mazatlán", "Oaxaca", "Mérida", "Cozumel", "Villahermosa",
    "Acapulco", "Chihuahua", "Morelia", "Aguascalientes", "San Luis Potosí",
    "Culiacán", "Durango", "Zacatecas", "Tepic", "Ensenada"
  ];

  const extrasOpcionales = [
    "Video profesional",
    "Maquilladores y estilistas",
    "Músicos en vivo",
    "Toma aérea con dron",
    "Chef en vivo",
    "Postres o menú adicional",
    "Decoración especial temática",
    "Transporte privado",
    "Extensión de tiempo"
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Estilo Bloque Sólido */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=1920&q=80" 
            className="w-full h-full object-cover"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 bg-white px-10 py-6 rounded-[30px] text-center shadow-none">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase">
            Acerca de nosotros
          </h1>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80"
                alt="Travelers"
                className="rounded-[40px] w-full object-cover shadow-none"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-400 p-8 rounded-[32px] hidden md:block">
                <MapPin className="w-12 h-12 text-white" />
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Cobertura y <br />
                <span className="text-orange-400">Condiciones Generales</span>
              </h2>
              <p className="text-gray-600 text-lg font-medium leading-relaxed">
                Nuestros servicios están disponibles en distintas ciudades y destinos
                dentro de México. La disponibilidad, logística y costos adicionales pueden
                variar según el tipo de experiencia y el plan seleccionado.
              </p>

              <div className="bg-gray-50 rounded-[32px] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-400 p-2 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">
                    Ciudades Disponibles
                  </h3>
                </div>
                <p className="text-gray-700 font-bold leading-relaxed text-sm">
                  Operamos en: {ciudades.join(" • ")}.
                </p>
              </div>

              {/* Personalize Box */}
              <div className="bg-green-50 rounded-[32px] p-8 border-none">
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  Personaliza tu experiencia
                </h3>
                <p className="text-gray-600 font-medium mb-6 leading-relaxed">
                  Si deseas realizar tu experiencia en una ciudad o destino que no se encuentre
                  en esta lista, contáctanos para elaborar una cotización personalizada según
                  ubicación y logística requerida.
                </p>
                <Link href="/contacto">
                  <button className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-orange-400 transition-all group">
                    CONTÁCTANOS
                    <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section - Impacto Visual */}
      <section className="py-24 bg-green-400">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-10">
            <div className="p-2 bg-white rounded-full">
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=200&h=200&fit=crop&q=80"
                alt="Couple"
                className="w-32 h-32 rounded-full object-cover shadow-none"
              />
            </div>
          </div>
          <p className="text-2xl md:text-4xl font-black text-white max-w-5xl mx-auto leading-tight italic">
            "Cada experiencia puede ajustarse y escalarse según el nivel de producción que desees."
          </p>
        </div>
      </section>

      {/* Info Cards Section - Información Completa */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Reservations */}
            <div className="bg-gray-50 rounded-[40px] p-10 flex flex-col items-center text-center">
              <div className="bg-white p-6 rounded-[30px] mb-8 shadow-sm">
                <Calendar className="w-12 h-12 text-green-400" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Reservaciones</h3>
              <p className="text-gray-600 font-bold mb-6">
                Recomendamos realizar tu reservación con mínimo una semana de anticipación.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                En experiencias premium, destinos especiales o temporadas altas, se sugiere
                reservar con mayor tiempo para garantizar disponibilidad de locaciones,
                proveedores y producción.
              </p>
            </div>

            {/* Extras Opcionales */}
            <div className="bg-orange-50 rounded-[40px] p-10 flex flex-col border-none">
              <div className="bg-orange-400 p-4 rounded-2xl w-fit mb-8 self-center">
                <PlusCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">Extras Opcionales</h3>
              <p className="text-gray-600 font-bold mb-6 text-sm text-center">
                Dependiendo del servicio y plan contratado, puedes agregar elementos
                adicionales con cotización personalizada, como:
              </p>
              <ul className="space-y-3">
                {extrasOpcionales.map((extra) => (
                  <li key={extra} className="flex items-center gap-3 font-black text-gray-700 text-sm">
                    <Sparkles className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    {extra}
                  </li>
                ))}
              </ul>
            </div>

            {/* Transport & Logistics */}
            <div className="bg-gray-50 rounded-[40px] p-10 flex flex-col">
              <div className="bg-white p-6 rounded-[30px] mb-8 shadow-sm w-fit self-center">
                <Truck className="w-12 h-12 text-green-400" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">Transporte y Logística</h3>
              <p className="text-gray-600 font-bold mb-4 text-center">
                El costo de transporte se cotiza de manera independiente y puede variar según:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Ciudad base del equipo",
                  "Distancia al destino",
                  "Tipo de experiencia contratada",
                  "Nivel de producción requerido"
                ].map((item) => (
                  <li key={item} className="bg-white p-3 rounded-2xl text-xs font-black text-gray-500 flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 text-xs text-center leading-relaxed mt-auto">
                Para experiencias fuera de la ciudad base, puede aplicarse costo adicional
                por traslado, hospedaje y logística operativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote Section con Data Original */}
      <CustomQuoteSection  visibleFields={{
        date: true,
        email: true,
        groupType: true,
        location: true,
        message: true,
        name: true
      }} data={{
        title: "Cotización Personalizada",
        description: "",
        lists: [
          {
            subtitle: "Podemos realizar esta experiencia en:",
            items: [
              "Hoteles boutique",
              "Villas privadas en playa",
              "Cabañas románticas",
              "Suites ejecutivas",
              "Destinos especiales dentro de México"
            ]
          },
          {
            subtitle: "La inversión final dependerá de:",
            items: [
              "Ciudad o destino",
              "Nivel de producción",
              "Políticas del hotel",
              "Cobertura audiovisual",
              "Logística de traslado"
            ]
          }
        ],
        background: "",
      }} />

      <div className="py-20">
        <PagarCotizacion/>
      </div>

      <Footer />
    </main>
  );
}