"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  X,
  Clock,
  CheckCircle2,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  MessageCircle,
  ShieldAlert,
  CalendarDays
} from "lucide-react";
import { PagarCotizacion } from "./PagarCotizacion";
import { useCart } from "@/hooks/useCart";
import { CartItem } from "@/interfaces/cart/CartItem";
import { useLocale, useTranslations } from "next-intl";

interface Plan {
  slug: string;
  name: string;
  price: number;
  description: string;
  backgroundImage: string;
  color: string;
  features?: string[];
  duration?: string;
  includes?: string[];
  notIncludes?: string[];
}

interface ExperienceDetails {
  slug: string;
  name: string;
}

interface PlanDetailModalProps {
  plan: Plan;
  exp: ExperienceDetails;
  onClose: () => void;
}

export const PlanDetailModal = ({ plan, exp, onClose }: PlanDetailModalProps) => {
  const t = useTranslations("PlanDetailModal");
  const locale = useLocale();
  const { addItem } = useCart();

  const [pax, setPax] = useState(2);
  const [fecha, setFecha] = useState("");
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!fecha) {
      alert(t("alerts.select_date"));
      return;
    }

    const newItem: CartItem = {
      experience_slug: exp.slug,
      experience_name: exp.name,
      plan_name: plan.name,
      plan_duration: plan.duration || t("defaults.to_be_consulted"),
      fecha: fecha,
      personas: pax,
      price: plan.price,
    };

    addItem(newItem);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in fade-in duration-300">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105"
          style={{ backgroundImage: `url('${plan.backgroundImage}')` }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <button
          onClick={onClose}
          className="absolute top-28 right-8 md:right-16 p-5 bg-white text-gray-900 rounded-full hover:bg-orange-400 hover:text-white transition-all z-30 shadow-none border-none group"
        >
          <X className="w-8 h-8 group-hover:rotate-90 transition-transform" />
        </button>

        <div className="relative z-10 bg-white px-8 py-10 md:px-16 md:py-12 rounded-[40px] text-center mx-4 max-w-4xl shadow-none">
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-4">
            {plan.name}
          </h2>
          <div className="inline-block bg-green-400 text-white px-6 py-2 rounded-xl text-xl md:text-2xl font-black tracking-tighter uppercase">
            {new Intl.NumberFormat(locale === 'es' ? 'es-MX' : 'en-US', {
              style: 'currency',
              currency: 'MXN',
              maximumFractionDigits: 0
            }).format(plan.price)} 
            <span className="text-sm opacity-80 ml-2"> {t("tax_included")}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-3 gap-16 items-start">

          <div className="lg:col-span-2 space-y-20">
            {/* Descripción */}
            <section className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange-400 w-12 h-2 rounded-full" />
                <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
                  {t("sections.description")}
                </h3>
              </div>
              <p className="text-gray-600 font-medium leading-relaxed text-xl whitespace-pre-line mb-10">
                {plan.description}
              </p>
              <div className="inline-flex items-center gap-4 bg-gray-900 text-white px-8 py-4 rounded-[20px] font-black uppercase text-sm tracking-widest">
                <Clock className="w-6 h-6 text-green-400" />
                {t("estimated_duration")}: {plan.duration || t("defaults.to_be_consulted")}
              </div>
            </section>

            {/* Incluye / No incluye */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-[40px] p-10 border-none">
                <div className="bg-green-400 w-fit p-3 rounded-2xl mb-6">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tighter">
                  {t("sections.includes")}
                </h4>
                <ul className="space-y-4">
                  {plan.includes?.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-gray-700 font-bold text-lg leading-tight">
                      <div className="mt-2 w-2 h-2 rounded-full bg-green-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50 rounded-[40px] p-10 border-none">
                <div className="bg-orange-400 w-fit p-3 rounded-2xl mb-6">
                  <ShieldAlert className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tighter">
                  {t("sections.not_includes")}
                </h4>
                <ul className="space-y-4">
                  {plan.notIncludes?.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-gray-500 font-bold text-lg leading-tight">
                      <div className="mt-2 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Configuración / Formulario */}
            <div className="bg-gray-50 rounded-[40px] p-10 md:p-14 border-none">
              <h3 className="text-3xl font-black text-gray-900 mb-10 uppercase tracking-tighter">
                {t("sections.config")}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-2">
                    <CalendarDays className="w-4 h-4" /> {t("form.date_label")}
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    className="w-full bg-white border-none p-5 rounded-2xl outline-none font-bold text-gray-900 focus:ring-4 focus:ring-green-400/20"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-2">
                    {t("form.pax_label")}
                  </label>
                  <div className="flex items-center bg-white rounded-2xl p-2 h-[64px]">
                    <button
                      onClick={() => setPax(Math.max(1, pax - 1))}
                      className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl hover:bg-orange-400 hover:text-white transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="flex-1 text-center font-black text-2xl text-gray-900">{pax}</span>
                    <button
                      onClick={() => setPax(pax + 1)}
                      className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl hover:bg-green-400 hover:text-white transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={added}
                  className={`h-[64px] rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 transition-all group ${
                    added ? 'bg-green-500 text-white' : 'bg-gray-900 text-white hover:bg-green-400'
                  }`}
                >
                  {added ? (
                    <CheckCircle2 className="w-6 h-6 animate-bounce" />
                  ) : (
                    <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  )}
                  {added ? t("form.button_added") : t("form.button_reserve")}
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-gray-900 rounded-[40px] p-12 text-white text-center border-none">
              <div className="w-20 h-20 bg-green-400 rounded-[24px] flex items-center justify-center mx-auto mb-8 -rotate-6">
                <Star className="w-10 h-10 text-white" fill="white" />
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">{t("sidebar.title")}</h3>
              <p className="text-gray-400 font-bold mb-10 text-lg leading-relaxed">
                {t("sidebar.description")}
              </p>
              <button className="w-full bg-white text-gray-900 py-6 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-orange-400 hover:text-white transition-all group">
                <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
                {t("sidebar.button")}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 border-t border-gray-100">
        <PagarCotizacion />
      </div>

      <Footer />
    </div>
  );
};