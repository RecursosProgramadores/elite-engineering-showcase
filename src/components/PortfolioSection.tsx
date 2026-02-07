import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Maximize2, Filter, Layers, Box, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
    { id: "all", label: "Todos", icon: Filter },
    { id: "bim", label: "BIM", icon: Layers },
    { id: "3d", label: "Modelado 3D", icon: Box },
    { id: "vr", label: "VR / 360°", icon: Globe },
];

const projects = [
    {
        id: 1,
        title: "Implementación BIM Municipal",
        subtitle: "Cajamarca - Gestión Pública",
        category: "bim",
        image: "assets/trayectoria/municajamarca.jpeg",
        type: "image",
        description: "Asesoría y formación en metodologías BIM para la mejora de la gestión de proyectos de inversión pública.",
    },
    {
        id: 2,
        title: "Modelado Estructural",
        subtitle: "Viviendas y Edificaciones",
        category: "bim",
        image: "assets/trayectoria/implementaciondeempresas.jpeg",
        type: "image",
        description: "Desarrollo de modelos detallados para coordinación de especialidades y optimización de recursos.",
    },
    {
        id: 3,
        title: "Realidad Virtual Inmersiva",
        subtitle: "Simulación de Proyectos",
        category: "vr",
        image: "assets/trayectoria/vizualizacionrealidadvirtual.mp4",
        type: "video",
        description: "Recorridos virtuales interactivos que permiten a los clientes experimentar sus proyectos antes de la construcción.",
    },
    {
        id: 4,
        title: "Levantamiento con Drones",
        subtitle: "Fotogrametría y Topografía",
        category: "3d",
        image: "assets/trayectoria/Vueloscondrones.jpeg",
        type: "image",
        description: "Captura de datos precisos en campo para la creación de gemelos digitales y modelos de terreno.",
    },
    {
        id: 5,
        title: "Capacitación Certificada",
        subtitle: "Metodologías BIM",
        category: "bim",
        image: "assets/trayectoria/Capacitacionbim.jpeg",
        type: "image",
        description: "Entrenamiento especializado para profesionales y estudiantes en el uso de herramientas de diseño y gestión.",
    },
    {
        id: 6,
        title: "Consultoría UNC",
        subtitle: "Alianza Académica",
        category: "bim",
        image: "assets/trayectoria/universidadcajamarca.jpeg",
        type: "image",
        description: "Colaboración estratégica con la Universidad Nacional de Cajamarca para el fomento de la innovación.",
    },
    {
        id: 7,
        title: "Gestión Entidades Públicas",
        subtitle: "Transformación Digital",
        category: "bim",
        image: "assets/trayectoria/entidadespublicas.jpeg",
        type: "image",
        description: "Apoyo técnico en la adopción de flujos de trabajo colaborativos y estándares internacionales.",
    },
    {
        id: 8,
        title: "Diseño Estructural CYPE",
        subtitle: "Cálculo y Detallado",
        category: "3d",
        image: "assets/trayectoria/cype.jpeg",
        type: "image",
        description: "Uso de software avanzado para el cálculo estructural y generación de planos técnicos precisos.",
    },
    {
        id: 9,
        title: "Conferencias de Ingeniería",
        subtitle: "Difusión de Conocimiento",
        category: "bim",
        image: "assets/trayectoria/charlasenapoyo.jpeg",
        type: "image",
        description: "Participación activa en foros y seminarios compartiendo experiencias reales de implementación.",
    },
    {
        id: 10,
        title: "Formación Universitaria",
        subtitle: "Alcance Nacional",
        category: "bim",
        image: "assets/trayectoria/capacitaciondiferentesuniversidades.jpeg",
        type: "image",
        description: "Programas de capacitación técnica en diversas regiones para el cierre de brechas tecnológicas.",
    },
];

export function PortfolioSection() {
    const [activeCategory, setActiveCategory] = useState("all");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const filteredProjects = projects.filter(
        (project) => activeCategory === "all" || project.category === activeCategory
    );

    return (
        <section id="portafolio" ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-background">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-4"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="w-8 h-px bg-primary" />
                        Portafolio
                        <span className="w-8 h-px bg-primary" />
                    </motion.span>
                    <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-6">
                        Proyectos <span className="text-gradient-orange">Destacados</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Explora nuestra trayectoria en implementación BIM y transformación digital.
                        Calidad técnica y precisión en cada entrega.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            variant={activeCategory === category.id ? "default" : "outline"}
                            className={`rounded-full px-6 transition-all duration-300 ${activeCategory === category.id
                                ? "bg-primary text-white hover:bg-orange-600 shadow-md glow-orange"
                                : "border-border text-foreground hover:border-primary hover:text-primary"
                                }`}
                        >
                            <category.icon className="w-4 h-4 mr-2" />
                            {category.label}
                        </Button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative"
                            >
                                <div className="bg-white border border-border/40 rounded-3xl overflow-hidden h-full flex flex-col hover:shadow-2xl hover:border-primary/20 transition-all duration-500">
                                    {/* Image/Video Container */}
                                    <div className="relative aspect-[16/10] overflow-hidden bg-muted/20">
                                        {project.type === "video" ? (
                                            <video
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            >
                                                <source src={project.image} type="video/mp4" />
                                            </video>
                                        ) : (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        )}
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                            <Button size="icon" className="rounded-full bg-primary text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 glow-orange">
                                                <Maximize2 className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" className="rounded-full bg-white text-primary scale-0 group-hover:scale-100 transition-transform duration-500 delay-200">
                                                <ExternalLink className="w-5 h-5" />
                                            </Button>
                                        </div>
                                        {/* Category Tag */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-border text-[10px] font-bold uppercase tracking-widest text-primary">
                                                {categories.find(c => c.id === project.category)?.label}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="mb-2">
                                            <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-primary text-sm font-medium uppercase tracking-wider">
                                                {project.subtitle}
                                            </p>
                                        </div>
                                        <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                                            {project.description}
                                        </p>
                                        <div className="mt-auto pt-4 border-t border-border/10">
                                            <Button variant="link" className="p-0 h-auto text-primary hover:text-orange-600 group/btn">
                                                Ver Detalles
                                                <motion.span className="ml-2 inline-block transition-transform group-hover/btn:translate-x-1">
                                                    →
                                                </motion.span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
