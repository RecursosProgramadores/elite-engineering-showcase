import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Video,
  Award,
  Users,
  Clock,
  ArrowRight,
  Play,
  CheckCircle2,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Video,
    title: "Clases en Vivo",
    description: "Contenido en tiempo real con expertos.",
  },
  {
    icon: BookOpen,
    title: "Material Descargable",
    description: "Recursos y plantillas profesionales.",
  },
  {
    icon: Award,
    title: "Certificaciones",
    description: "Certificados de formación BIM.",
  },
  {
    icon: Users,
    title: "Comunidad Activa",
    description: "Red de profesionales BIM.",
  },
];

const courses = [
  "Fundamentos BIM",
  "Modelamiento Revit",
  "Coordinación BIM",
  "Realidad Virtual Aplicada",
  "Gestión de Proyectos BIM",
];

export function AulaVirtualSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="aula-virtual"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-[0.3em] mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <GraduationCap className="w-4 h-4" />
              Próximamente
            </motion.span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-6">
              Aula <span className="text-gradient-cyan">Virtual</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Lleva tu formación BIM al siguiente nivel con nuestra plataforma de
              aprendizaje en línea. Cursos diseñados por expertos para
              profesionales que buscan dominar las metodologías más avanzadas.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl glass-card group hover:border-accent/30 transition-all"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent transition-colors">
                    <feature.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1 group-hover:text-accent transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-white font-bold glow-cyan hover:glow-cyan-strong transition-all"
              >
                <Clock className="w-4 h-4 mr-2" />
                Notificarme al Lanzamiento
              </Button>
              <span className="text-sm text-muted-foreground">
                Sé el primero en acceder
              </span>
            </div>
          </motion.div>

          {/* Right - Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative glass-card rounded-3xl p-8 overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-[60px]" />

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center glow-cyan">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground text-lg">
                      Elite Academy
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Plataforma BIM
                    </p>
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 text-accent text-xs font-bold border border-accent/30 animate-pulse">
                  Coming Soon
                </div>
              </div>

              {/* Video Preview */}
              <motion.div
                className="relative z-10 aspect-video rounded-2xl overflow-hidden group cursor-pointer mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-primary/70 to-background/90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center glow-cyan-strong"
                    whileHover={{ scale: 1.15 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Vista previa del curso
                  </span>
                  <span className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded">
                    <Clock className="w-3 h-3" />
                    2:30
                  </span>
                </div>
              </motion.div>

              {/* Course List */}
              <div className="relative z-10">
                <h5 className="font-semibold text-foreground mb-4 text-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  Cursos Disponibles
                </h5>
                <div className="space-y-2">
                  {courses.map((course, index) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-accent/10 transition-colors group cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground group-hover:text-accent transition-colors flex-1">
                        {course}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-4 -right-4 lg:-right-8 bg-gradient-to-r from-secondary to-accent text-white px-6 py-3 rounded-xl shadow-lg glow-cyan"
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-bold">+500 Interesados</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}