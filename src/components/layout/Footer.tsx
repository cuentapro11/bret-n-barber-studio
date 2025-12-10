import { Scissors, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Scissors className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Miguel Bretón
                </h3>
                <span className="text-xs text-primary tracking-[0.2em] uppercase">
                  Barber Shop
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Estilo que marca la diferencia. Más de 10 años creando looks
              impecables para el caballero moderno.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/18495058045"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+18495058045"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">849-505-8045</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-sm">
                  Calle Principal #45,
                  <br />
                  Santo Domingo, RD
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              Horario
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" />
                <span>Lunes - Sábado</span>
              </div>
              <p className="pl-7">9:00 AM – 9:00 PM</p>
              <div className="flex items-center gap-3 pt-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Domingo</span>
              </div>
              <p className="pl-7">10:00 AM – 6:00 PM</p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              Legal
            </h4>
            <div className="space-y-2">
              <Link
                to="/aviso-legal"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Aviso Legal
              </Link>
              <Link
                to="/politica-privacidad"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Miguel Bretón Barber Shop. Todos los
            derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Santo Domingo, República Dominicana
          </p>
        </div>
      </div>
    </footer>
  );
}
