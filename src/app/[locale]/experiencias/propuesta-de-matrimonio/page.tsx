import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExperiencePage } from "@/components/ExperiencePage";

export default function Page() {

    return (
        <main className="min-h-screen">
            <ExperiencePage

                heroImage="https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                plans={[
                    {
                        color: "#f5d42c",
                        description: "Ideal para una propuesta íntima con producción cuidada.",
                        name: "Propuesta Esencial",
                        price: 20600,
                        features: [],
                        includes: [
                            "Planeación y asesoría personalizada",
                            "Decoración temática romántica",
                            "Iluminación LED ambiental",
                            "Coordinación el día del evento",
                            "Fotógrafo profesional 2 horas",
                            "10 fotografías editadas",
                        ],
                        notIncludes: [
                            "Transporte fuera de la ciudad",
                            "Videógrafo profesional (MXN $5,000)",
                            "Dron (MXN $2,500)",
                            "Alojamiento si aplica",
                        ],
                        duration: "4 horas de experiencia con hasta 2 semanas de planeación",
                        slug: "matrimonio-essential",
                        backgroundImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    },
                    {
                        color: "#f5d42c",
                        description: "Mayor producción visual y cobertura completa del momento.",
                        name: "Propuesta Signature",
                        price: 28900,
                        includes: [
                            "Concepto creativo personalizado (moodboard previo)",
                            "Decoración romántica ampliada (flores naturales, velas decorativas, letrero personalizado)",
                            "Iluminación especial",
                            "Coordinación sorpresa estratégica",
                            "Fotógrafo profesional 2 horas",
                            "16 fotografías editadas",
                            "Video highlight (1 minuto)",
                            "Asistencia completa durante el evento",
                        ],
                        notIncludes: [
                            "Transporte y alojamiento fuera de ciudad",
                            "Dron (cotización adicional si se requiere)",
                        ],
                        duration: "4 horas de experiencia con planeación personalizada",
                        features: [],
                        slug: "matrimonio-signature",
                        backgroundImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    },
                    {
                        color: "#f5d42c",
                        description: "Diseñada para destinos especiales y producciones de alto impacto.",
                        name: "Luxury Experience",
                        duration: "Experiencia personalizada (hasta 5 horas) con planeación estratégica extendida",
                        includes: [
                            "Diseño conceptual completo",
                            "Decoración premium abundante (floral de alto nivel, iluminación escénica, montaje especial)",
                            "Coordinación sorpresa integral",
                            "Fotógrafo profesional 4 horas",
                            "Videógrafo profesional",
                            "Video cinematic editado",
                            "Toma aérea con dron",
                            "Asistencia logística completa",
                            "Coordinación con hotel o venue",
                        ],
                        notIncludes: [
                            "Transporte y hospedaje en destino (si aplica)"
                        ],
                        price: 45000,
                        features: [],
                        slug: "matrimonio-luxury",
                        backgroundImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                ]}
                title="Experiencia Propuesta de Matrimonio"
                subtitle="Diseñamos propuestas únicas, románticas y perfectamente coordinadas para que ese “sí” sea inolvidable"
                description="Nos encargamos de la planeación estratégica, logística, decoración y producción visual, cuidando cada detalle para que tú solo te concentres en el momento. Disponible en distintas ciudades, playas, Pueblos Mágicos y destinos especiales dentro de México."
                infoLists={[
                    {
                        title: "Destinos Disponibles",
                        items: [
                            "Ciudad de México",
                            "San Miguel de Allende",
                            "Valle de Bravo",
                            "Tulum",
                            "Cancún",
                            "Los Cabos",
                            "Puerto Vallarta",
                            "Querétaro",
                        ],
                        icon: "map",
                        isOpen: true
                    }
                ]}
                cotizacion={{
                    background: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Si el destino donde deseas proponer matrimonio no se encuentra en nuestra lista, indícanos la ciudad, hotel o locación específica para enviarte una cotización personalizada considerando logística, producción y permisos. Podemos diseñar tu propuesta en distintas partes de México:",
                    title: "Cotización Personalizada – Propuestas",
                    lists: [
                        {
                            subtitle: "Podemos diseñar tu propuesta en distintas partes de México:",
                            items: [
                                "Playas",
                                "Ciudades con rooftop",
                                "Pueblos Mágicos",
                                "Paseos en lancha",
                                "Jardines privados",
                            ]
                        },
                        {
                            subtitle: "La cotización final puede variar según:",
                            items: [
                                "Destino",
                                "Nivel de producción floral",
                                "Cobertura audiovisual",
                                "Venue u hospedaje",
                                "Logística de traslado",
                            ]
                        }
                    ]
                }}

            />
        </main>
    );
}
