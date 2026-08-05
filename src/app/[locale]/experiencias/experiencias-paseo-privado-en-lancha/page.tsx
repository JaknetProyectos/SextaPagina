import { ExperiencePage } from "@/components/ExperiencePage";
import { getOptimizedUrl } from "@/lib/images";
import { useLocale } from "next-intl";

function PaseoPrivadoLanchaES() {
    return (
        <ExperiencePage
            title="Experiencias Paseo Privado en Lancha"
            subtitle="Vive un momento íntimo navegando en un entorno natural espectacular"
            heroImage={getOptimizedUrl("https://images.unsplash.com/photo-1704070530670-daf414e235ed?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
            image2={getOptimizedUrl("https://images.unsplash.com/photo-1553505192-23b5329dcf06?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
            idealSectionTitle="Ideal para:"
            description={`Vive un momento íntimo navegando en un entorno natural espectacular.
      
Creamos experiencias privadas en lancha para parejas, aniversarios, propuestas o celebraciones especiales, en lagos y canales dentro de distintas ciudades y destinos en México. Cada experiencia está diseñada para que disfrutes privacidad, seguridad y una atmósfera romántica cuidadosamente planeada.`}

            infoLists={[
                {
                    title: "Lagos y presas",
                    icon: "map",
                    isOpen: true,
                    items: [
                        "Valle de Bravo",
                        "Tequesquitengo",
                        "Chapala",
                    ]
                },
                {
                    title: "Canales",
                    icon: "star",
                    items: [
                        "Xochimilco"
                    ]
                },
                {
                    title: "Mar",
                    icon: "star",
                    items: [
                        "Cancún",
                        "Los Cabos",
                        "Puerto Vallarta",
                    ]
                }
            ]}



            plans={[
                {
                    slug: "paseo-esencial",
                    name: "Paseo Privado Esencial",
                    price: 3600,
                    color: "#3B9FD8", // Azul cielo
                    backgroundImage: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1677698305586-cc475cfb0962?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                    duration: "2 horas de navegación",
                    description: "Una experiencia romántica sencilla, ideal para desconectarse y disfrutar del paisaje.",
                    features: ["Navegación Privada", "Bebida de Bienvenida", "Música Ambiental"],
                    includes: [
                        "Lancha privada con patrón certificado",
                        "Seguro de pasajeros",
                        "Botanas y bebidas básicas (agua, refrescos)",
                        "5 fotografías espontáneas",
                        "Coordinación previa de horario y punto de salida",
                    ],
                    notIncludes: [
                        "Transporte al muelle (MXN $500 – $1,000 según ubicación)",
                        "Cena a bordo",
                        "Decoración especial",
                    ]
                },
                {
                    slug: "paseo-signature",
                    name: "Paseo Privado Signature",
                    price: 7600,
                    color: "#273449", // Tu azul corporativo
                    backgroundImage: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1677698305586-cc475cfb0962?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                    duration: "2 horas de navegación más coordinación de acceso al muelle",
                    description: "Nuestra experiencia equilibrada que incluye coordinación de acceso preferencial y detalles que elevan el momento.",
                    features: ["Coordinación de Acceso", "Tabla de Snacks", "Vino Espumoso"],
                    includes: [
                        "Lancha privada con patrón",
                        "Seguro de pasajeros",
                        "Snacks gourmet",
                        "Bebidas (agua, refrescos y vino espumoso)",
                        "10 fotografías espontáneas editadas",
                        "Asistencia previa para planeación",
                        "Playlist personalizada durante el recorrido",
                    ],
                    notIncludes: [
                        "Transporte al muelle (MXN $500 – $1,000)",
                        "Cena a bordo (MXN $1,500)",
                        "Decoración especial (MXN $800)",
                    ]
                },
                {
                    slug: "paseo-luxury",
                    name: "Paseo Privado Luxury Experience",
                    price: 14500,
                    color: "#0077B6", // Azul océano profundo
                    backgroundImage: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1677698305586-cc475cfb0962?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                    duration: "3 horas de navegación privada más coordinación personalizada previa",
                    description: "Diseñado para propuestas de matrimonio o hitos de vida. Incluye una producción visual y logística de alto nivel.",
                    features: ["Ideal Propuestas", "Decoración Premium", "Brindis VIP"],
                    includes: [
                        "Lancha premium privada con patrón certificado",
                        "Seguro de pasajeros",
                        "Decoración romántica completa (flores naturales, velas LED, letrero personalizado)",
                        "Cena gourmet a bordo para 2 personas",
                        "Botella de vino premium o mixología especial",
                        "Tabla de quesos y postres artesanales",
                        "Fotógrafo profesional durante 2 horas",
                        "40 fotografías editadas en alta resolución",
                        "Video highlight tipo cinematic (1 minuto)",
                        "Coordinación sorpresa (si es propuesta de matrimonio)",
                    ],
                    notIncludes: [
                        "Transporte al muelle (cotización según ciudad)",
                        "Extensión de tiempo (costo por hora adicional)",
                    ]
                }
            ]}

            cotizacion={{
                background: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1677698305586-cc475cfb0962?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                title: "Cotización Personalizada",
                description: "Podemos realizar esta experiencia en distintos lagos y destinos dentro de México, adaptándonos al entorno y nivel de producción que desees. Si tu destino preferido no aparece en la lista, indícanos la ciudad o marina específica para validar disponibilidad y enviarte cotización personalizada.",
                lists: [
                    {
                        subtitle: "También podemos integrar:",
                        items: [
                            "Mariachi o saxofonista en vivo",
                            "Fuegos fríos para propuesta",
                            "Dron profesional",
                            "Decoración temática especial",
                            "Transporte privado ejecutivo",
                            "Extensión de navegación",
                        ],
                    }
                ]
            }}
        />
    );
}

function PaseoPrivadoLanchaEN() {
    return (
        <ExperiencePage
            title="Private Boat Trip Experiences"
            subtitle="Live an intimate moment sailing in a spectacular natural environment"
            heroImage={getOptimizedUrl("https://images.unsplash.com/photo-1704070530670-daf414e235ed?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
            image2={getOptimizedUrl("https://images.unsplash.com/photo-1553505192-23b5329dcf06?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
            idealSectionTitle="Ideal for:"
            description={`Live an intimate moment sailing in a spectacular natural environment.
      
We create private boat experiences for couples, anniversaries, proposals, or special celebrations in lakes and canals within various cities and destinations in Mexico. Each experience is designed for you to enjoy privacy, safety, and a carefully planned romantic atmosphere.`}

            infoLists={[
                {
                    title: "Lakes and Reservoirs",
                    icon: "map",
                    isOpen: true,
                    items: [
                        "Valle de Bravo",
                        "Tequesquitengo",
                        "Chapala",
                    ]
                },
                {
                    title: "Canals",
                    icon: "star",
                    items: [
                        "Xochimilco"
                    ]
                },
                {
                    title: "Sea",
                    icon: "star",
                    items: [
                        "Cancun",
                        "Los Cabos",
                        "Puerto Vallarta",
                    ]
                }
            ]}

            plans={[
                {
                    slug: "paseo-esencial",
                    name: "Essential Private Trip",
                    price: 3600,
                    color: "#3B9FD8",
                    backgroundImage: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1677698305586-cc475cfb0962?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                    duration: "2 hours of sailing",
                    description: "A simple romantic experience, ideal for disconnecting and enjoying the scenery.",
                    features: ["Private Sailing", "Welcome Drink", "Ambient Music"],
                    includes: [
                        "Private boat with certified skipper",
                        "Passenger insurance",
                        "Basic snacks and drinks (water, sodas)",
                        "5 candid photographs",
                        "Prior coordination of schedule and departure point",
                    ],
                    notIncludes: [
                        "Transportation to the pier (MXN $500 – $1,000 depending on location)",
                        "Dinner on board",
                        "Special decoration",
                    ]
                },
                {
                    slug: "paseo-signature",
                    name: "Signature Private Trip",
                    price: 7600,
                    color: "#273449",
                    backgroundImage: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1677698305586-cc475cfb0962?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                    duration: "2 hours of sailing plus pier access coordination",
                    description: "Our balanced experience that includes preferential access coordination and details that elevate the moment.",
                    features: ["Access Coordination", "Snack Platter", "Sparkling Wine"],
                    includes: [
                        "Private boat with skipper",
                        "Passenger insurance",
                        "Gourmet snacks",
                        "Drinks (water, sodas, and sparkling wine)",
                        "10 edited candid photographs",
                        "Prior planning assistance",
                        "Custom playlist during the tour",
                    ],
                    notIncludes: [
                        "Transportation to the pier (MXN $500 – $1,000)",
                        "Dinner on board (MXN $1,500)",
                        "Special decoration (MXN $800)",
                    ]
                },
                {
                    slug: "paseo-luxury",
                    name: "Luxury Private Experience",
                    price: 14500,
                    color: "#0077B6",
                    backgroundImage: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1677698305586-cc475cfb0962?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                    duration: "3 hours of private sailing plus personalized prior coordination",
                    description: "Designed for marriage proposals or life milestones. Includes high-level visual production and logistics.",
                    features: ["Ideal for Proposals", "Premium Decoration", "VIP Toast"],
                    includes: [
                        "Premium private boat with certified skipper",
                        "Passenger insurance",
                        "Full romantic decoration (natural flowers, LED candles, custom sign)",
                        "Gourmet dinner on board for 2 people",
                        "Premium wine bottle or special mixology",
                        "Cheese board and handcrafted desserts",
                        "Professional photographer for 2 hours",
                        "40 high-resolution edited photographs",
                        "Cinematic highlight video (1 minute)",
                        "Surprise coordination (if it is a marriage proposal)",
                    ],
                    notIncludes: [
                        "Transportation to the pier (quote according to city)",
                        "Overtime extension (cost per additional hour)",
                    ]
                }
            ]}

            cotizacion={{
                background: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1677698305586-cc475cfb0962?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                title: "Custom Quote",
                description: "We can carry out this experience in different lakes and destinations within Mexico, adapting to the environment and the production level you desire. If your preferred destination is not on the list, let us know the specific city or marina to validate availability and send you a personalized quote.",
                lists: [
                    {
                        subtitle: "We can also integrate:",
                        items: [
                            "Live Mariachi or saxophonist",
                            "Cold sparks for proposal",
                            "Professional drone",
                            "Special themed decoration",
                            "Executive private transportation",
                            "Sailing extension",
                        ],
                    }
                ]
            }}
        />
    );
}

export default function PaseoPrivadoLanchaPage() {
    const locale = useLocale();

    switch (locale) {
        case "en":
            return <PaseoPrivadoLanchaEN />;
        case "es":
        default:
            return <PaseoPrivadoLanchaES />;
    }
}