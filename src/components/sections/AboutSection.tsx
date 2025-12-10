import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Sparkles } from "lucide-react";
import aboutImage from "@/assets/about-barber.jpg";

const advantages = [
  {
    icon: Heart,
    title: "Atención Personalizada",
    description: "Cada cliente recibe un servicio único adaptado a su estilo y personalidad.",
  },
  {
    icon: Sparkles,
    title: "Productos de Alta Calidad",
    description: "Utilizamos solo los mejores productos profesionales del mercado.",
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "Más de 10 años perfeccionando el arte del corte y diseño de barba.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={aboutImage}
                  alt="Barbero profesional en acción"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
              
              {/* Decorative Frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 rounded-lg -z-10" />
              
              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg"
              >
                <span className="block text-4xl font-bold font-serif">10+</span>
                <span className="text-sm">Años de experiencia</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
                Sobre Nosotros
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                El Arte del Buen Corte
              </h2>
              <div className="w-20 h-0.5 bg-primary mb-8" />
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              En <span className="text-primary font-semibold">Miguel Bretón Barber Shop</span> combinamos 
              técnica, estilo y personalidad en cada corte. Con más de 10 años de experiencia, 
              ofrecemos servicios modernos y clásicos pensados para el caballero que desea 
              siempre lucir impecable.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Nuestra misión es brindar una atención profesional con resultados que marcan 
              la diferencia. Creemos que cada visita a nuestra barbería debe ser una 
              experiencia única y satisfactoria.
            </p>

            {/* Advantages */}
            <div className="space-y-6 pt-6">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                    <advantage.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {advantage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
