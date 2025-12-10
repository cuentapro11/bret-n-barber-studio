import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Star, Gift, Calendar, Award } from "lucide-react";

const promotions = [
  {
    icon: Star,
    title: "Combo Premium",
    description: "Corte + Barba + Cejas",
    originalPrice: "RD$850",
    promoPrice: "RD$650",
    badge: "Más Popular",
    badgeColor: "bg-primary",
  },
  {
    icon: Calendar,
    title: "Martes Infantil",
    description: "Corte para niños con precio especial",
    originalPrice: "RD$200",
    promoPrice: "RD$150",
    badge: "Solo Martes",
    badgeColor: "bg-secondary",
  },
  {
    icon: Gift,
    title: "Miércoles de Caballeros",
    description: "Afeitado Premium con vapor",
    originalPrice: "RD$500",
    promoPrice: "RD$350",
    badge: "Solo Miércoles",
    badgeColor: "bg-secondary",
  },
  {
    icon: Award,
    title: "Tarjeta de Puntos",
    description: "Acumula 5 cortes y obtén el 6to completamente gratis",
    originalPrice: "",
    promoPrice: "GRATIS",
    badge: "Lealtad",
    badgeColor: "bg-gold-dark",
  },
];

export function PromotionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="promociones" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-primary" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-primary" />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
            Ofertas Especiales
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Promociones
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground">
            Aprovecha nuestras ofertas exclusivas y ahorra mientras luces impecable.
          </p>
        </motion.div>

        {/* Promotions Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative bg-card border border-border rounded-xl p-8 h-full card-hover overflow-hidden">
                {/* Badge */}
                <div className={`absolute top-4 right-4 ${promo.badgeColor} text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold`}>
                  {promo.badge}
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-secondary border border-border flex items-center justify-center mb-6 group-hover:border-primary transition-colors duration-300">
                    <promo.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {promo.description}
                  </p>

                  {/* Pricing */}
                  <div className="flex items-center gap-4 mb-6">
                    {promo.originalPrice && (
                      <span className="text-muted-foreground line-through text-lg">
                        {promo.originalPrice}
                      </span>
                    )}
                    <span className="text-3xl font-bold text-primary font-serif">
                      {promo.promoPrice}
                    </span>
                  </div>

                  {/* CTA */}
                  <Button variant="outline-gold" className="w-full" asChild>
                    <a href="#contacto">Aprovechar Oferta</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
