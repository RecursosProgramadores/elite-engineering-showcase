import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "955 833 613 / 942 015 745",
    href: "https://wa.me/51955833613",
  },
  {
    icon: Mail,
    label: "Email",
    value: "gerencia@ingenierodeelite.com",
    href: "mailto:gerencia@ingenierodeelite.com",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Jirón El Inca 537, Cajamarca",
    href: "https://maps.google.com/?q=Jiron+El+Inca+537+Cajamarca",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://web.facebook.com/p/Elite-Engineering-100048414673399/",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/103097936/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/igenierosdeelite",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-widest mb-4 block">
            Contacto
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Hablemos de tu{" "}
            <span className="text-gradient-gold">Proyecto</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estamos listos para escucharte y acompañarte en la transformación
            digital de tus proyectos de ingeniería.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              Información de Contacto
            </h3>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-gradient-card border border-border hover:border-accent/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <info.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {info.value}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="font-semibold text-foreground mb-4">Síguenos</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/51955833613"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-accent/10 border border-accent/30 hover:bg-accent/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-lg">
                  Chatea con nosotros
                </p>
                <p className="text-muted-foreground text-sm">
                  Respuesta rápida por WhatsApp
                </p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-accent ml-auto" />
            </motion.a>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-card rounded-3xl p-8 border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Envíanos un mensaje
              </h3>
              <p className="text-muted-foreground text-sm mb-8">
                Completa el formulario y te contactaremos pronto.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nombre
                    </label>
                    <Input
                      type="text"
                      placeholder="Tu nombre"
                      className="bg-muted border-border focus:border-accent"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Empresa
                    </label>
                    <Input
                      type="text"
                      placeholder="Tu empresa"
                      className="bg-muted border-border focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-muted border-border focus:border-accent"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Teléfono
                  </label>
                  <Input
                    type="tel"
                    placeholder="+51 999 999 999"
                    className="bg-muted border-border focus:border-accent"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensaje
                  </label>
                  <Textarea
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="bg-muted border-border focus:border-accent min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold glow-gold"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      ¡Mensaje Enviado!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}