"use client";
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCart } from '@/hooks/useCart'; // Importamos el hook
import { CartItem } from '@/interfaces/cart/CartItem';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface PaymentFormData {
    nombre: string;
    email: string;
    folio: string;
    costoBase: number;
}

const PaymentForm = () => {
    const { addItem } = useCart(); // Hook del carrito
    const [isAdded, setIsAdded] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm<PaymentFormData>();
    const costoBase = watch('costoBase') || 0;

    // Cálculo de IVA (16%)
    const iva = costoBase * 0.16;
    const total = Number(costoBase) + iva;

    const onSubmit = (data: PaymentFormData) => {
        // Creamos el objeto CartItem basado en la cotización externa
        const customItem: CartItem = {
            experience_slug: "custom-quote",
            experience_name: "Experiencia Personalizada",
            plan_name: `Folio: ${data.folio}`,
            plan_duration: "A convenir",
            fecha: new Date().toISOString().split('T')[0], // Fecha actual como referencia
            personas: 1,

            // Datos específicos de la cotización
            nombre: data.nombre,
            email: data.email,
            cotization_folio: data.folio,

            // El precio es el TOTAL (Subtotal + IVA)
            price: total
        };

        addItem(customItem);
        setIsAdded(true);

        // Feedback visual
        setTimeout(() => setIsAdded(false), 3000);
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 py-20">
                <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">

                    {/* Encabezado */}
                    <div className="bg-orange-500 p-6 text-white text-center">
                        <h2 className="text-2xl font-bold uppercase tracking-tighter">Tu Experiencia Personalizada</h2>
                        <p className="text-orange-100 text-sm mt-2 font-medium">
                            Ingresa los datos de tu cotización para proceder al pago seguro.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-5">

                        {/* Status Message */}
                        {isAdded && (
                            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="text-sm font-bold">Cotización agregada al carrito</span>
                            </div>
                        )}

                        {/* Nombre */}
                        <div>
                            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Nombre Completo</label>
                            <input
                                {...register("nombre", { required: "El nombre es obligatorio" })}
                                className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-4 focus:ring-orange-500/10 outline-none transition-all font-bold ${errors.nombre ? 'border-red-500' : 'border-transparent focus:border-orange-500'}`}
                                placeholder="Juan Pérez"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Correo Electrónico</label>
                            <input
                                type="email"
                                {...register("email", { required: "El correo es obligatorio" })}
                                className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-4 focus:ring-orange-500/10 outline-none transition-all font-bold ${errors.email ? 'border-red-500' : 'border-transparent focus:border-orange-500'}`}
                                placeholder="ejemplo@correo.com"
                            />
                        </div>

                        {/* Folio */}
                        <div>
                            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Número de Folio</label>
                            <input
                                {...register("folio", { required: "El folio es necesario" })}
                                className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-4 focus:ring-orange-500/10 outline-none transition-all font-bold ${errors.folio ? 'border-red-500' : 'border-transparent focus:border-orange-500'}`}
                                placeholder="EXP-12345"
                            />
                        </div>

                        <hr className="border-gray-100" />

                        {/* Costo y Desglose */}
                        <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                            <label className="block text-xs font-black text-orange-800 uppercase tracking-widest mb-2">Costo Acordado (Subtotal)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-3.5 text-orange-400 font-bold">$</span>
                                <input
                                    type="number"
                                    step="0.01"
                                    {...register("costoBase", { required: true, min: 1 })}
                                    className="w-full pl-8 pr-4 py-3 bg-white border border-orange-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 outline-none font-bold text-gray-900"
                                    placeholder="0.00"
                                />
                            </div>

                            <div className="mt-4 space-y-2 text-sm">
                                <div className="flex justify-between text-orange-700/70 font-medium">
                                    <span>IVA (16%):</span>
                                    <span>${iva.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
                                </div>
                                <div className="flex justify-between font-black text-gray-900 text-lg border-t border-orange-200 pt-2 mt-2">
                                    <span>Total:</span>
                                    <span>${total.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
                                </div>
                            </div>
                        </div>

                        {/* Botón de Acción */}
                        <button
                            type="submit"
                            disabled={isAdded}
                            className={`w-full font-black py-4 rounded-xl shadow-lg transition-all transform active:scale-[0.98] uppercase tracking-widest ${isAdded ? 'bg-green-500 text-white' : 'bg-gray-900 hover:bg-orange-600 text-white'
                                }`}
                        >
                            {isAdded ? 'Agregado al Carrito' : 'Agregar al carrito'}
                        </button>

                        <p className="text-center text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-4">
                            Pago Seguro vía Keycop Online
                        </p>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PaymentForm;