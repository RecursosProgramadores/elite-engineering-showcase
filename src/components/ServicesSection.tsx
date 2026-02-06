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
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Implementación BIM",
    description:
      "Guiamos la adopción de metodologías BIM en tu organización, alineadas con estándares nacionales e internacionales.",
    features: ["ISO 19650", "Flujos colaborativos", "Digitalización"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Layers,
    title: "Modelamiento BIM",
    description:
      "Desarrollo de modelos inteligentes para expedientes técnicos con información paramétrica y detección de interferencias.",
    features: ["LOD 300-400", "Clash Detection", "Quantificación"],
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: Home,
    title: "Diseño de Viviendas",
    description:
      "Diseño arquitectónico y estructural de viviendas con enfoque en funcionalidad, estética y normativa.",
    features: ["Arquitectura", "Estructuras", "Instalaciones"],
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    icon: Cpu,
    title: "Transformación Digital",
    description:
      "Impulsamos la digitalización de procesos de ingeniería y construcción para mejorar eficiencia.",
    features: ["Automatización", "Integración", "Datos en tiempo real"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: GraduationCap,
    title: "Capacitaciones BIM",
    description:
      "Programas de formación en metodologías y herramientas BIM para profesionales y empresas.",
    features: ["Cursos especializados", "Certificaciones", "In-house"],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: View,
    title: "Vistas 360°",
    description:
      "Recorridos virtuales inmersivos que permiten visualizar proyectos desde cualquier ángulo.",
    features: ["Recorridos virtuales", "Alta resolución", "Interactivo"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Glasses,
    title: "Realidad Virtual (VR)",
    description:
      "Experiencias inmersivas que transportan a los usuarios al interior de los proyectos.",
    features: ["Inmersión total", "Toma de decisiones", "Presentaciones"],
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Smartphone,
    title: "Realidad Aumentada (AR)",
    description:
      "Superposición de modelos digitales sobre el entorno físico para revisión en obra.",
    features: ["On-site review", "Visualización mixta", "Móvil"],
    gradient: "from-fuchsia-500 to-pink-500",
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
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(195 100% 50%) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-[0.3em] mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            Nuestros Servicios
            <Sparkles className="w-4 h-4" />
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Soluciones <span className="text-gradient-cyan">Integrales</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Ofrecemos un ecosistema completo de servicios BIM y tecnologías
            digitales para transformar tu forma de diseñar, construir y gestionar proyectos.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full glass-card rounded-2xl p-6 transition-all duration-500 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,191,255,0.15)]">
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  whileHover={{ rotate: 6 }}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
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
                      className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow Link */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-accent" />
                  </div>
                </div>
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
          <p className="text-muted-foreground mb-4">
            ¿Necesitas una solución personalizada para tu proyecto?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group"
          >
            Conversemos sobre tus necesidades
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}