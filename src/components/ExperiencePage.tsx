"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  CheckCircle2,
  Info,
  Star,
  Clock,
  Calendar,
  Send,
  Plus,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { CustomQuoteSection } from "./CustomQuoteSection";
import { PagarCotizacion } from "./PagarCotizacion";
import { PlanDetailModal } from "./PlanDetailModal";

const IconMap = {
  map: MapPin,
  check: CheckCircle2,
  info: Info,
  star: Star,
  clock: Clock,
  calendar: Calendar,
};

interface Plan {
  slug: string;
  name: string;
  price: number;
  description: string;
  backgroundImage: string;
  color: string;
  features: string[];
  duration?: string;
  includes?: string[];
  notIncludes?: string[];
}

interface ExperiencePageProps {
  title: string;
  slug?: string;
  subtitle?: string;
  description?: string;
  heroImage: string;
  image2?: string;
  infoLists?: {
    title: string;
    icon: keyof typeof IconMap;
    items: string[];
    isOpen?: boolean;
  }[];
  idealSectionTitle?: string;
  idealPara?: {
    image: string;
    title: string;
    items: string[];
  }[];
  plans: Plan[];
  cotizacion?: {
    background: string;
    title: string;
    description: string;
    lists: {
      subtitle: string;
      items: string[];
    }[];
  };
}

export function ExperiencePage({
  title,
  subtitle,
  description,
  heroImage,
  image2,
  slug,
  infoLists = [],
  idealPara = [],
  plans = [],
  cotizacion,
  idealSectionTitle
}: ExperiencePageProps) {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  useEffect(() => {
    if (selectedPlan) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedPlan]);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 1. Hero Section - Bloque de impacto */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url('${heroImage}')` }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 bg-white p-8 md:p-16 rounded-[40px] mx-4 max-w-4xl border-none">
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 text-center uppercase tracking-tighter leading-none">
            {title}
          </h1>
        </div>
      </section>

      {/* 2. Sección Informativa - Contraste Limpio */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <div className="bg-orange-400 w-20 h-2 rounded-full" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-none uppercase">
              {subtitle || title}
            </h2>
            <p className="text-gray-600 text-xl font-medium leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>

          <div className="space-y-4">
            {infoLists.map((list, index) => {
              const IconComponent = IconMap[list.icon] || Info;
              return (
                <details 
                  key={index} 
                  className="group bg-gray-50 rounded-[32px] overflow-hidden transition-all open:bg-green-50" 
                  open={list.isOpen}
                >
                  <summary className="list-none flex justify-between items-center cursor-pointer p-8 font-black text-gray-900 text-xl uppercase tracking-tight">
                    <div className="flex items-center gap-4">
                      <div className="bg-white p-3 rounded-2xl group-open:bg-green-400 group-open:text-white transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {list.title}
                    </div>
                    <Plus className="group-open:rotate-45 transition-transform w-8 h-8 text-gray-400" />
                  </summary>
                  <div className="px-8 pb-8">
                    <ul className="grid grid-cols-1 gap-4">
                      {list.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white/50 p-4 rounded-2xl border border-white">
                          <CheckCircle2 className="text-green-400 w-5 h-5 shrink-0" />
                          <span className="text-gray-700 font-bold text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Ideal Para - Slider Estilizado */}
      {idealPara.length > 0 && (
        <section className="py-24 bg-gray-900 rounded-[60px] mx-4 my-12 overflow-hidden">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="space-y-4">
                <span className="bg-green-400 text-white px-6 py-2 rounded-full font-black uppercase text-sm tracking-widest">
                  Perfiles
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-none">
                  {idealSectionTitle ?? "Ideal para"}
                </h2>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => document.getElementById('slider-ideal')?.scrollBy({ left: -432, behavior: 'smooth' })}
                  className="p-6 rounded-2xl bg-white/10 text-white hover:bg-white hover:text-gray-900 transition-all"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={() => document.getElementById('slider-ideal')?.scrollBy({ left: 432, behavior: 'smooth' })}
                  className="p-6 rounded-2xl bg-white/10 text-white hover:bg-white hover:text-gray-900 transition-all"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
            </div>

            <div
              id="slider-ideal"
              className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth"
            >
              {idealPara.map((card, i) => (
                <div
                  key={i}
                  className="w-[320px] md:w-[450px] flex-shrink-0 bg-white rounded-[40px] overflow-hidden snap-center group border-none"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <div className="p-10">
                    <h3 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tighter leading-none">
                      {card.title}
                    </h3>
                    <ul className="space-y-4">
                      {card.items.map((li, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start gap-4 font-bold text-lg leading-tight">
                          <Sparkles className="w-6 h-6 text-orange-400 shrink-0" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Planes - Cards de Color Sólido */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-fixed bg-center" 
            style={{ backgroundImage: `url('${image2 || heroImage}')` }}
          />
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
              Nuestros Planes
            </h2>
            <div className="bg-green-400 w-24 h-3 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className="rounded-[40px] p-12 text-center text-white flex flex-col items-center transition-transform hover:-translate-y-4 border-none" 
                style={{ backgroundColor: plan.color }}
              >
                <div className="bg-white/20 p-4 rounded-2xl mb-8">
                  <ShieldCheck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter">{plan.name}</h3>
                <p className="text-sm font-black tracking-widest opacity-90 mb-10 uppercase bg-black/10 px-4 py-2 rounded-lg">
                  {plan.description}
                </p>
                
                <div className="mt-auto w-full">
                  <div className="text-5xl font-black mb-2 tracking-tighter">
                    <span className="text-2xl">$</span>
                    {plan.price.toLocaleString()}
                  </div>
                  <p className="text-xs font-black tracking-[0.2em] opacity-80 mb-10 uppercase">MXN • IVA INCLUIDO</p>
                  
                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className="w-full bg-white text-gray-900 py-6 rounded-2xl font-black uppercase tracking-widest text-lg hover:bg-gray-900 hover:text-white transition-all shadow-none"
                  >
                    VER DETALLES
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPONENTES DINÁMICOS RESTANTES */}
      {selectedPlan && (
        <PlanDetailModal
          plan={selectedPlan}
          
          exp={{
            name: title,
            slug: slug ?? title
          }}
          
          onClose={() => setSelectedPlan(null)}
        />
      )}

      {cotizacion && <CustomQuoteSection data={cotizacion} />}

      <div className="py-20">
        <PagarCotizacion />
      </div>
      
      <Footer />
    </main>
  );
}