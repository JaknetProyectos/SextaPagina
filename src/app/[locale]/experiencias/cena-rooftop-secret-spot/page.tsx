import { ExperiencePage } from "@/components/ExperiencePage";

export default function CenaRooftopPage() {
    return (
        <ExperiencePage
            title="Cena Rooftop “Secret Spot”"
            subtitle="Una experiencia privada en una azotea exclusiva con vista panorámica"
            heroImage="/images/rooftop-hero.jpg"
            image2="/images/rooftop-view-bg.jpg"
            idealSectionTitle="Ideal para:"
            description={`Diseñada para momentos íntimos, propuestas de matrimonio o celebraciones especiales.
      
Creamos una atmósfera elegante y romántica en rooftops seleccionados dentro de distintas ciudades de México, cuidando cada detalle: iluminación, montaje, menú y ambientación.

Disponible en ciudades con rooftops privados o vistas panorámicas.`}

            infoLists={[
                {
                    title: "Ciudades Disponibles",
                    icon: "map",
                    isOpen: true,
                    items: [
                        "Ciudad de México",
                        "Guadalajara",
                        "Monterrey",
                        "Puebla",
                        "Querétaro",
                        "Mérida",
                        "Cancún (vista al mar)",
                        "San Miguel de Allende",
                    ]
                }
            ]}


            plans={[
                {
                    slug: "rooftop-essential",
                    name: "Rooftop Experience Essential",
                    price: 24400,
                    color: "#273449", // Tu color azul corporativo
                    backgroundImage: "/images/rooftop-plan-essential.jpg",
                    duration: "3 horas de cena más montaje previo",
                    description: "Una cena íntima con vista privilegiada y producción cuidada.",
                    features: ["Vista Privilegiada", "Cena Íntima", "Producción Cuidada"],
                    includes: [
                        "Renta de rooftop privado (según disponibilidad)",
                        "Menú gourmet de 3 tiempos personalizado",
                        "Mesero durante la experiencia",
                        "Decoración romántica (velas LED, flores naturales sencillas, montaje de mesa elegante)",
                        "Coordinación previa del evento",
                    ],
                    notIncludes: [
                        "Transporte al rooftop (MXN $500 – $1,200 según ubicación)",
                        "Música en vivo (MXN $1,800)",
                        "Fotografía profesional (MXN $2,500)",
                    ]
                },
                {
                    slug: "rooftop-signature",
                    name: "Rooftop Experience Signature",
                    price: 40200,
                    color: "#3B9FD8", // Azul complementario
                    backgroundImage: "/images/rooftop-plan-signature.jpg",
                    duration: "3 horas de cena privada con montaje personalizado",
                    description: "Más producción, más detalle y una atmósfera más impactante.",
                    features: ["Mayor Producción", "Detalles Exclusivos", "Atmósfera Impactante"],
                    includes: [
                        "Rooftop exclusivo con vista panorámica",
                        "Chef privado",
                        "Menú gourmet de 3 tiempos premium",
                        "Mesero dedicado",
                        "Decoración romántica ampliada (centro floral más elaborado, velas decorativas, iluminación ambiental especial)",
                        "Botella de vino premium o mixología personalizada",
                        "Tabla de quesos o postre especial de autor",
                        "Música ambiental personalizada",
                        "10 fotografías profesionales editadas",
                        "Coordinación integral del evento",
                    ],
                    notIncludes: [
                        "Transporte al rooftop",
                        "Músico en vivo adicional (cotización según instrumento)",
                    ]
                },
                {
                    slug: "rooftop-luxury",
                    name: "Rooftop Experience Luxury Proposal",
                    price: 60100,
                    color: "#F4845F", // Acento naranja para destacar el Luxury
                    backgroundImage: "/images/rooftop-plan-luxury.jpg",
                    duration: "4 horas totales (incluye montaje especial y experiencia privada)",
                    description: "Diseñado para propuestas de matrimonio o celebraciones que requieren producción completa.",
                    features: ["Ideal para Propuestas", "Producción Completa", "Máxima Exclusividad"],
                    includes: [
                        "Rooftop premium con vista privilegiada",
                        "Diseño conceptual previo (moodboard personalizado)",
                        "Chef privado con menú degustación de 4 tiempos",
                        "Mesero exclusivo durante todo el evento",
                        "Decoración romántica de alto nivel (arreglo floral abundante, velas, iluminación cálida, letrero personalizado o mensaje luminoso)",
                        "Música en vivo (saxofón, violín o guitarra)",
                        "Fotógrafo profesional 2 horas",
                        "40 fotografías editadas",
                        "Video highlight tipo cinematic (1–2 minutos)",
                        "Coordinación sorpresa para propuesta",
                        "Asistencia personalizada antes y durante el evento",
                    ],
                    notIncludes: [
                        "Transporte privado ejecutivo (cotización adicional si se requiere)",
                        "Extensión de horario (costo por hora extra)",
                    ]
                }
            ]}

            cotizacion={{
                background: "/images/quote-rooftop.jpg",
                title: "Cotización Personalizada – Rooftop",
                description: "Cada ciudad, rooftop y nivel de producción es diferente. Podemos diseñar esta experiencia en distintas ciudades de México, adaptándonos a tus necesidades específicas.",
                lists: [
                    {
                        subtitle: " ",
                        items: [
                            "Tipo de vista (skyline, centro histórico, mar, montaña)",
                            "Número de personas",
                            "Tipo de menú (vegetariano, internacional, degustación)",
                            "Tipo de ambientación musical",
                            "Nivel de producción floral y decorativa"
                        ]
                    },
                    {
                        subtitle: "También podemos integrar:",
                        items: [
                            "Tipo de vista (skyline, centro histórico, mar, montaña)",
                            "Número de personas",
                            "Tipo de menú (vegetariano, internacional, degustación especial)",
                            "Tipo de ambientación musical",
                            "Nivel de producción floral y decorativa",
                        ]
                    }
                ]
            }}
        />
    );
}