import { motion } from "framer-motion";
import { ArrowUp, Building2, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  servicios: [
    { name: "Implementación BIM", href: "#servicios" },
    { name: "Modelamiento BIM", href: "#servicios" },
    { name: "Diseño de Viviendas", href: "#servicios" },
    { name: "Capacitaciones", href: "#servicios" },
  ],
  empresa: [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Logros", href: "#logros" },
    { name: "Aula Virtual", href: "#aula-virtual" },
    { name: "Contacto", href: "#contacto" },
  ],
  tecnologia: [
    { name: "Realidad Virtual", href: "#servicios" },
    { name: "Realidad Aumentada", href: "#servicios" },
    { name: "Vistas 360°", href: "#servicios" },
    { name: "Drones", href: "#logros" },
  ],
};

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

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center glow-cyan">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-gradient-cyan">
                  ELITE ENGINEERING
                </span>
                <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
                  Consultora y Capacitadora
                </span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Ingeniería de élite, compromiso que se cumple. Especialistas en
              implementación BIM, modelamiento y transformación digital para
              proyectos de ingeniería y construcción.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <a href="tel:+51955833613" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                955 833 613 / 942 015 745
              </a>
              <a href="mailto:gerencia@ingenierodeelite.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                gerencia@ingenierodeelite.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Jirón El Inca 537, Cajamarca
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Tecnología</h4>
            <ul className="space-y-3">
              {footerLinks.tecnologia.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Elite Engineering E.I.R.L. Todos los
              derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-muted-foreground text-sm hover:text-accent transition-colors"
              >
                Términos y Condiciones
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm hover:text-accent transition-colors"
              >
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-8 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent text-white flex items-center justify-center shadow-lg glow-cyan z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}