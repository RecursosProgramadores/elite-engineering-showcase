import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  GraduationCap,
  Glasses,
  Building,
  Plane,
  Award,
  FileCheck,
  Users,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    icon: GraduationCap,
    title: "Capacitación Municipalidad de Cajamarca",
    description:
      "Formación en metodologías BIM para funcionarios públicos, impulsando la modernización de procesos.",
    category: "Capacitación",
  },
  {
    icon: Glasses,
    title: "Visualización con Realidad Virtual",
    description:
      "Implementación de experiencias VR para visualización inmersiva de proyectos arquitectónicos.",
    category: "Tecnología",
  },
  {
    icon: Sparkles,
    title: "Capacitación VR/AR en Proyectos BIM",
    description:
      "Entrenamiento especializado en uso de realidad virtual y aumentada aplicada a metodología BIM.",
    category: "Capacitación",
  },
  {
    icon: Building,
    title: "Charlas en Universidad Nacional de Cajamarca",
    description:
      "Invitados a compartir conocimientos sobre BIM y tecnologías digitales con la comunidad universitaria.",
    category: "Academia",
  },
  {
    icon: FileCheck,
    title: "Implementación en Entidades Públicas",
    description:
      "Apoyo activo en la implementación de flujos de trabajo BIM en instituciones gubernamentales.",
    category: "Consultoría",
  },
  {
    icon: Plane,
    title: "Vuelos con Drones Colaborativos",
    description:
      "Integración de levantamientos aerofotogramétricos con drones en proyectos colaborativos.",
    category: "Tecnología",
  },
  {
    icon: Users,
    title: "Capacitación e Implementación Empresarial",
    description:
      "Formación y acompañamiento en la adopción de BIM para empresas del sector construcción.",
    category: "Capacitación",
  },
  {
    icon: Sparkles,
    title: "Superposición AR en Proyectos",
    description:
      "Aplicación de realidad aumentada para visualización de modelos sobre entorno físico en obra.",
    category: "Tecnología",
  },
  {
    icon: GraduationCap,
    title: "Capacitación Universitaria",
    description:
      "Comprometidos con la formación de nuevas generaciones en diferentes universidades del país.",
    category: "Academia",
  },
  {
    icon: Award,
    title: "Licencias CYPE Autorizadas",
    description:
      "Trabajamos exclusivamente con licencias originales y autorizadas de software CYPE.",
    category: "Calidad",
  },
  {
    icon: Building,
    title: "Apoyo UNC",
    description:
      "Charlas y talleres continuos en colaboración con la Universidad Nacional de Cajamarca.",
    category: "Academia",
  },
];

export function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3;
  const maxIndex = Math.ceil(achievements.length / itemsPerView) - 1;

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section
      id="logros"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-widest mb-4 block">
            Nuestros Logros
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Trayectoria de{" "}
            <span className="text-gradient-gold">Excelencia</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada logro representa nuestro compromiso con la calidad, la
            innovación y el impacto positivo en la industria de la construcción.
          </p>
        </motion.div>

        {/* Carousel Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? "w-8 bg-accent" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-border hover:border-accent hover:text-accent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-border hover:border-accent hover:text-accent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Achievements Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `${-currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="group h-full bg-gradient-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
                      {achievement.category}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <achievement.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 p-8 rounded-2xl bg-gradient-card border border-border"
        >
          {[
            { value: "11+", label: "Logros Destacados" },
            { value: "5+", label: "Universidades" },
            { value: "3+", label: "Entidades Públicas" },
            { value: "100%", label: "Compromiso" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}