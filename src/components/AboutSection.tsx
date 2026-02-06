import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, History, Award } from "lucide-react";

const tabs = [
  {
    id: "historia",
    label: "Nuestra Historia",
    icon: History,
    content: `Elite Engineering E.I.R.L. nació con una visión clara: elevar los estándares de la ingeniería a través de la calidad, la innovación y el compromiso real con cada proyecto. Desde nuestros inicios, entendimos que el progreso no solo consiste en ejecutar bien, sino también en compartir conocimiento para mejorar la industria.

Por eso adoptamos metodologías BIM y herramientas digitales avanzadas no solo para optimizar proyectos, sino para enseñar, capacitar y aplicar con criterio técnico, generando valor real para nuestros clientes. Nuestro crecimiento ha sido resultado directo del trabajo bien hecho, de las entregas cumplidas y de una búsqueda constante de mejora.

Integramos modelamiento BIM, diseño de viviendas, vistas 360°, Realidad Virtual y Realidad Aumentada para que nuestros clientes puedan visualizar, decidir y construir con confianza. Hoy, acompañamos a cada cliente como aliado estratégico, comprometidos a brindar soluciones técnicas claras, eficientes y de alto nivel.`,
  },
  {
    id: "vision",
    label: "Visión",
    icon: Eye,
    content: `Ser una empresa referente en ingeniería y metodología BIM, reconocida por la excelencia técnica, el cumplimiento de compromisos y la capacidad de innovación, impulsando proyectos de alto nivel y contribuyendo al crecimiento de la industria a través de la aplicación y enseñanza de nuevas tecnologías.`,
  },
  {
    id: "mision",
    label: "Misión",
    icon: Target,
    content: `Brindar soluciones de ingeniería de alta calidad mediante la implementación BIM, el modelamiento especializado, el diseño de viviendas y las tecnologías digitales avanzadas, cumpliendo cada compromiso con responsabilidad, precisión y enfoque en las necesidades del cliente.

Promovemos la mejora continua y la enseñanza de nuevas metodologías, contribuyendo al desarrollo profesional de nuestros clientes y al progreso de la industria.`,
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="nosotros"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-widest mb-4 block">
            Sobre Nosotros
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Quiénes <span className="text-gradient-gold">Somos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Elite Engineering E.I.R.L. es especializada en implementación BIM,
            modelamiento BIM para expedientes técnicos, diseño de viviendas y
            transformación digital en proyectos de ingeniería y construcción.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {tabs.map((tab, index) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gradient-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <tab.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {tab.label}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {tab.content.substring(0, 200)}...
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Detailed Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-card rounded-3xl p-8 lg:p-10 border border-border"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-accent/10">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Nuestra Historia
                </h3>
                <p className="text-muted-foreground text-sm">
                  Más de una década de excelencia
                </p>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Elite Engineering E.I.R.L. nació con una visión clara:{" "}
                <span className="text-foreground font-medium">
                  elevar los estándares de la ingeniería
                </span>{" "}
                a través de la calidad, la innovación y el compromiso real con
                cada proyecto.
              </p>
              <p>
                Desde nuestros inicios, entendimos que el progreso no solo
                consiste en ejecutar bien, sino también en{" "}
                <span className="text-accent font-medium">
                  compartir conocimiento
                </span>{" "}
                para mejorar la industria.
              </p>
              <p>
                Integramos modelamiento BIM, diseño de viviendas, vistas 360°,
                Realidad Virtual y Realidad Aumentada para que nuestros clientes
                puedan{" "}
                <span className="text-foreground font-medium">
                  visualizar, decidir y construir con confianza
                </span>
                .
              </p>
            </div>

            {/* Timeline Preview */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-6">
                {["2014", "2018", "2021", "2024"].map((year, index) => (
                  <div key={year} className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        index === 3 ? "bg-accent" : "bg-muted-foreground/30"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        index === 3 ? "text-accent" : "text-muted-foreground"
                      }`}
                    >
                      {year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}