import { ExperiencePage } from "@/components/ExperiencePage";
import { Icon } from "lucide-react";
import { title } from "process";

export default function ExperienciaFotograficaPage() {
    const data = {
        title: "Experiencia Fotográfica Viajera en México",
        slug: "fotografica-viajera",
        subtitle: "Convierte tus viajes en recuerdos eternos",
        heroImage: "/images/fotografia-hero.jpg", // Reemplazar con tu ruta real
        image2: "/images/fotografia-planes-bg.jpg",
        description: `Te ofrecemos una experiencia fotográfica profesional diseñada para capturar tu esencia en escenarios únicos de México. Ya sea en ciudades vibrantes, playas paradisíacas o encantadores Pueblos Mágicos, creamos imágenes que cuentan tu historia con estilo, naturalidad y emoción.

Trabajamos en distintas ciudades y destinos dentro de México, adaptando cada sesión al entorno, la luz y la arquitectura del lugar. Desde calles coloniales llenas de color hasta paisajes naturales impresionantes.`,

        infoLists: [
            {
                title: "Destinos Disponibles",
                icon: "map" as const,
                items: [
                    "Ciudad de México (Centro Histórico, Roma, Coyoacán, Xochimilco)",
                    "Guadalajara",
                    "Monterrey",
                    "Puebla",
                    "Querétaro",
                    "Mérida",
                ],
                isOpen: true
            },
            {
                title: "Destinos de playa",
                icon: "star" as const,
                items: [
                    "Cancún",
                    "Tulum",
                    "Playa del Carmen",
                    "Puerto Vallarta",
                    "Los Cabos",
                    "Mazatlán",
                ]
            },
            {
                title: "Pueblos Mágicos ideales para sesión",
                Icon: "map",
                items: [
                    "San Miguel de Allende",
                    "Valle de Bravo",
                    "Tepoztlán",
                    "Bacalar",
                    "Bernal",
                    "Huasca de Ocampo",
                ]
            }
        ],



        plans: [
            {
                slug: "mini-sesion-express",
                name: "Mini Sesión Express Viajera",
                price: 2500,
                color: "#F4845F", // Un tono coral/naranja suave
                backgroundImage: "/images/plan-mini.jpg",
                duration: "45 Minutos",
                description: "Perfecta para recuerdos espontáneos, contenido natural para redes sociales o un vistazo rápido de tu viaje en un solo spot.",
                features: ["15 Fotos editadas", "1 Locación", "Entrega en 3 días"],
                includes: [
                    "Sesión fotográfica de 45 min",
                    "15 Fotografías en alta resolución",
                    "Edición digital básica (color y luz)",
                    "Galería digital privada",
                    "Uso de 1 outfit"
                ],
                notIncludes: [
                    "Maquillaje y peinado",
                    "Cambios de outfit ilimitados",
                    "Transporte entre locaciones",
                    "Impresiones físicas"
                ]
            },
            {
                slug: "sesion-viajera-media",
                name: "Sesión Fotográfica Viajera Media",
                price: 10500,
                color: "#273449", // Tu color azul profundo
                backgroundImage: "/images/plan-media.jpg",
                duration: "2 a 3 Horas",
                description: "Una experiencia diseñada para capturar tu esencia en escenarios inolvidables, ideal para parejas o viajeros que buscan variedad.",
                features: ["45 Fotos editadas", "2-3 Locaciones", "Asesoría de Outfits"],
                includes: [
                    "Sesión de hasta 3 horas",
                    "45 Fotografías con edición avanzada",
                    "Cambio de hasta 2 outfits",
                    "Múltiples puntos dentro de una zona",
                    "Asesoría previa de locaciones",
                    "Entrega en 5 días hábiles"
                ],
                notIncludes: [
                    "Viáticos fuera de CDMX/Zona base",
                    "Entradas a museos o recintos privados",
                    "Video profesional (disponible como extra)"
                ]
            },
            {
                slug: "experiencia-premium",
                name: "Experiencia Fotográfica Viajera Premium",
                price: 15600,
                color: "#E63946", // Rojo vibrante para resaltar el Premium
                backgroundImage: "/images/plan-premium.jpg",
                duration: "Media Jornada (5-6 Horas)",
                description: "Una producción completa para capturar tu historia con estilo cinematográfico y máxima variedad de escenarios.",
                features: ["90 Fotos editadas", "Producción Cinematográfica", "Edición Fine Art"],
                includes: [
                    "Sesión de media jornada",
                    "90 Fotografías con retoque de alta gama",
                    "Cambios de outfit ilimitados",
                    "Storytelling fotográfico completo",
                    "Asesoría integral de concepto visual",
                    "Prioridad de entrega (48 hrs)"
                ],
                notIncludes: [
                    "Hospedaje de fotógrafo (si aplica)",
                    "Renta de equipo especial (Drones de cine)",
                    "Maquillaje profesional (opcional)"
                ]
            }
        ],

        cotizacion: {
            background: "/images/quote-bg-photo.jpg",
            title: "Cotización Personalizada – Fotografía",
            description: "Si tu destino no se encuentra en nuestra lista, indícanos la ciudad, playa o Pueblo Mágico de tu preferencia para enviarte una cotización personalizada.",
            lists: [
                {
                    subtitle: "Factores de Logística",
                    items: ["Traslados y Viáticos", "Permisos de locación", "Días de producción", "Número de personas"]
                }
            ]
        }
    };

    return <ExperiencePage {...data} idealSectionTitle="¿Qué hace diferente esta experiencia?" idealPara={[
        {
            title: " ",
            items: [
                "Planeación personalizada según el destino",
                "Asesoría de vestuario para armonizar con el entorno",
                "Dirección profesional durante toda la sesión",
                "Edición cuidada que resalta luz, color y detalles",
                "Entrega digital privada y segura",
            ],
            image: "https://plus.unsplash.com/premium_photo-1674389991679-e1a7a0b3e0a7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: " ",
            items: ["Cada sesión está pensada para parejas, viajeras, celebraciones especiales, cumpleaños, aniversarios, viajes con amigas o simplemente para regalarte un recuerdo inolvidable."],
            image: "https://plus.unsplash.com/premium_photo-1674389991679-e1a7a0b3e0a7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "No es solo una sesión de fotos.",
            items: ["Es una forma de capturar momentos irrepetibles en los lugares más especiales de México."],
            image: "https://plus.unsplash.com/premium_photo-1674389991679-e1a7a0b3e0a7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Contáctanos",
            items: [" y diseñemos juntos tu experiencia fotográfica en el destino que tengas en mente."],
            image: "https://plus.unsplash.com/premium_photo-1674389991679-e1a7a0b3e0a7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]} />;
}