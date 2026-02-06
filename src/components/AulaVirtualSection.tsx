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
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Video,
    title: "Clases en Vivo y Grabadas",
    description: "Accede a contenido en tiempo real o revísalo cuando lo necesites.",
  },
  {
    icon: BookOpen,
    title: "Material Descargable",
    description: "Recursos, plantillas y guías para aplicar en tus proyectos.",
  },
  {
    icon: Award,
    title: "Certificaciones",
    description: "Obtén certificados que avalen tu formación en metodología BIM.",
  },
  {
    icon: Users,
    title: "Comunidad Activa",
    description: "Conecta con profesionales y comparte experiencias.",
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
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-widest mb-4 block">
              Próximamente
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Aula <span className="text-gradient-gold">Virtual</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Lleva tu formación BIM al siguiente nivel con nuestra plataforma de
              aprendizaje en línea. Cursos diseñados por expertos para
              profesionales que buscan dominar las metodologías y herramientas
              más avanzadas.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="p-2 rounded-lg bg-accent/10">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
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
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold glow-gold"
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
            <div className="relative bg-gradient-card rounded-3xl p-8 border border-border overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />

              {/* Preview Header */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground">
                      Elite Academy
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Plataforma BIM
                    </p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  Coming Soon
                </div>
              </div>

              {/* Video Preview Placeholder */}
              <div className="relative z-10 aspect-video rounded-2xl bg-muted mb-6 overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/50 to-background/80">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-accent-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
                  <span>Vista previa del curso</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    2:30
                  </span>
                </div>
              </div>

              {/* Course List */}
              <div className="relative z-10">
                <h5 className="font-semibold text-foreground mb-4 text-sm">
                  Cursos Disponibles
                </h5>
                <div className="space-y-2">
                  {courses.map((course, index) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">{course}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 -right-4 lg:-right-8 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-semibold">+500 Inscritos</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}