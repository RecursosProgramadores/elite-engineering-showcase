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
  Sparkles,
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
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/103097936/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/igenierosdeelite",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
      </svg>
    ),
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
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            Contacto
            <Sparkles className="w-4 h-4" />
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Hablemos de tu{" "}
            <span className="text-gradient-orange">Proyecto</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Estamos listos para acompañarte en la transformación digital
            de tus proyectos de ingeniería.
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
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-border/40 hover:border-primary/20 hover:shadow-lg transition-all duration-500 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                    <info.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="font-semibold text-foreground mb-4">Síguenos</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white border border-border/40 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:border-primary/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
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
              className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-primary/20 hover:border-primary transition-all group shadow-lg glow-orange"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-xl">
                  Chatea con nosotros
                </p>
                <p className="text-muted-foreground text-sm">
                  Respuesta rápida por WhatsApp
                </p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-primary ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white border border-border/40 rounded-3xl p-8 lg:p-10 shadow-xl">
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
                      className="bg-muted/30 border-border focus:border-primary focus:ring-primary/20"
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
                      className="bg-muted/30 border-border focus:border-primary focus:ring-primary/20"
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
                    className="bg-muted/30 border-border focus:border-primary focus:ring-primary/20"
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
                    className="bg-muted/30 border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensaje
                  </label>
                  <Textarea
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="bg-muted/30 border-border focus:border-primary focus:ring-primary/20 min-h-[120px] resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-orange-600 text-white font-bold shadow-lg glow-orange transition-all"
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