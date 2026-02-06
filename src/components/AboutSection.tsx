import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, History, Rocket, CheckCircle2 } from "lucide-react";

const timelineEvents = [
  { year: "2014", title: "Fundación", description: "Nace Elite Engineering con visión de excelencia" },
  { year: "2017", title: "Expansión BIM", description: "Adopción de metodologías BIM avanzadas" },
  { year: "2020", title: "Innovación Digital", description: "Integración de VR, AR y vistas 360°" },
  { year: "2024", title: "Liderazgo Regional", description: "Referentes en capacitación BIM" },
];

const values = [
  { icon: Target, title: "Misión", text: "Brindar soluciones de ingeniería de alta calidad mediante la implementación BIM, el modelamiento especializado, el diseño de viviendas y las tecnologías digitales avanzadas." },
  { icon: Eye, title: "Visión", text: "Ser una empresa referente en ingeniería y metodología BIM, reconocida por la excelencia técnica, el cumplimiento de compromisos y la capacidad de innovación." },
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

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
            <span className="w-8 h-px bg-accent" />
            Sobre Nosotros
            <span className="w-8 h-px bg-accent" />
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Quiénes <span className="text-gradient-cyan">Somos</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Elite Engineering E.I.R.L. nació con una visión clara:{" "}
            <span className="text-foreground font-medium">elevar los estándares de la ingeniería</span>{" "}
            a través de la calidad, la innovación y el compromiso real con cada proyecto.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-8">
            <History className="w-5 h-5 text-accent" />
            <h3 className="font-display text-2xl font-bold text-foreground">Nuestra Historia</h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent hidden md:block" />

            <div className="grid md:grid-cols-4 gap-6">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  className="relative"
                >
                  <div className="glass-card-hover rounded-2xl p-6 text-center group">
                    {/* Year Circle */}
                    <div className="relative mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4 group-hover:glow-cyan transition-all duration-300">
                      <span className="font-display font-bold text-white text-sm">{event.year}</span>
                    </div>
                    <h4 className="font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              className="glass-card-hover rounded-3xl p-8 group"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 group-hover:from-secondary group-hover:to-accent transition-all duration-500">
                  <item.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values List */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 glass-card rounded-3xl p-8 lg:p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="w-6 h-6 text-accent" />
            <h3 className="font-display text-2xl font-bold text-foreground">Nuestro Compromiso</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Excelencia técnica en cada proyecto",
              "Innovación con tecnologías VR/AR",
              "Capacitación continua del equipo",
              "Cumplimiento de estándares BIM",
              "Trabajo colaborativo y transparente",
              "Compromiso con el desarrollo sostenible",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent/5 transition-colors group"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-foreground text-sm group-hover:text-accent transition-colors">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}