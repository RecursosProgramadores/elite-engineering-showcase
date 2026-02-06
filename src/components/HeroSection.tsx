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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-32"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/40 to-background" />

      {/* Futuristic BIM Background Image */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'hue-rotate(180deg) brightness(0.8)',
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

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Branding and Text */}
          <div className="text-left">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
              style={{
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
              }}
            >
            </motion.div>
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-6 leading-[1.1]"
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
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed"
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
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a href="https://wa.me/51955833613" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-white font-bold px-8 py-7 text-lg glow-cyan hover:glow-cyan-strong transition-all duration-500 group"
                >
                  <MessageCircle className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Contáctanos
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#servicios">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent/50 hover:border-accent hover:bg-accent/10 text-accent px-8 py-7 text-lg group transition-all duration-300"
                >
                  Ver Servicios
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right Column: 3D Animation Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="relative h-[400px] lg:h-[600px] flex items-center justify-center"
          >
            {/* 3D Visual Content Placeholder */}
            <div className="relative w-full h-full max-w-lg mx-auto">
              {/* Spinning 3D mesh representation */}
              {/* Video Element - Container removed for a cleaner integration */}
              <video
                ref={(el) => {
                  if (el) {
                    el.play().catch(err => console.log("Autoplay blocked:", err));
                  }
                }}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.15)]"
              >
                <source src="assets/home3d.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Background ambient light */}
              <div className="absolute -inset-10 bg-accent/10 blur-[60px] rounded-full -z-10 animate-pulse" />
            </div>
          </motion.div>
        </div>

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