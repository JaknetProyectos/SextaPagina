import { ExperiencePage } from "@/components/ExperiencePage";
import { useLocale } from "next-intl";

function DecorationSorpresaES() {
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

function DecorationSorpresaEn() {
    return (
        <ExperiencePage
            title="Hotel / Beach Surprise Decoration"
            heroImage="/images.png"
            subtitle="Contact us to design your proposal completely to your measure."
            description="We transform hotel rooms or private villas into perfect romantic settings to surprise for anniversaries, birthdays, or special getaways. Available in hotels and beach destinations across various cities in Mexico (prior coordination with the hotel required)."
            slug="hotel-beach-surprise-decoration"
            infoLists={[
                {
                    title: "Available in hotels, private villas, and suites in:",
                    items: [
                        "Cancun",
                        "Tulum",
                        "Playa del Carmen",
                        "Los Cabos",
                        "Puerto Vallarta",
                        "Mexico City",
                        "Guadalajara",
                        "Merida",
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
                    name: "Essential Surprise",
                    price: 16100,
                    duration: "2 hours of setup and prior coordination with hotel",
                    includes: [
                        "Basic romantic decoration (petals, balloons, LED candles)",
                        "Bottle of sparkling wine",
                        "Special chocolates",
                        "Logistics coordination",
                        "10 candid photographs",
                    ],
                    notIncludes: [
                        "Accommodation",
                        "Romantic dinner (MXN $1,500 – $3,000)",
                        "Full professional session",
                    ],
                    slug: "sorpresa-esencial"
                },
                {
                    backgroundImage: "image.png",
                    color: "#61a9bd",
                    description: "For celebrations in boutique hotels or private villas.",
                    features: [],
                    name: "Signature Surprise",
                    price: 28800,
                    duration: "Custom setup + strategic coordination",
                    includes: [
                        "Abundant premium decoration",
                        "High-end natural flowers",
                        "Professional ambient lighting",
                        "Premium sparkling wine or mixology",
                        "Decorated romantic table",
                        "Professional photographer",
                        "30 edited photographs",
                        "Romantic highlight video",
                        "Full coordination with hotel",
                    ],
                    notIncludes: [
                        "Accommodation",
                        "Private gourmet dinner (additional quote)"
                    ],
                    slug: "sorpresa-signature"
                },
                {
                    backgroundImage: "image.png",
                    color: "#61a9bd",
                    description: "Higher visual production and a more impactful experience.",
                    features: [],
                    name: "Luxury Destination Surprise",
                    price: 28800,
                    duration: "Custom setup + personalized coordination",
                    includes: [
                        "Enhanced romantic decoration (custom message, more floral, special lighting)",
                        "Sparkling wine",
                        "Gourmet box",
                        "16 edited professional photographs",
                        "Coordination with hotel and concierge",
                    ],
                    notIncludes: [
                        "Accommodation",
                        "Additional private dinner"
                    ],
                    slug: "sorpresa-luxury"
                },
            ]}

            cotizacion={
                {
                    background: "images.png",
                    title: "Custom Quote – Decorations",
                    description: "We can carry out this experience in:",
                    lists: [
                        {
                            subtitle: "Boutique hotels",
                            items: [
                                "Private beach villas",
                                "Romantic cabins",
                                "Executive suites",
                                "Special destinations within Mexico",
                            ]
                        },
                        {
                            subtitle: "The final investment will depend on:",
                            items: [
                                "City or destination",
                                "Production level",
                                "Hotel policies",
                                "Audiovisual coverage",
                                "Transportation logistics",
                            ]
                        }
                    ]
                }
            }
        />
    );
}

export default function DecorationSorpresaPage() {
    const locale = useLocale();

    switch (locale) {
        case "en":
            return <DecorationSorpresaEn />;
        case "es":
        default:
            return <DecorationSorpresaES />;
    }
}