import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Layers,
  Home,
  Cpu,
  GraduationCap,
  View,
  Glasses,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Implementación BIM",
    description:
      "Guiamos la adopción de metodologías BIM en tu organización, alineadas con estándares nacionales e internacionales para optimizar flujos de trabajo.",
    features: ["Estándares ISO 19650", "Flujos colaborativos", "Digitalización"],
  },
  {
    icon: Layers,
    title: "Modelamiento BIM",
    description:
      "Desarrollo de modelos inteligentes para expedientes técnicos con información paramétrica, detección de interferencias y documentación automatizada.",
    features: ["LOD 300-400", "Clash Detection", "Quantificación"],
  },
  {
    icon: Home,
    title: "Diseño de Viviendas",
    description:
      "Diseño arquitectónico y estructural de viviendas con enfoque en funcionalidad, estética y cumplimiento normativo.",
    features: ["Arquitectura", "Estructuras", "Instalaciones"],
  },
  {
    icon: Cpu,
    title: "Transformación Digital",
    description:
      "Impulsamos la digitalización de procesos de ingeniería y construcción para mejorar eficiencia y toma de decisiones.",
    features: ["Automatización", "Integración", "Datos en tiempo real"],
  },
  {
    icon: GraduationCap,
    title: "Capacitaciones BIM",
    description:
      "Programas de formación en metodologías y herramientas BIM para profesionales, empresas y entidades públicas.",
    features: ["Cursos especializados", "Certificaciones", "In-house"],
  },
  {
    icon: View,
    title: "Vistas 360°",
    description:
      "Recorridos virtuales inmersivos que permiten visualizar proyectos desde cualquier ángulo antes de la construcción.",
    features: ["Recorridos virtuales", "Alta resolución", "Interactivo"],
  },
  {
    icon: Glasses,
    title: "Realidad Virtual (VR)",
    description:
      "Experiencias inmersivas que transportan a los usuarios al interior de los proyectos para una visualización realista.",
    features: ["Inmersión total", "Toma de decisiones", "Presentaciones"],
  },
  {
    icon: Smartphone,
    title: "Realidad Aumentada (AR)",
    description:
      "Superposición de modelos digitales sobre el entorno físico para revisión en obra y presentaciones interactivas.",
    features: ["On-site review", "Visualización mixta", "Móvil"],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="servicios"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-widest mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Soluciones <span className="text-gradient-gold">Integrales</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ofrecemos un ecosistema completo de servicios BIM y tecnologías
            digitales para transformar tu forma de diseñar, construir y gestionar
            proyectos.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5"
            >
              {/* Icon */}
              <div className="mb-5">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Arrow Link */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-accent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            ¿Necesitas una solución personalizada para tu proyecto?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            Conversemos sobre tus necesidades
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}