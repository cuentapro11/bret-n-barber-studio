import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Sparkles, Palette, Baby, Wind } from "lucide-react";

const services = [
  {
    icon: Scissors,
    name: "Corte Clásico",
    description: "Corte tradicional con acabado profesional",
    price: "RD$250",
  },
  {
    icon: Scissors,
    name: "Corte + Barba",
    description: "Combo completo para el caballero moderno",
    price: "RD$400",
  },
  {
    icon: Sparkles,
    name: "Diseño de Barba",
    description: "Perfilado y diseño personalizado de barba",
    price: "RD$300",
  },
  {
    icon: Palette,
    name: "Coloración",
    description: "Tinte para cabello o barba con productos premium",
    price: "RD$800",
  },
  {
    icon: Baby,
    name: "Corte Infantil",
    description: "Servicio especial para los más pequeños",
    price: "RD$200",
  },
  {
    icon: Wind,
    name: "Afeitado Premium",
    description: "Afeitado clásico con vapor y toalla caliente",
    price: "RD$500",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
            Nuestros Servicios
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Servicios & Precios
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground">
            Ofrecemos una amplia gama de servicios de barbería profesional.
            Todos los precios en Pesos Dominicanos (DOP).
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative bg-background/50 border border-border rounded-lg p-8 h-full card-hover overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-secondary border border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-primary font-serif">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/20 rounded-tr-lg group-hover:border-primary/40 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
