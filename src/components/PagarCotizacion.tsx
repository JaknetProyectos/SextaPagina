import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";

export function PagarCotizacion() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#273449]">
                        ¿Ya tienes una cotización?
                    </h2>
                    <Link
                        href="/pagar-envio"
                        className="inline-flex items-center gap-2 bg-[#F4845F] text-white px-8 py-4 rounded-full font-medium hover:bg-[#e67350] transition-colors text-lg"
                    >
                        Paga tu experiencia
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}