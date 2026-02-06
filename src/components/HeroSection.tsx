import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown, Building2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent rounded-full"
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
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(195 100% 50% / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(195 100% 50% / 0.1) 1px, transparent 1px)
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/30 to-background" />
      
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

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            }}
          >
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50 glow-cyan">
              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/50 to-transparent"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="text-left">
                <h2 className="font-display text-2xl font-bold text-gradient-cyan">
                  ELITE ENGINEERING
                </h2>
                <p className="text-xs text-muted-foreground tracking-[0.25em] uppercase">
                  Consultora y Capacitadora
                </p>
              </div>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">BIM • VR • AR • 360° • Capacitación</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-[1.1]"
          >
            Ingeniería de{" "}
            <span className="relative inline-block">
              <span className="text-gradient-cyan">élite</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </span>
            ,{" "}
            <br className="hidden md:block" />
            compromiso que{" "}
            <span className="text-gradient-blue">se cumple</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Especialistas en implementación BIM, modelamiento, diseño de viviendas
            y transformación digital. Impulsamos proyectos más{" "}
            <span className="text-accent font-medium">precisos</span>,{" "}
            <span className="text-secondary font-medium">colaborativos</span> y{" "}
            <span className="text-foreground font-medium">sostenibles</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="https://wa.me/51955833613" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-white font-bold px-10 py-7 text-lg glow-cyan hover:glow-cyan-strong transition-all duration-500 group"
              >
                <MessageCircle className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Contáctanos por WhatsApp
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#servicios">
              <Button
                size="lg"
                variant="outline"
                className="border-accent/50 hover:border-accent hover:bg-accent/10 text-accent px-10 py-7 text-lg group transition-all duration-300"
              >
                Explorar Servicios
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-border/30"
          >
            {[
              { value: "100+", label: "Proyectos BIM" },
              { value: "50+", label: "Capacitaciones" },
              { value: "10+", label: "Años Experiencia" },
              { value: "98%", label: "Clientes Satisfechos" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="text-3xl md:text-5xl font-display font-black text-gradient-cyan mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#nosotros"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-[0.3em] group-hover:text-accent">Descubrir</span>
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
}