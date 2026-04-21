"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, MapPin, Calendar, PlusCircle, Truck, Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";
import { CustomQuoteSection } from "@/components/CustomQuoteSection";
import { PagarCotizacion } from "@/components/PagarCotizacion";
import { useTranslations } from "next-intl";

export default function AcercaPage() {
  const t = useTranslations("AboutPage");

  // Recuperamos los arrays desde el JSON
  const ciudades = t.raw("coverage.city_list") as string[];
  const extrasOpcionales = t.raw("extras.items") as string[];
  const transporteDetalles = t.raw("logistics.details") as string[];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
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
            {t("hero.title")}
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
                {t.rich("coverage.title", {
                  br: () => <br />,
                  span: (chunks) => <span className="text-orange-400">{chunks}</span>
                })}
              </h2>
              <p className="text-gray-600 text-lg font-medium leading-relaxed">
                {t("coverage.description")}
              </p>

              <div className="bg-gray-50 rounded-[32px] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-400 p-2 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">
                    {t("coverage.list_title")}
                  </h3>
                </div>
                <p className="text-gray-700 font-bold leading-relaxed text-sm">
                  {t("coverage.operating_in")}: {ciudades.join(" • ")}.
                </p>
              </div>

              {/* Personalize Box */}
              <div className="bg-green-50 rounded-[32px] p-8 border-none">
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  {t("coverage.personalize.title")}
                </h3>
                <p className="text-gray-600 font-medium mb-6 leading-relaxed">
                  {t("coverage.personalize.description")}
                </p>
                <Link href="/contacto">
                  <button className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-orange-400 transition-all group">
                    {t("coverage.personalize.button")}
                    <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
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
            "{t("quote")}"
          </p>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Reservations */}
            <div className="bg-gray-50 rounded-[40px] p-10 flex flex-col items-center text-center">
              <div className="bg-white p-6 rounded-[30px] mb-8 shadow-sm">
                <Calendar className="w-12 h-12 text-green-400" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">{t("reservations.title")}</h3>
              <p className="text-gray-600 font-bold mb-6">
                {t("reservations.subtitle")}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("reservations.description")}
              </p>
            </div>

            {/* Extras Opcionales */}
            <div className="bg-orange-50 rounded-[40px] p-10 flex flex-col border-none">
              <div className="bg-orange-400 p-4 rounded-2xl w-fit mb-8 self-center">
                <PlusCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">{t("extras.title")}</h3>
              <p className="text-gray-600 font-bold mb-6 text-sm text-center">
                {t("extras.subtitle")}
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
              <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">{t("logistics.title")}</h3>
              <p className="text-gray-600 font-bold mb-4 text-center">
                {t("logistics.subtitle")}
              </p>
              <ul className="space-y-4 mb-8">
                {transporteDetalles.map((item) => (
                  <li key={item} className="bg-white p-3 rounded-2xl text-xs font-black text-gray-500 flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 text-xs text-center leading-relaxed mt-auto">
                {t("logistics.footer")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <CustomQuoteSection  
        visibleFields={{
          date: true,
          email: true,
          groupType: true,
          location: true,
          message: true,
          name: true
        }} 
        data={{
          title: t("custom_quote.title"),
          description: "",
          lists: [
            {
              subtitle: t("custom_quote.locations_subtitle"),
              items: t.raw("custom_quote.locations_items") as string[]
            },
            {
              subtitle: t("custom_quote.investment_subtitle"),
              items: t.raw("custom_quote.investment_items") as string[]
            }
          ],
          background: "",
        }} 
      />

      <div className="py-20">
        <PagarCotizacion/>
      </div>

      <Footer />
    </main>
  );
}