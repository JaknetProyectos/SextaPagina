import { ExperiencePage } from "@/components/ExperiencePage";

export default function PicnicRomanticoPage() {
    return (
        <ExperiencePage
            title="Experiencia Picnic Romántico / Boho en México"
            subtitle="Vive un momento íntimo, estético y cuidadosamente diseñado"
            heroImage="/images/picnic-hero.jpg"
            image2="/images/picnic-boho-bg.jpg"
            idealSectionTitle="Ideal para:"
            description={`Creamos experiencias tipo picnic con decoración boho chic, detalles artesanales y una atmósfera pensada para sorprender, celebrar o simplemente disfrutar. Ideal en parques, jardines privados y destinos naturales, adaptando cada montaje al entorno para crear un ambiente mágico y relajado.`}

            infoLists={[
                {
                    title: "Ciudades",
                    icon: "map",
                    isOpen: true,
                    items: [
                        "Ciudad de México (Chapultepec, jardines privados)",
                        "Guadalajara",
                        "Querétaro",
                        "Puebla",
                    ]
                },
                {
                    title: "Destinos Naturales / Pueblos Mágicos",
                    icon: "star",
                    items: [
                        "Valle de Bravo",
                        "Tepoztlán",
                        "San Miguel de Allende",
                        "Bacalar",
                    ]
                },
                {
                    title: "Pueblos Mágicos ideales para sesión",
                    icon: "star",
                    items: [
                        "Tulum",
                        "Puerto Vallarta",
                        "Los Cabos",
                    ]
                }
            ]}

            idealPara={[
                {
                    title: "Date romántico inolvidable",
                    image: "/images/ideal-date.jpg",
                    items: [
                        "Cada historia de amor es distinta, y cada celebración merece un diseño único."

                    ]
                },
                {
                    title: "Ideal en",
                    image: "/images/ideal-proposals.jpg",
                    items: [
                        "Aniversarios",
                        "Propuestas de matrimonio",
                        "Cumpleaños especiales",
                        "Celebraciones sorpresa",
                        "Date romántico inolvidable",
                    ]
                },
                {
                    title: "También podemos integrar elementos adicionales como:",
                    image: "/images/ideal-bday.jpg",
                    items: [
                        "Decoración temática especial",
                        "Letras gigantes o mensaje personalizado",
                        "Flores premium o arreglos especiales",
                        "Cena gourmet personalizada",
                        "Mariachi o músico en vivo",
                        "Experiencia sorpresa coordinada",
                        "Producción para propuesta de matrimonio",
                        "Transporte privado",
                        "Extensión de tiempo",
                        "Cobertura de foto y video ampliada",
                    ]
                },
                {
                    title: "Nuestro equipo diseña cada experiencia con base en:",
                    image: "/",
                    items: [
                        "Destino",
                        "Número de personas",
                        "Nivel de producción deseado",
                        "Tipo de experiencia",
                        "gastronómica",
                        "obertura visual",
                    ]
                }
            ]}

            plans={[
                {
                    slug: "boho-esencial",
                    name: "Picnic Boho Esencial",
                    price: 7500,
                    color: "#D4A373", // Tono madera/boho
                    backgroundImage: "/images/picnic-esencial.jpg",
                    duration: "2 hrs de experiencia (incluye montaje previo)",
                    description: "Perfecta para una sorpresa romántica sencilla pero elegante.",
                    features: ["Montaje Estándar", "Tabla de Quesos", "Vino Incluido"],
                    includes: [
                        "Montaje boho básico (alfombra, cojines, mesa baja decorada)",
                        "Decoración floral sencilla",
                        "Canasta gourmet para 2 personas",
                        "Ambientación con velas y detalles artesanales",
                        "1 hora de fotógrafo (10 fotos editadas)",
                    ],
                    notIncludes: [
                        "Transporte (MXN $500 – $1,500 según destino)",
                        "Chef en vivo",
                        "Barra de postres",
                    ]
                },
                {
                    slug: "boho-signature",
                    name: "Picnic Romántico Boho Signature",
                    price: 12800,
                    color: "#273449", // Color corporativo para el producto estrella
                    backgroundImage: "/images/picnic-signature.jpg",
                    duration: "3 hrs montaje y 2 hrs de picnic",
                    description: "Nuestra experiencia más solicitada. Un equilibrio perfecto entre romanticismo, estética y producción cuidada.",
                    features: ["Menú Gourmet", "Decoración Premium", "Botella de Espumante"],
                    includes: [
                        "Montaje completo con decoración boho premium",
                        "Arreglo floral más elaborado",
                        "Canasta gourmet para 2 personas",
                        "Música ambiental",
                        "Fotógrafo profesional por 2 horas",
                        "6 fotografías editadas en alta resolución",
                    ],
                    notIncludes: [
                        "Transporte (MXN $500 – $1,500 según destino)",
                        "Chef en vivo (MXN $1,800)",
                        "Barra de postres (MXN $1,200)",
                    ]
                },
                {
                    slug: "boho-luxury-proposal",
                    name: "Experiencia Picnic Boho Luxury Proposal",
                    price: 80000,
                    color: "#BC6C25", // Tono cobre/lujo
                    backgroundImage: "/images/picnic-luxury.jpg",
                    duration: "4 hrs montaje personalizado y 3 hrs de experiencia privada",
                    description: "Una experiencia premium con producción completa, ideal para propuestas de matrimonio o celebraciones inolvidables.",
                    features: ["Logística Sorpresa", "Foto y Video Incluido", "Violinista en vivo"],
                    includes: [
                        "Diseño conceptual personalizado (moodboard previo)",
                        "Montaje boho de lujo con mobiliario premium",
                        "Decoración floral abundante y velas decorativas",
                        "Iluminación especial tipo atardecer o fairy lights",
                        "Mesa gourmet de alto nivel",
                        "Chef en vivo preparando platillos selectos",
                        "Barra de postres artesanal",
                        "Botella de vino espumoso o mixología especial",
                        "Fotógrafo profesional 3 hrs",
                        "20 fotografías editadas",
                        "Video highlight tipo cinematic (1 min)",
                    ],
                    notIncludes: [
                        "Transporte fuera de zona establecida (cotización adicional si aplica.",
                    ]
                }
            ]}

            cotizacion={{
                background: "/images/quote-picnic.jpg",
                title: "Cotización Personalizada – Picnic Romántico",
                description: "Si deseas realizar tu experiencia en otra ciudad o destino, compártenos el lugar específico y te enviaremos una propuesta personalizada considerando permisos, mobiliario y traslado.",
                lists: [
                ]
            }}
        />
    );
}