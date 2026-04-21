"use client";

import { useState, useEffect } from "react";
import { Link, useRouter, usePathname } from "@/i18n/routing"; 
import { Menu, ShoppingCart, ChevronDown, X } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { useTranslations, useLocale } from "next-intl";

export function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const [isExperienciasOpen, setIsExperienciasOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const { cartCount } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  const experiences = [
    { name: t("experiences.marriage_proposal"), href: "/experiencias/propuesta-de-matrimonio" },
    { name: t("experiences.photo_travel"), href: "/experiencias/experiencia-fotografica-viajera" },
    { name: t("experiences.romantic_picnic"), href: "/experiencias/experiencia-picnic-romantico-boho" },
    { name: t("experiences.private_boat"), href: "/experiencias/experiencias-paseo-privado-en-lancha" },
    { name: t("experiences.rooftop_dinner"), href: "/experiencias/cena-rooftop-secret-spot" },
    { name: t("experiences.hotel_decoration"), href: "/experiencias/decoracion-sorpresa-hotel-playa" },
  ];

  const toggleLanguage = (newLocale: "en" | "es") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image width={150} height={50} src={"/logo-full.png"} alt={"Logo"} priority />
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center">
            <Link href="/" className="px-4 py-2 text-gray-900 font-bold hover:bg-orange-400 hover:text-white rounded-full transition-all">
              {t("nav.home")}
            </Link>
            <Link href="/acerca" className="px-4 py-2 text-gray-900 font-bold hover:bg-orange-400 hover:text-white rounded-full transition-all">
              {t("nav.about")}
            </Link>

            <div
              className="relative group py-2"
              onMouseEnter={() => setIsExperienciasOpen(true)}
              onMouseLeave={() => setIsExperienciasOpen(false)}
            >
              <Link
                href="/experiencias"
                className={`flex items-center gap-1 px-4 py-2 text-gray-900 font-bold rounded-full transition-all ${isExperienciasOpen ? 'bg-orange-400 text-white' : 'hover:bg-orange-400 hover:text-white'}`}
              >
                {t("nav.experiences")}
                <ChevronDown className={`w-4 h-4 transition-transform ${isExperienciasOpen ? 'rotate-180' : ''}`} />
              </Link>

              {isExperienciasOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl border-4 border-orange-400 shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  <div className="py-2">
                    {experiences.map((exp) => (
                      <Link
                        key={exp.name}
                        href={exp.href as any}
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
              {t("nav.contact")}
            </Link>
          </nav>

          {/* Acciones Derecha */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center bg-gray-100 rounded-full p-1 border-2 border-gray-200">
              <button 
                onClick={() => toggleLanguage("en")}
                className={`px-3 py-1 text-xs font-black rounded-full transition-all ${locale === "en" ? "text-white bg-green-400 shadow-sm" : "hover:bg-white text-gray-600"}`}
              >
                EN
              </button>
              <button 
                onClick={() => toggleLanguage("es")}
                className={`px-3 py-1 text-xs font-black rounded-full transition-all ${locale === "es" ? "text-white bg-green-400 shadow-sm" : "hover:bg-white text-gray-600"}`}
              >
                ES
              </button>
            </div>

            <Link href="/cart">
              <button className="relative bg-orange-400 text-white p-3 rounded-xl hover:scale-110 active:scale-95 transition-all group shadow-lg shadow-orange-100">
                <ShoppingCart className="w-5 h-5 group-hover:rotate-12 transition-transform" />

                {mounted && cartCount > 0 && (
                  <span 
                    key={cartCount}
                    className="absolute -top-2 -right-2 bg-green-400 text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center font-black border-2 border-white animate-in zoom-in duration-300 shadow-md"
                  >
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>

            <button
              className="lg:hidden p-3 rounded-xl bg-green-400 text-white shadow-lg shadow-green-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white border-4 border-green-400 rounded-3xl overflow-hidden animate-in fade-in slide-in-from-top-4 shadow-2xl">
            <div className="p-6 flex flex-col gap-2">
              <Link onClick={() => setMobileMenuOpen(false)} href="/" className="p-3 font-black text-gray-900 hover:bg-orange-400 hover:text-white rounded-xl">
                {t("nav.home")}
              </Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/acerca" className="p-3 font-black text-gray-900 hover:bg-orange-400 hover:text-white rounded-xl">
                {t("nav.about")}
              </Link>
              <div className="bg-gray-50 rounded-2xl p-4 border-2 border-dashed border-green-400">
                <p className="font-black text-orange-400 block mb-3 px-3">
                  {t("nav.mobile_exp_title")}
                </p>
                <div className="grid gap-2">
                  {experiences.map((exp) => (
                    <Link 
                        key={exp.name} 
                        href={exp.href as any} 
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm font-bold text-gray-700 hover:text-green-400 px-3 py-1"
                    >
                        {exp.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link onClick={() => setMobileMenuOpen(false)} href="/contacto" className="p-3 font-black text-gray-900 hover:bg-orange-400 hover:text-white rounded-xl">
                {t("nav.contact")}
              </Link>
              
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-100 mt-2">
                <button onClick={() => toggleLanguage("en")} className={`font-black ${locale === 'en' ? 'text-green-400' : 'text-gray-400'}`}>EN</button>
                <span className="text-gray-300">|</span>
                <button onClick={() => toggleLanguage("es")} className={`font-black ${locale === 'es' ? 'text-green-400' : 'text-gray-400'}`}>ES</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}