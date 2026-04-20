import { ExperiencePage } from "@/components/ExperiencePage";

export default function PaseoPrivadoLanchaPage() {
    return (
        <ExperiencePage
            title="Experiencias Paseo Privado en Lancha"
            subtitle="Vive un momento íntimo navegando en un entorno natural espectacular"
            heroImage="/images/lancha-hero.jpg"
            image2="/images/lancha-bg-section.jpg"
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
                    backgroundImage: "/images/lancha-esencial.jpg",
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
                    backgroundImage: "/images/lancha-signature.jpg",
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
                    backgroundImage: "/images/lancha-luxury.jpg",
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
                background: "/images/quote-lancha.jpg",
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