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
    asset: "assets/trayectoria/municajamarca.jpeg",
    type: "image"
  },
  {
    icon: Glasses,
    title: "Visualización con Realidad Virtual",
    description: "Experiencias VR para visualización inmersiva de proyectos.",
    category: "Tecnología",
    asset: "assets/trayectoria/vizualizacionrealidadvirtual.mp4",
    type: "video"
  },
  {
    icon: Sparkles,
    title: "Capacitación VR/AR en Proyectos BIM",
    description: "Entrenamiento especializado en realidad virtual y aumentada.",
    category: "Capacitación",
    asset: "assets/trayectoria/Capacitacionbim.jpeg",
    type: "image"
  },
  {
    icon: Building,
    title: "Charlas en Universidad Nacional de Cajamarca",
    description: "Compartiendo conocimientos con la comunidad universitaria.",
    category: "Academia",
    asset: "assets/trayectoria/universidadcajamarca.jpeg",
    type: "image"
  },
  {
    icon: FileCheck,
    title: "Implementación en Entidades Públicas",
    description: "Apoyo en flujos de trabajo BIM en instituciones gubernamentales.",
    category: "Consultoría",
    asset: "assets/trayectoria/entidadespublicas.jpeg",
    type: "image"
  },
  {
    icon: Plane,
    title: "Vuelos con Drones Colaborativos",
    description: "Levantamientos aerofotogramétricos en proyectos colaborativos.",
    category: "Tecnología",
    asset: "assets/trayectoria/Vueloscondrones.jpeg",
    type: "image"
  },
  {
    icon: Users,
    title: "Capacitación Empresarial",
    description: "Formación y adopción de BIM para empresas constructoras.",
    category: "Capacitación",
    asset: "assets/trayectoria/implementaciondeempresas.jpeg",
    type: "image"
  },
  {
    icon: Sparkles,
    title: "Superposición AR en Proyectos",
    description: "Realidad aumentada para visualización en obra.",
    category: "Tecnología",
    asset: "assets/trayectoria/entidadespublicas.jpeg",
    type: "image"
  },
  {
    icon: GraduationCap,
    title: "Capacitación Universitaria",
    description: "Formación de nuevas generaciones en universidades.",
    category: "Academia",
    asset: "assets/trayectoria/capacitaciondiferentesuniversidades.jpeg",
    type: "image"
  },
  {
    icon: Award,
    title: "Licencias CYPE Autorizadas",
    description: "Software original y licencias autorizadas CYPE.",
    category: "Calidad",
    asset: "assets/trayectoria/cype.jpeg",
    type: "image"
  },
  {
    icon: Building,
    title: "Apoyo UNC",
    description: "Talleres continuos con Universidad Nacional de Cajamarca.",
    category: "Academia",
    asset: "assets/trayectoria/charlasenapoyo.jpeg",
    type: "image"
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
    <section id="logros" ref={ref} className="relative py-32 lg:py-56 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24 lg:mb-32 max-w-4xl"
        >
          <motion.span
            className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-[0.5em] mb-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Trayectoria de Élite
          </motion.span>
          <h2 className="font-display text-5xl md:text-8xl font-black text-[#031432] mb-10 leading-[0.9] tracking-tighter">
            Impacto que <br />
            <span className="text-gradient-orange">Trasciende</span>
          </h2>
          <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-2xl">
            Cada hito en nuestra historia es un testimonio de nuestra obsesión por la excelencia técnica y la innovación constante.
          </p>
        </motion.div>

        {/* Carousel & Controls */}
        <div className="relative">
          <div className="flex items-center justify-between mb-12">
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={prev}
                className="w-16 h-16 rounded-2xl glass-modern border-none shadow-xl hover:bg-primary hover:text-white transition-all duration-500"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={next}
                className="w-16 h-16 rounded-2xl glass-modern border-none shadow-xl hover:bg-primary hover:text-white transition-all duration-500"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            <div className="hidden md:flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? "w-16 bg-primary shadow-[0_0_15px_rgba(236,64,52,0.5)]" : "w-4 bg-slate-200"
                    }`}
                />
              ))}
            </div>
          </div>

          <div className="overflow-visible">
            <motion.div
              className="flex gap-10"
              animate={{ x: `${-currentIndex * 105}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]"
                >
                  <div className="group h-[600px] glass-modern rounded-[3rem] bg-white border-none shadow-2xl relative overflow-hidden transition-all duration-700 hover:-translate-y-4">
                    {/* Immersive Media */}
                    <div className="absolute inset-0">
                      {achievement.type === "video" ? (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        >
                          <source src={achievement.asset} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                          src={achievement.asset}
                          alt={achievement.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#031432] via-[#031432]/20 to-transparent" />
                    </div>

                    {/* Elite Metadata */}
                    <div className="absolute inset-0 p-12 flex flex-col justify-end">
                      <span className="inline-flex w-fit px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg">
                        {achievement.category}
                      </span>
                      <h3 className="text-3xl font-black text-white mb-6 leading-tight group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-slate-300 font-medium leading-relaxed opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                        {achievement.description}
                      </p>
                    </div>

                    <div className="absolute top-10 right-10 w-16 h-16 rounded-[1.5rem] bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white shadow-2xl">
                      <achievement.icon className="w-8 h-8" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* High Precision Stats Bar */}
        <div className="mt-32 pt-20 border-t border-slate-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-left">
            {[
              { value: "11+", label: "Hitos Destacados" },
              { value: "05+", label: "Instituciones de Élite" },
              { value: "03+", label: "Gobiernos Regionales" },
              { value: "100%", label: "Trazabilidad" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-5xl lg:text-7xl font-black text-gradient-orange">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}