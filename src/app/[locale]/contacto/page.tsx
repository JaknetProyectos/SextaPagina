// @/app/contacto/page.tsx
"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, Sparkles, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

export default function ContactoPage() {
  const { formData, loading, status, handleChange, handleSubmit } = useContactForm();

  const extrasOpcionales = [
    "Video profesional", "Maquilladores y estilistas", "Músicos en vivo",
    "Toma aérea con dron", "Chef en vivo", "Postres o menú adicional",
    "Decoración especial temática", "Transporte privado", "Extensión de tiempo"
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1920&q=80" className="w-full h-full object-cover" alt="Hero"/>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 bg-white px-10 py-6 rounded-[30px] text-center shadow-none mx-4">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase">Cómo podemos ayudarte</h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="bg-gray-50 rounded-[40px] p-8 md:p-12 border-none shadow-sm">
              <div className="mb-10 text-center lg:text-left">
                <p className="text-gray-600 font-bold text-lg leading-relaxed">Cada experiencia puede ajustarse y escalarse según el nivel de producción que desees.</p>
              </div>

              {status === "success" ? (
                <div className="bg-green-100 border border-green-200 p-8 rounded-3xl text-center space-y-4 animate-in fade-in zoom-in">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                  <h3 className="text-2xl font-black text-green-900 uppercase">¡Mensaje Enviado!</h3>
                  <p className="text-green-800 font-medium">Nos pondremos en contacto contigo muy pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 font-bold mb-4">
                      <AlertCircle className="w-5 h-5" /> Error 404 o de conexión. Revisa la ruta de la API.
                    </div>
                  )}
                  <input type="text" name="nombre" required value={formData.nombre} onChange={handleChange} placeholder="Nombre completo" className="w-full px-6 py-4 bg-white border-none rounded-2xl focus:ring-4 focus:ring-green-400/20 outline-none font-bold text-gray-900" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Correo electrónico" className="w-full px-6 py-4 bg-white border-none rounded-2xl focus:ring-4 focus:ring-green-400/20 outline-none font-bold text-gray-900" />
                    <input type="tel" name="telefono" required value={formData.telefono} onChange={handleChange} placeholder="Teléfono (WhatsApp)" className="w-full px-6 py-4 bg-white border-none rounded-2xl focus:ring-4 focus:ring-green-400/20 outline-none font-bold text-gray-900" />
                  </div>
                  <input type="date" name="fecha" required value={formData.fecha} onChange={handleChange} className="w-full px-6 py-4 bg-white border-none rounded-2xl focus:ring-4 focus:ring-green-400/20 outline-none font-bold text-gray-500" />
                  <textarea name="mensaje" required value={formData.mensaje} onChange={handleChange} placeholder="Cuéntanos sobre tu evento o dudas..." rows={5} className="w-full px-6 py-4 bg-white border-none rounded-2xl focus:ring-4 focus:ring-green-400/20 outline-none font-bold text-gray-900 resize-none" />
                  <button type="submit" disabled={loading} className={`w-full ${loading ? 'bg-gray-400' : 'bg-gray-900 hover:bg-orange-400'} text-white py-5 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3 group`}>
                    {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>ENVIAR MENSAJE <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-10">
              <div className="bg-green-50 rounded-[40px] p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-400 rounded-bl-full opacity-10" />
                <div className="flex items-center gap-4 mb-6"><div className="bg-green-400 p-3 rounded-2xl"><Calendar className="w-8 h-8 text-white" /></div><h3 className="text-2xl font-black text-gray-900 uppercase">Reservaciones</h3></div>
                <div className="space-y-4"><p className="text-gray-900 font-black text-lg">Recomendamos realizar tu reservación con mínimo una semana de anticipación.</p></div>
              </div>
              <div className="bg-orange-50 rounded-[40px] p-10 border-none">
                <div className="flex items-center gap-4 mb-6"><div className="bg-orange-400 p-3 rounded-2xl"><Sparkles className="w-8 h-8 text-white" /></div><h3 className="text-2xl font-black text-gray-900 uppercase">Extras Opcionales</h3></div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                  {extrasOpcionales.map((extra) => (<li key={extra} className="flex items-center gap-3 font-black text-gray-700 text-sm"><div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0" />{extra}</li>))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}