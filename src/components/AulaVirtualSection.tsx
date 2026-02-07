import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Play,
  Star,
  Clock,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const categories = [
  "Todas las categorías",
  "BIM",
  "Contratos NEC",
  "Estructuras",
  "Gestión 4.0",
];

const courses = [
  {
    id: 1,
    title: "Civil 3D aplicado a proyectos viales",
    instructor: "Luis Fernando Godoy Tejeda",
    duration: "07:31 Hrs",
    level: "Introductorio",
    rating: 5.0,
    price: 39.0,
    oldPrice: 49.99,
    image: "/curso/curso1.png",
    category: "BIM",
  },
  {
    id: 2,
    title: "Navisworks Manage",
    instructor: "Maycol Guerra Walde",
    duration: "07:59 Hrs",
    level: "Intermedio",
    rating: 5.0,
    price: 39.0,
    oldPrice: 49.99,
    image: "/curso/curso2.png",
    category: "BIM",
  },
  {
    id: 3,
    title: "Modelado BIM con Tekla Structures: Concreto Armado",
    instructor: "Diego Cáceres Araya",
    duration: "10:46 Hrs",
    level: "Avanzado",
    rating: 5.0,
    price: 49.0,
    oldPrice: 59.99,
    image: "/assets/carrousel/carrousel_3.png",
    category: "Estructuras",
  },
  {
    id: 4,
    title: "Análisis y diseño de estructuras metálicas con CYPE3D",
    instructor: "María Belén Arizaga Pino",
    duration: "03:08 Hrs",
    level: "Intermedio",
    rating: 5.0,
    price: 49.0,
    oldPrice: 59.99,
    image: "/assets/carrousel/carrousel_4.png",
    category: "Estructuras",
  },
  {
    id: 5,
    title: "Implementación ISO 19650",
    instructor: "Ing. Carlos Mendoza",
    duration: "12:15 Hrs",
    level: "Intermedio",
    rating: 4.9,
    price: 45.0,
    oldPrice: 55.0,
    image: "/assets/carrousel/carrousel.png",
    category: "BIM",
  },
];

export function AulaVirtualSection() {
  const [activeCategory, setActiveCategory] = useState("Todas las categorías");
  const [api, setApi] = useState<CarouselApi>();

  const filteredCourses = activeCategory === "Todas las categorías"
    ? courses
    : courses.filter(c => c.category === activeCategory);

  return (
    <section id="aula-virtual" className="relative py-24 bg-background overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-black text-foreground max-w-4xl mx-auto leading-tight"
          >
            Estudia desde cero y especialízate en áreas de la <span className="text-gradient-orange">construcción 4.0</span>
          </motion.h2>
        </div>

        {/* Categories Bar */}
        <div className="relative mb-12">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide no-scrollbar snap-x">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap snap-start border ${activeCategory === cat
                  ? "bg-primary border-primary text-white shadow-md"
                  : "bg-white border-border text-muted-foreground hover:bg-muted hover:border-border/60"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Carousel */}
        <div className="relative group/carousel">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              <AnimatePresence mode="popLayout">
                {filteredCourses.map((course) => (
                  <CarouselItem
                    key={course.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="h-full bg-white border border-border/40 rounded-2xl overflow-hidden hover:border-primary/20 hover:shadow-xl transition-all duration-500 group"
                    >
                      {/* Course Image/Preview */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center glow-orange">
                            <Play className="w-6 h-6 text-white fill-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-white/90 backdrop-blur-md border border-border/10">
                          <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{course.category}</span>
                        </div>
                      </div>

                      {/* Course Info */}
                      <div className="p-5 flex flex-col h-fit">
                        {/* Instructor */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                            <User className="w-3.5 h-3.5 text-muted-foreground" />
                          </div>
                          <span className="text-[11px] text-muted-foreground truncate font-medium">
                            {course.instructor}
                          </span>
                        </div>

                        <h3 className="text-foreground font-bold text-base mb-3 line-clamp-2 h-12 leading-snug group-hover:text-primary transition-colors">
                          {course.title}
                        </h3>

                        {/* Meta Info */}
                        <div className="flex items-center gap-3 text-muted-foreground text-xs mb-4">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {course.duration}
                          </div>
                          <div className="w-1 h-1 rounded-full bg-border" />
                          <span>{course.level}</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-6">
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-500" />
                            ))}
                          </div>
                          <span className="text-xs font-bold text-yellow-600">{course.rating.toFixed(1)}</span>
                        </div>

                        {/* Price & Action */}
                        <div className="mt-auto pt-4 border-t border-border/10 flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-[10px] text-muted-foreground/60 line-through">USD {course.oldPrice.toFixed(2)}</span>
                            <span className="text-lg font-black text-foreground">USD {course.price.toFixed(2)}</span>
                          </div>
                          <Button
                            className="bg-primary hover:bg-orange-600 text-white font-bold px-4 py-2 text-xs rounded-lg transition-all"
                          >
                            Comprar
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </AnimatePresence>
            </CarouselContent>

            {/* Custom Navigation Arrows */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
              <Button
                variant="outline"
                size="icon"
                onClick={() => api?.scrollPrev()}
                className="h-12 w-12 rounded-full border-border bg-white text-foreground hover:bg-primary hover:text-white transition-all shadow-md"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
              <Button
                variant="outline"
                size="icon"
                onClick={() => api?.scrollNext()}
                className="h-12 w-12 rounded-full border-border bg-white text-foreground hover:bg-primary hover:text-white transition-all shadow-md"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </Carousel>
        </div>

        {/* View All / More Actions */}
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            className="border-primary/20 text-primary hover:text-white hover:bg-primary px-8 h-14 text-sm tracking-widest uppercase font-bold transition-all"
          >
            Explorar todo el catálogo
          </Button>
        </div>
      </div>
    </section>
  );
}
