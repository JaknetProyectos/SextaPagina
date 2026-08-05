"use client";

import { Phone, Mail, ShieldCheck, MapPin } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-[#181e2b] text-white overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Información de Contacto */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-green-400 p-3 rounded-2xl">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg md:text-xl font-bold leading-relaxed text-gray-300">
                {t("contact.address.street")} <br />
                {t("contact.address.city")}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="tel:+5215555464355"
                className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl hover:bg-green-400/20 transition-all border border-white/10 group"
              >
                <Phone className="w-6 h-6 text-green-400" />
                <span className="font-black text-lg">+52 1 55 5546 4355</span>
              </Link>
              <Link
                href="mailto:contacto@turivana.com"
                className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl hover:bg-orange-400/20 transition-all border border-white/10"
              >
                <Mail className="w-6 h-6 text-orange-400" />
                <span className="font-black text-lg">contacto@turivana.com</span>
              </Link>
            </div>
          </div>

          {/* Métodos de Pago y Seguridad */}
          <div className="flex flex-col lg:items-end justify-center gap-6">
            <div className="bg-white rounded-[32px] p-8 w-full max-w-sm border-none">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-green-400" />
                <p className="text-gray-900 font-black uppercase text-sm tracking-widest">
                  {t("payment.secure_title")}
                </p>
              </div>
              
              <div className="flex gap-4 justify-center items-center">
                <div className="bg-gray-50 p-4 rounded-2xl flex-1 flex items-center justify-center border border-gray-100">
                  <Image src="/visa.png" alt="Visa" width={60} height={30} className="object-contain" />
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl flex-1 flex items-center justify-center border border-gray-100">
                  <Image src="/mastercard.png" alt="Mastercard" width={50} height={30} className="object-contain" />
                </div>
              </div>
              <p className="text-gray-400 text-center text-xs font-bold mt-4 uppercase">
                {t("payment.cards_accepted")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Franja Inferior */}
      <div className="bg-black py-10 px-6 border-t border-white/5">
        <div className="container mx-auto">
          {/* Logo Footer */}
          <div className="flex justify-center mb-8">
            <Image src="/logo-full-trans.png" alt="Turivana" width={160} height={50} className="brightness-200" />
          </div>

          {/* Enlaces Legales */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-8">
            {[
              { name: t("legal.privacy"), href: "/legal/privacidad" },
              { name: t("legal.terms"), href: "/legal/terminos" },
              { name: t("legal.refunds"), href: "/legal/reembolsos" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href as any}
                className="text-gray-500 hover:text-green-400 font-bold text-sm uppercase tracking-widest transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center text-gray-600 text-[10px] sm:text-xs font-bold tracking-tighter uppercase">
            © 2026 <span className="text-orange-400">TURIVANA</span> - {t("copyright.motto")}. {t("copyright.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}