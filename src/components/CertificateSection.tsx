import { motion } from "framer-motion";
import { Award, CheckCircle, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CertificateSection() {
    return (
        <section className="relative py-24 bg-background overflow-hidden border-t border-border/50">
            {/* Surrealistic Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Floating Particles/Cubes (Simulated) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/10 rounded-sm"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            x: [0, 20, 0],
                            rotate: [0, 180, 360],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Right Column - Surreal Image (Floating Certificate) */}
                    <div className="order-2 lg:order-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            {/* Main Certificate with Anti-Gravity Effect */}
                            <motion.div
                                animate={{
                                    y: [0, -25, 0],
                                    rotateX: [0, 5, 0],
                                    rotateY: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="relative z-10 perspective-1000"
                            >
                                <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
                                    <img
                                        src="/img/certificado.png"
                                        alt="Certificado Elite"
                                        className="w-full h-auto"
                                    />
                                    {/* Glassmorphism Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
                                </div>

                                {/* Floating Seal Decoration */}
                                <motion.div
                                    animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-orange-400 p-[2px] shadow-lg glow-orange"
                                >
                                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                        <ShieldCheck className="w-10 h-10 text-primary" />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Decorative "Force Fields" */}
                            <div className="absolute -inset-10 border border-primary/10 rounded-[2rem] -z-10 animate-pulse" />
                            <div className="absolute -inset-20 border border-primary/5 rounded-[3rem] -z-20" />
                        </motion.div>
                    </div>

                    {/* Left Column - Content */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs uppercase tracking-[0.3em] mb-6">
                                <Award className="w-4 h-4" />
                                Respaldo Internacional
                            </div>

                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
                                Obtén <span className="text-gradient-orange">Certificación</span> <br />
                                de alto impacto
                            </h2>

                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                Al finalizar satisfactoriamente nuestros programas, recibirás un certificado digital
                                con validez internacional, respaldado por la <span className="text-foreground font-bold">Universidad Dionisio Romero</span> y
                                <span className="text-primary font-bold"> KONSTRUE EDU</span>.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Validez Internacional", desc: "Aceptado en las principales constructoras y consultoras de la región." },
                                    { title: "Verificación QR", desc: "Validación digital instantánea para reclutadores y empresas." },
                                    { title: "Respaldo Académico", desc: "Garantía de calidad educativa por instituciones líderes en BIM." }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        className="flex gap-4 p-4 rounded-2xl bg-white border border-border/50 hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                            <CheckCircle className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-foreground font-bold mb-1">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Button size="lg" className="bg-primary text-white hover:bg-orange-600 font-black px-10 h-14 rounded-xl transition-all glow-orange group">
                                    <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                    Descargar Modelo PDF
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
