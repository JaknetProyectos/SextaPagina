"use client";

import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function PagarCotizacion() {
    const t = useTranslations("QuoteCTA");

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                        {t("title")}
                    </h2>
                    <Link
                        href="/pagar-envio"
                        className="inline-flex items-center gap-2 bg-orange-400 text-white px-8 py-4 rounded-2xl font-black hover:bg-green-400 transition-all text-lg shadow-lg shadow-orange-100"
                    >
                        {t("button")}
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}