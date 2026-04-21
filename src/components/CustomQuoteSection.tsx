"use client";

import { Send, Sparkles, Globe, Loader2, CheckCircle2 } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { useTranslations } from "next-intl";

interface CustomQuoteProps {
  data?: {
    background: string;
    title: string;
    description: string;
    lists: {
      subtitle: string;
      items: string[];
    }[];
  };
  visibleFields?: {
    name?: boolean;
    email?: boolean;
    date?: boolean;
    location?: boolean;
    groupType?: boolean;
    message?: boolean;
  };
}

export function CustomQuoteSection({ data, visibleFields }: CustomQuoteProps) {
  const t = useTranslations("CustomQuote");
  const { formData, loading, status, handleChange, handleSubmit } = useContactForm();

  const fields = {
    name: visibleFields?.name ?? true,
    email: visibleFields?.email ?? true,
    date: visibleFields?.date ?? true,
    location: visibleFields?.location ?? true,
    groupType: visibleFields?.groupType ?? true,
    message: visibleFields?.message ?? true,
  };

  const title = data?.title || t("default_data.title");
  const bgImage = data?.background || "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80";
  const description = data?.description || t("default_data.description");

  return (
    <section className="relative py-24 overflow-hidden min-h-[800px] flex items-center">
      {/* Background con Blur */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna de Información */}
          <div className="text-white space-y-10">
            <div>
              <span className="bg-orange-400 text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest">
                {t("tag")}
              </span>
              <h2 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
                {title}
              </h2>
              <p className="mt-6 text-xl font-medium text-gray-200 leading-relaxed max-w-xl">
                {description}
              </p>
            </div>

            <div className="grid gap-8">
              {data?.lists.map((list, idx) => (
                <div key={idx} className="bg-white/10 p-8 rounded-[32px] border border-white/10">
                  <p className="font-black mb-4 uppercase tracking-wider text-orange-400 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    {list.subtitle}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {list.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-100 font-bold text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-none border-none">
            {status === "success" ? (
              <div className="py-20 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 uppercase">{t("status.success_title")}</h3>
                <p className="text-gray-500 font-bold">{t("status.success_message")}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="text-gray-900 font-black underline underline-offset-4"
                >
                  {t("status.retry_button")}
                </button>
              </div>
            ) : (
              <>
                <div className="mb-10 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-[20px] mb-6">
                    <Globe className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 uppercase">
                    {t("form_header.title")}
                  </h3>
                  <p className="text-gray-500 font-bold mt-2">{t("form_header.subtitle")}</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {fields.name && (
                      <input 
                        required
                        type="text" 
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder={t("placeholders.name")} 
                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-green-400/20 outline-none font-bold text-gray-900" 
                      />
                    )}
                    {fields.email && (
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("placeholders.email")} 
                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-green-400/20 outline-none font-bold text-gray-900" 
                      />
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {fields.date && (
                      <input 
                        required
                        type="date" 
                        name="fecha"
                        value={formData.fecha}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-green-400/20 outline-none font-bold text-gray-500" 
                      />
                    )}
                    {fields.location && (
                      <input 
                        type="text" 
                        name="destino"
                        value={formData.destino}
                        onChange={handleChange}
                        placeholder={t("placeholders.location")} 
                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-green-400/20 outline-none font-bold text-gray-900" 
                      />
                    )}
                  </div>

                  {fields.groupType && (
                    <div className="relative">
                      <select 
                        name="tipoGrupo"
                        value={formData.tipoGrupo}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-green-400/20 outline-none font-bold text-gray-600 appearance-none"
                      >
                        <option value="">{t("options.group_type.label")}</option>
                        <option value="individual">{t("options.group_type.individual")}</option>
                        <option value="pareja">{t("options.group_type.couple")}</option>
                        <option value="grupo">{t("options.group_type.group")}</option>
                      </select>
                      <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                        <div className="w-2 h-2 border-b-2 border-r-2 border-gray-400 rotate-45" />
                      </div>
                    </div>
                  )}

                  {fields.message && (
                    <textarea 
                      required
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder={t("placeholders.message")} 
                      rows={4} 
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-green-400/20 outline-none font-bold text-gray-900 resize-none" 
                    />
                  )}

                  <button 
                    type="submit" 
                    disabled={loading}
                    className={`w-full ${loading ? 'bg-gray-400' : 'bg-gray-900 hover:bg-orange-400'} text-white py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 group disabled:cursor-not-allowed`}
                  >
                    {loading ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <>
                        {t("submit_button")}
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  {status === "error" && (
                    <p className="text-red-500 text-center font-bold text-sm mt-2">
                      {t("status.error_message")}
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}