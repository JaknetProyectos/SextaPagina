"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, ChevronDown, X, Globe } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";

const experiences = [
  { name: "Experiencia Propuesta de Matrimonio", href: "/experiencias/propuesta-de-matrimonio" },
  { name: "Experiencia Fotográfica Viajera en México", href: "/experiencias/experiencia-fotografica-viajera" },
  { name: "Experiencia Picnic Romántico / Boho en México", href: "/experiencias/experiencia-picnic-romantico-boho" },
  { name: "Experiencias Paseo Privado en Lancha", href: "/experiencias/experiencias-paseo-privado-en-lancha" },
  { name: "Cena Rooftop Secret Spot", href: "/experiencias/cena-rooftop-secret-spot" },
  { name: "Decoración Sorpresa Hotel / Playa", href: "/experiencias/decoracion-sorpresa-hotel-playa" },
];

export function Header() {
  const [isExperienciasOpen, setIsExperienciasOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart()

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">

          {/* Logo - Sin fondos extraños */}
          <Link href="/" className="flex-shrink-0">
            <Image width={150} height={50} src={"/logo-full.png"} alt={"Logo"} priority />
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center">
            <Link href="/" className="px-4 py-2 text-gray-900 font-bold hover:bg-orange-400 hover:text-white rounded-full transition-all">
              Inicio
            </Link>
            <Link href="/acerca" className="px-4 py-2 text-gray-900 font-bold hover:bg-orange-400 hover:text-white rounded-full transition-all">
              Acerca
            </Link>

            {/* Dropdown Experiencias */}
            <div
              className="relative group py-2" // El padding asegura que el mouse no "salga" del área
              onMouseEnter={() => setIsExperienciasOpen(true)}
              onMouseLeave={() => setIsExperienciasOpen(false)}
            >
              <Link
                href="/experiencias"
                className={`flex items-center gap-1 px-4 py-2 text-gray-900 font-bold rounded-full transition-all ${isExperienciasOpen ? 'bg-orange-400 text-white' : 'hover:bg-orange-400 hover:text-white'}`}
              >
                Experiencias
                <ChevronDown className={`w-4 h-4 transition-transform ${isExperienciasOpen ? 'rotate-180' : ''}`} />
              </Link>

              {isExperienciasOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl border-4 border-orange-400 shadow-none z-50 overflow-hidden">
                  <div className="py-2">
                    {experiences.map((exp) => (
                      <Link
                        key={exp.name}
                        href={exp.href}
                        className="block px-4 py-3 text-sm font-bold text-gray-800 hover:bg-green-400 hover:text-white transition-colors"
                      >
                        {exp.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/contacto" className="px-4 py-2 text-gray-900 font-bold hover:bg-orange-400 hover:text-white rounded-full transition-all">
              Contacto
            </Link>
          </nav>

          {/* Acciones Derecha */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center bg-gray-100 rounded-full p-1 border-2 border-gray-200">
              <button className="px-3 py-1 text-xs font-black rounded-full hover:bg-white transition-all">EN</button>
              <button className="px-3 py-1 text-xs font-black text-white bg-green-400 rounded-full shadow-sm">ES</button>
            </div>

            <Link href="/cart">
              <button className="relative bg-orange-400 text-white p-3 rounded-xl hover:scale-110 transition-transform group">
                <ShoppingCart className="w-5 h-5 group-hover:rotate-12 transition-transform" />

                {/* El Badge solo se muestra o cambia de color si hay items */}
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-400 text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center font-black border-2 border-white animate-in zoom-in duration-300">
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>

            <button
              className="lg:hidden p-3 rounded-xl bg-green-400 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú Móvil - Responsive y Redondeado */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white border-4 border-green-400 rounded-3xl overflow-hidden animate-in fade-in slide-in-from-top-4">
            <div className="p-6 flex flex-col gap-2">
              <Link href="/" className="p-3 font-black text-gray-900 hover:bg-orange-400 hover:text-white rounded-xl">Inicio</Link>
              <Link href="/acerca" className="p-3 font-black text-gray-900 hover:bg-orange-400 hover:text-white rounded-xl">Acerca de</Link>
              <div className="bg-gray-50 rounded-2xl p-4 border-2 border-dashed border-green-400">
                <Link href="/experiencias" className="font-black text-orange-400 block mb-3">Nuestras Experiencias</Link>
                <div className="grid gap-2">
                  {experiences.map((exp) => (
                    <Link key={exp.name} href={exp.href} className="text-sm font-bold text-gray-700 hover:text-green-400">{exp.name}</Link>
                  ))}
                </div>
              </div>
              <Link href="/contacto" className="p-3 font-black text-gray-900 hover:bg-orange-400 hover:text-white rounded-xl">Contacto</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}