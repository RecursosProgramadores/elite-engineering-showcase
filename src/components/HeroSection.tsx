import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircle, ChevronDown, Building2, Sparkles, GraduationCap, BookOpen, Clock, Users, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import AutoplayPlugin from "embla-carousel-autoplay";

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// 3D Grid background
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(4 82% 56% / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(4 82% 56% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "center top",
        }}
      />
    </div>
  );
}

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-32"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-white to-background" />

      {/* Futuristic BIM Background Image */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(1) brightness(1.2)',
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[100px]"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <GridBackground />
      <FloatingParticles />

      {/* Carousel Wrapper */}
      <Carousel
        setApi={setApi}
        className="w-full relative z-10"
        plugins={[
          AutoplayPlugin({
            delay: 8000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {/* Slide 1: Servicios BIM */}
          <CarouselItem>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs uppercase tracking-[0.3em] mb-6"
                    >
                      <Building2 className="w-3.5 h-3.5" />
                      Líderes en Implementación BIM
                    </motion.div>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-6 leading-[1.1]">
                      Ingeniería de <br />
                      <span className="text-gradient-orange">élite</span>
                      <span className="text-primary text-5xl md:text-8xl">.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed">
                      Especialistas en modelamiento, diseño de viviendas y transformación digital.
                      Impulsamos proyectos más <span className="text-primary font-medium">precisos</span> y <span className="text-primary font-medium">sostenibles</span>.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <a href="https://wa.me/51955833613" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button
                          size="lg"
                          className="w-full sm:w-auto bg-primary hover:bg-orange-600 text-white font-bold px-8 py-7 text-lg glow-orange transition-all duration-500 group"
                        >
                          <MessageCircle className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                          Contáctanos
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                      <a href="#servicios" className="w-full sm:w-auto">
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full sm:w-auto border-primary/50 hover:border-primary hover:bg-primary/5 text-primary px-8 py-7 text-lg group transition-all duration-300"
                        >
                          Ver Servicios
                        </Button>
                      </a>
                    </div>

                    {/* Integrated Stats for Slide 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-border/20"
                    >
                      {[
                        { value: "100+", label: "Proyectos BIM" },
                        { value: "50+", label: "Capacitaciones" },
                        { value: "10+", label: "Años Experiencia" },
                        { value: "98%", label: "Clientes Satisfechos" },
                      ].map((stat, index) => (
                        <div key={stat.label} className="flex flex-col">
                          <span className="text-2xl font-display font-black text-gradient-orange">
                            {stat.value}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                  className="relative h-[400px] lg:h-[600px] flex items-center justify-center p-4"
                >
                  <div className="relative w-full h-full max-w-lg flex items-center justify-center">
                    <img
                      src="/assets/carrousel/carrousel.png"
                      alt="Servicios BIM"
                      className="w-full h-full object-contain rounded-2xl drop-shadow-[0_10px_30px_rgba(236,64,52,0.15)]"
                    />
                    <div className="absolute -inset-10 bg-primary/5 blur-[80px] rounded-full -z-10 animate-pulse" />
                  </div>
                </motion.div>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 2: Aula Virtual */}
          <CarouselItem>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs uppercase tracking-[0.3em] mb-6"
                    >
                      <GraduationCap className="w-3.5 h-3.5" />
                      Elite Academy
                    </motion.div>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-6 leading-[1.1]">
                      Aula <br />
                      <span className="text-gradient-orange">Virtual</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed">
                      Domina las metodologías BIM más avanzadas. Cursos diseñados por expertos
                      para profesionales del futuro.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <a href="#aula-virtual" className="w-full sm:w-auto">
                        <Button
                          size="lg"
                          className="w-full sm:w-auto bg-primary hover:bg-orange-600 text-white font-bold px-8 py-7 text-lg glow-orange transition-all duration-500 group"
                        >
                          Ver Cursos
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                      <a href="#contacto" className="w-full sm:w-auto">
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full sm:w-auto border-primary/50 hover:border-primary hover:bg-primary/5 text-primary px-8 py-7 text-lg group"
                        >
                          Registrarme
                        </Button>
                      </a>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1 }}
                  className="relative h-[400px] lg:h-[600px] flex items-center justify-center p-4 perspective-1000"
                >
                  <div className="relative w-full h-full max-w-lg flex items-center justify-center">
                    <img
                      src="/assets/carrousel/carrousel_2.png"
                      alt="Aula Virtual"
                      className="w-full h-full object-contain rounded-2xl drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                    />
                    <div className="absolute -inset-10 bg-secondary/5 blur-[80px] rounded-full -z-10" />
                  </div>
                </motion.div>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 3: Modelamiento Avanzado */}
          <CarouselItem>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-6"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Visualización de Proyectos
                    </motion.div>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-6 leading-[1.1]">
                      Diseño y <br />
                      <span className="text-gradient-orange">Realidad</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed">
                      Visualiza tus proyectos antes de construirlos con nuestras soluciones
                      de realidad aumentada y modelamiento 3D de alta precisión.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <a href="#portafolio" className="w-full sm:w-auto">
                        <Button
                          size="lg"
                          className="w-full sm:w-auto bg-primary hover:bg-orange-600 text-white font-bold px-8 py-7 text-lg glow-orange transition-all duration-500 group"
                        >
                          Ver Proyectos
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="relative h-[400px] lg:h-[600px] flex items-center justify-center p-4"
                >
                  <div className="relative w-full h-full max-w-lg flex items-center justify-center">
                    <img
                      src="/assets/carrousel/carrousel_3.png"
                      alt="Visualización Proyectos"
                      className="w-full h-full object-contain rounded-2xl drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 4: Transformación Digital */}
          <CarouselItem>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-semibold text-xs uppercase tracking-[0.3em] mb-6"
                    >
                      <Building2 className="w-3.5 h-3.5" />
                      Consultoría Especializada
                    </motion.div>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-6 leading-[1.1]">
                      Gestión <br />
                      <span className="text-gradient-orange">Inteligente</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed">
                      Optimizamos tus flujos de trabajo con metodologías ágiles y herramientas
                      digitales de vanguardia para la construcción.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <a href="#contacto" className="w-full sm:w-auto">
                        <Button
                          size="lg"
                          className="w-full sm:w-auto bg-primary hover:bg-orange-600 text-white font-bold px-8 py-7 text-lg glow-orange transition-all duration-500 group"
                        >
                          Agenda una Cita
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1 }}
                  className="relative h-[400px] lg:h-[600px] flex items-center justify-center p-4"
                >
                  <div className="relative w-full h-full max-w-lg flex items-center justify-center">
                    <img
                      src="/assets/carrousel/carrousel_4.png"
                      alt="Gestión Inteligente"
                      className="w-full h-full object-contain rounded-2xl drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

        {/* Custom Navigation (Arrows) */}
        <div className="hidden lg:block">
          <CarouselPrevious className="left-4 bg-background/20 backdrop-blur-md border-white/10 hover:bg-background/40" />
          <CarouselNext className="right-4 bg-background/20 backdrop-blur-md border-white/10 hover:bg-background/40" />
        </div>

        {/* Pager Dots */}
        <div className="flex justify-center gap-2 mt-8 relative z-20">
          {[0, 1, 2, 3].map((dot) => (
            <button
              key={dot}
              onClick={() => api?.scrollTo(dot)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${current === dot ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
                }`}
            />
          ))}
        </div>
      </Carousel>


      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#nosotros"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-[0.3em] group-hover:text-primary">Descubrir</span>
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
}