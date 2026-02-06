import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Users,
  Target,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";

const clientProfiles = [
  {
    icon: Building2,
    title: "Empresas Constructoras",
    description: "Optimiza proyectos con modelamiento BIM y coordinación 3D.",
  },
  {
    icon: Users,
    title: "Profesionales Independientes",
    description: "Eleva la calidad de expedientes técnicos y presentaciones.",
  },
  {
    icon: Target,
    title: "Entidades Públicas",
    description: "Modernización y cumplimiento de estándares BIM gubernamentales.",
  },
  {
    icon: TrendingUp,
    title: "Desarrolladores Inmobiliarios",
    description: "Visualización VR/AR para ventas más efectivas.",
  },
];

const benefits = [
  "Reducción de errores en un 40%",
  "Ahorro significativo en costos",
  "Mejor coordinación de equipos",
  "Visualización pre-construcción",
  "Cumplimiento normativas BIM",
  "Decisiones basadas en datos",
];

export function ClientFocusSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-[0.3em] mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Star className="w-4 h-4" />
            Nuestros Clientes
            <Star className="w-4 h-4" />
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Soluciones para{" "}
            <span className="text-gradient-cyan">Cada Necesidad</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Trabajamos con profesionales y empresas que buscan precisión,
            colaboración y sostenibilidad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Client Profiles */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {clientProfiles.map((profile, index) => (
              <motion.div
                key={profile.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group glass-card-hover rounded-2xl p-6"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-secondary group-hover:to-accent transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <profile.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {profile.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {profile.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Benefits & Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Benefits Card */}
            <div className="glass-card rounded-3xl p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                ¿Por qué elegir <span className="text-accent">Elite Engineering</span>?
              </h3>

              <div className="grid gap-3 mb-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent/5 transition-colors group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground group-hover:text-accent transition-colors">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                Únete a nuestros clientes
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card rounded-2xl p-6 border-l-4 border-accent relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
              <p className="text-muted-foreground italic mb-4 leading-relaxed">
                "Elite Engineering transformó nuestra forma de presentar proyectos.
                Las visualizaciones VR nos ayudaron a cerrar más ventas y tomar
                mejores decisiones."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <span className="text-white font-bold">JC</span>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Juan Carlos M.</p>
                  <p className="text-muted-foreground text-sm">Gerente de Proyectos</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}