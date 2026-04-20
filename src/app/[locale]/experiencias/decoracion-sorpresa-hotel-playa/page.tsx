import { ExperiencePage } from "@/components/ExperiencePage";

export default function DecorationSorpresa() {
    return (
        <ExperiencePage
            title="Decoración Sorpresa Hotel / Playa"
            heroImage="/images.png"
            subtitle="Contáctanos para diseñar tu propuesta completamente a tu medida."
            description="Transformamos habitaciones de hotel o villas privadas en escenarios románticos perfectos para sorprender en aniversarios, cumpleaños o escapadas especiales. Disponible en hoteles y destinos de playa en distintas ciudades de México (previa coordinación con el hotel)."
            slug="decoracion-sorpresa-hotel-playa"
            infoLists={[
                {
                    title: "Disponible en hoteles, villas privadas y suites en:",
                    items: [
                        "Cancún",
                        "Tulum",
                        "Playa del Carmen",
                        "Los Cabos",
                        "Puerto Vallarta",
                        "Ciudad de México",
                        "Guadalajara",
                        "Mérida",
                    ],
                    icon: "map",
                    isOpen: true,
                }
            ]}
            plans={[
                {
                    backgroundImage: "image.png",
                    color: "#61a9bd",
                    description: " ",
                    features: [],
                    name: "Sorpresa Esencial",
                    price: 16100,
                    duration: "2 horas de montaje y coordinación previa con hotel",
                    includes: [
                        "Decoración romántica básica (pétalos, globos, velas LED)",
                        "Botella de vino espumoso",
                        "Chocolates especiales",
                        "Coordinación logística",
                        "10 fotografías espontáneas",
                    ],
                    notIncludes: [
                        "Hospedaje",
                        "Cena romántica (MXN $1,500 – $3,000)",
                        "Sesión profesional completa",
                    ],
                    slug: "sorpresa-esencial"
                },
                {
                    backgroundImage: "image.png",
                    color: "#61a9bd",
                    description: "Para celebraciones en hoteles boutique o villas privadas.",
                    features: [],
                    name: "Sorpresa Signature",
                    price: 28800,
                    duration: "Montaje personalizado + coordinación estratégica",
                    includes: [
                        "Decoración premium abundante",
                        "Flores naturales de alto nivel",
                        "Iluminación ambiental profesional",
                        "Espumoso premium o mixología",
                        "Mesa romántica decorada",
                        "Fotógrafo profesional",
                        "30 fotografías editadas",
                        "Video highlight romántico",
                        "Coordinación completa con hotel",
                    ],
                    notIncludes: [
                        "Hospedaje",
                        "Cena gourmet privada (cotización adicional)"
                    ],
                    slug: "sorpresa-signature"
                },
                {
                    backgroundImage: "image.png",
                    color: "#61a9bd",
                    description: "Más producción visual y experiencia más impactante.",
                    features: [],
                    name: "Sorpresa Luxury Destination",
                    price: 28800,
                    duration: "Montaje personalizado + coordinación personalizada",
                    includes: [
                        "Decoración romántica ampliada (mensaje personalizado, más floral, iluminación especial)",
                        "Espumoso",
                        "Caja gourmet",
                        "16 fotografías profesionales editadas",
                        "Coordinación con hotel y concierge",
                    ],
                    notIncludes: [
                        "Hospedaje",
                        "Cena privada adicional"
                    ],
                    slug: "sorpresa-luxury"
                },
            ]}

            cotizacion={
                {
                    background: "images.png",
                    title: "Cotización Personalizada – Decoraciones",
                    description: "Podemos realizar esta experiencia en:",
                    lists: [
                        {
                            subtitle: "Hoteles boutique",
                            items: [
                                "Villas privadas en playa",
                                "Cabañas románticas",
                                "Suites ejecutivas",
                                "Destinos especiales dentro de México",
                            ]
                        },
                        {
                            subtitle: "La inversión final dependerá de:",
                            items: [
                                "Ciudad o destino",
                                "Nivel de producción",
                                "Políticas del hotel",
                                "Cobertura audiovisual",
                                "Logística de traslado",
                            ]
                        }
                    ]
                }
            }
        />
    );
}