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
} from "lucide-react";

const clientProfiles = [
  {
    icon: Building2,
    title: "Empresas Constructoras",
    description:
      "Optimiza tus proyectos con modelamiento BIM y coordinación 3D para reducir errores y sobrecostos.",
  },
  {
    icon: Users,
    title: "Profesionales Independientes",
    description:
      "Arquitectos e ingenieros que buscan elevar la calidad de sus expedientes técnicos y presentaciones.",
  },
  {
    icon: Target,
    title: "Entidades Públicas",
    description:
      "Modernización de procesos y capacitación para cumplir con estándares BIM gubernamentales.",
  },
  {
    icon: TrendingUp,
    title: "Desarrolladores Inmobiliarios",
    description:
      "Visualización VR/AR para ventas y toma de decisiones más efectiva en proyectos de vivienda.",
  },
];

const benefits = [
  "Reducción de errores en un 40%",
  "Ahorro en costos de construcción",
  "Mejor coordinación de equipos",
  "Visualización realista pre-construcción",
  "Cumplimiento de normativas BIM",
  "Decisiones basadas en datos",
];

export function ClientFocusSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-widest mb-4 block">
            Nuestros Clientes
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Soluciones para{" "}
            <span className="text-gradient-gold">Cada Necesidad</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trabajamos con profesionales, empresas y entidades que buscan
            precisión, colaboración y sostenibilidad en sus proyectos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <profile.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {profile.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {profile.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-card rounded-3xl p-8 lg:p-10 border border-border"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              ¿Por qué elegir Elite Engineering?
            </h3>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-muted/50 border border-border">
              <p className="text-muted-foreground text-sm mb-4">
                "Elite Engineering transformó nuestra forma de presentar
                proyectos. Las visualizaciones VR nos ayudaron a cerrar más
                ventas."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">JC</span>
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm">
                    Juan Carlos M.
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Gerente de Proyectos
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 mt-6 text-accent font-semibold hover:underline"
            >
              Únete a nuestros clientes satisfechos
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}