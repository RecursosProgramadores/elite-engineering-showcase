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
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    icon: GraduationCap,
    title: "Capacitación Municipalidad de Cajamarca",
    description: "Formación en metodologías BIM para funcionarios públicos.",
    category: "Capacitación",
  },
  {
    icon: Glasses,
    title: "Visualización con Realidad Virtual",
    description: "Experiencias VR para visualización inmersiva de proyectos.",
    category: "Tecnología",
  },
  {
    icon: Sparkles,
    title: "Capacitación VR/AR en Proyectos BIM",
    description: "Entrenamiento especializado en realidad virtual y aumentada.",
    category: "Capacitación",
  },
  {
    icon: Building,
    title: "Charlas en Universidad Nacional de Cajamarca",
    description: "Compartiendo conocimientos con la comunidad universitaria.",
    category: "Academia",
  },
  {
    icon: FileCheck,
    title: "Implementación en Entidades Públicas",
    description: "Apoyo en flujos de trabajo BIM en instituciones gubernamentales.",
    category: "Consultoría",
  },
  {
    icon: Plane,
    title: "Vuelos con Drones Colaborativos",
    description: "Levantamientos aerofotogramétricos en proyectos colaborativos.",
    category: "Tecnología",
  },
  {
    icon: Users,
    title: "Capacitación Empresarial",
    description: "Formación y adopción de BIM para empresas constructoras.",
    category: "Capacitación",
  },
  {
    icon: Sparkles,
    title: "Superposición AR en Proyectos",
    description: "Realidad aumentada para visualización en obra.",
    category: "Tecnología",
  },
  {
    icon: GraduationCap,
    title: "Capacitación Universitaria",
    description: "Formación de nuevas generaciones en universidades.",
    category: "Academia",
  },
  {
    icon: Award,
    title: "Licencias CYPE Autorizadas",
    description: "Software original y licencias autorizadas CYPE.",
    category: "Calidad",
  },
  {
    icon: Building,
    title: "Apoyo UNC",
    description: "Talleres continuos con Universidad Nacional de Cajamarca.",
    category: "Academia",
  },
];

export function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3;
  const maxIndex = Math.ceil(achievements.length / itemsPerView) - 1;

  const next = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section
      id="logros"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

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
            <Trophy className="w-4 h-4" />
            Nuestros Logros
            <Trophy className="w-4 h-4" />
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Trayectoria de{" "}
            <span className="text-gradient-cyan">Excelencia</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Cada logro representa nuestro compromiso con la calidad y la innovación.
          </p>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-10 bg-accent glow-cyan" : "w-2 bg-border hover:bg-accent/50"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-border hover:border-accent hover:bg-accent/10 hover:text-accent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-border hover:border-accent hover:bg-accent/10 hover:text-accent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
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
                <div className="group h-full glass-card-hover rounded-2xl p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 text-accent border border-accent/30">
                      {achievement.category}
                    </span>
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:from-secondary group-hover:to-accent transition-all duration-500"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <achievement.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: "11+", label: "Logros Destacados" },
            { value: "5+", label: "Universidades" },
            { value: "3+", label: "Entidades Públicas" },
            { value: "100%", label: "Compromiso" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group hover:glow-cyan transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-display font-black text-gradient-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}