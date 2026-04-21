import { ExperiencePage } from "@/components/ExperiencePage";
import { getOptimizedUrl } from "@/lib/images";
import { useLocale } from "next-intl";

function PicnicRomanticoES() {
    return (
        <ExperiencePage
            title="Experiencia Picnic Romántico / Boho en México"
            subtitle="Vive un momento íntimo, estético y cuidadosamente diseñado"
            heroImage={getOptimizedUrl("https://plus.unsplash.com/premium_photo-1678914346808-c89ba6317b6d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
            image2={getOptimizedUrl("https://plus.unsplash.com/premium_photo-1676667573119-40081df5d920?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
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
                    image: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1676667573119-40081df5d920?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                    items: [
                        "Cada historia de amor es distinta, y cada celebración merece un diseño único."

                    ]
                },
                {
                    title: "Ideal en",
                    image: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1678914346808-c89ba6317b6d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
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
                    image: getOptimizedUrl("https://images.unsplash.com/photo-1630371223444-708db033c7c6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
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
                    image: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1676667573119-40081df5d920?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
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
                    backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
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
                    backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
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
                    backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
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
                background: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1676667573119-40081df5d920?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                title: "Cotización Personalizada – Picnic Romántico",
                description: "Si deseas realizar tu experiencia en otra ciudad o destino, compártenos el lugar específico y te enviaremos una propuesta personalizada considerando permisos, mobiliario y traslado.",
                lists: [
                ]
            }}
        />
    );
}

function PicnicRomanticoEN() {
    return (
        <ExperiencePage
            title="Romantic / Boho Picnic Experience in Mexico"
            subtitle="Live an intimate, aesthetic, and carefully designed moment"
            heroImage={getOptimizedUrl("https://plus.unsplash.com/premium_photo-1678914346808-c89ba6317b6d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
            image2={getOptimizedUrl("https://plus.unsplash.com/premium_photo-1676667573119-40081df5d920?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
            idealSectionTitle="Ideal for:"
            description={`We create picnic-style experiences with boho-chic decor, handcrafted details, and an atmosphere designed to surprise, celebrate, or simply enjoy. Ideal in parks, private gardens, and natural destinations, adapting each setup to the surroundings to create a magical and relaxed environment.`}

            infoLists={[
                {
                    title: "Cities",
                    icon: "map",
                    isOpen: true,
                    items: [
                        "Mexico City (Chapultepec, private gardens)",
                        "Guadalajara",
                        "Queretaro",
                        "Puebla",
                    ]
                },
                {
                    title: "Natural Destinations / Magical Towns",
                    icon: "star",
                    items: [
                        "Valle de Bravo",
                        "Tepoztlan",
                        "San Miguel de Allende",
                        "Bacalar",
                    ]
                },
                {
                    title: "Beach Locations",
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
                    title: "Unforgettable Romantic Date",
                    image: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1676667573119-40081df5d920?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                    items: [
                        "Every love story is different, and every celebration deserves a unique design."
                    ]
                },
                {
                    title: "Perfect for",
                    image: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1676667573119-40081df5d920?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                    items: [
                        "Anniversaries",
                        "Marriage proposals",
                        "Special birthdays",
                        "Surprise celebrations",
                        "Unforgettable romantic dates",
                    ]
                },
                {
                    title: "We can also integrate additional elements such as:",
                    image: getOptimizedUrl("https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                    items: [
                        "Special themed decoration",
                        "Giant letters or personalized messages",
                        "Premium flowers or special arrangements",
                        "Custom gourmet dinner",
                        "Mariachi or live musician",
                        "Coordinated surprise experience",
                        "Marriage proposal production",
                        "Private transportation",
                        "Time extension",
                        "Extended photo and video coverage",
                    ]
                },
                {
                    title: "Our team designs each experience based on:",
                    image: getOptimizedUrl("https://images.unsplash.com/photo-1630276740239-5d9c23d49531?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                    items: [
                        "Destination",
                        "Number of guests",
                        "Desired production level",
                        "Type of experience",
                        "Gastronomic preferences",
                        "Visual coverage",
                    ]
                }
            ]}

            plans={[
                {
                    slug: "boho-esencial",
                    name: "Essential Boho Picnic",
                    price: 7500,
                    color: "#D4A373",
                    backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                    duration: "2 hrs of experience (includes prior setup)",
                    description: "Perfect for a simple yet elegant romantic surprise.",
                    features: ["Standard Setup", "Cheese Board", "Wine Included"],
                    includes: [
                        "Basic boho setup (rug, cushions, decorated low table)",
                        "Simple floral decoration",
                        "Gourmet basket for 2 people",
                        "Ambiance with candles and handcrafted details",
                        "1 hour of photographer (10 edited photos)",
                    ],
                    notIncludes: [
                        "Transportation (MXN $500 – $1,500 depending on destination)",
                        "Live Chef",
                        "Dessert bar",
                    ]
                },
                {
                    slug: "boho-signature",
                    name: "Signature Romantic Boho Picnic",
                    price: 12800,
                    color: "#273449",
                    backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                    duration: "3 hrs setup and 2 hrs picnic",
                    description: "Our most requested experience. A perfect balance between romance, aesthetics, and careful production.",
                    features: ["Gourmet Menu", "Premium Decoration", "Sparkling Wine"],
                    includes: [
                        "Full setup with premium boho decoration",
                        "Elaborate floral arrangement",
                        "Gourmet basket for 2 people",
                        "Ambient music",
                        "Professional photographer for 2 hours",
                        "15 edited high-resolution photographs",
                    ],
                    notIncludes: [
                        "Transportation (MXN $500 – $1,500 depending on destination)",
                        "Live Chef (MXN $1,800)",
                        "Dessert bar (MXN $1,200)",
                    ]
                },
                {
                    slug: "boho-luxury-proposal",
                    name: "Luxury Proposal Boho Picnic Experience",
                    price: 80000,
                    color: "#BC6C25",
                    backgroundImage:getOptimizedUrl("https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                    duration: "4 hrs custom setup and 3 hrs private experience",
                    description: "A premium experience with full production, ideal for marriage proposals or unforgettable celebrations.",
                    features: ["Surprise Logistics", "Photo & Video Included", "Live Violinist"],
                    includes: [
                        "Personalized conceptual design (prior moodboard)",
                        "Luxury boho setup with premium furniture",
                        "Abundant floral decoration and decorative candles",
                        "Special sunset lighting or fairy lights",
                        "High-level gourmet table",
                        "Live Chef preparing select dishes",
                        "Handcrafted dessert bar",
                        "Bottle of sparkling wine or special mixology",
                        "Professional photographer for 3 hrs",
                        "20 edited photographs",
                        "Cinematic highlight video (1 min)",
                    ],
                    notIncludes: [
                        "Transportation outside the established zone (additional quote if applicable)",
                    ]
                }
            ]}

            cotizacion={{
                background: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1676667573119-40081df5d920?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
                title: "Custom Quote – Romantic Picnic",
                description: "If you wish to have your experience in another city or destination, share the specific location with us and we will send you a personalized proposal considering permits, furniture, and transfer.",
                lists: []
            }}
        />
    );
}

export default function PicnicRomanticoPage() {
    const locale = useLocale();

    switch (locale) {
        case "en":
            return <PicnicRomanticoEN />;
        case "es":
        default:
            return <PicnicRomanticoES />;
    }
}