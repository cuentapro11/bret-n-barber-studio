import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PoliticaPrivacidad = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | Miguel Bretón Barber Shop</title>
        <meta
          name="description"
          content="Política de privacidad de Miguel Bretón Barber Shop. Información sobre recopilación, uso y protección de datos personales."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Back Link */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </Link>

              {/* Header */}
              <div className="mb-12">
                <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
                  Privacidad
                </p>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Política de Privacidad
                </h1>
                <div className="w-20 h-0.5 bg-primary mb-4" />
                <p className="text-muted-foreground text-sm">
                  Última actualización: 10 de diciembre de 2025
                </p>
              </div>

              {/* Content */}
              <div className="bg-card border border-border rounded-xl p-8 space-y-8 text-muted-foreground leading-relaxed">
                <p>
                  En <span className="text-foreground font-semibold">Miguel Bretón Barber Shop</span> respetamos 
                  y protegemos la privacidad de nuestros clientes y visitantes. Esta Política de Privacidad 
                  describe cómo recopilamos, utilizamos, almacenamos y protegemos la información personal 
                  proporcionada en nuestro sitio web o canales de contacto digital.
                </p>

                {/* Section 1 */}
                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                    Información que Recopilamos
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Nombre completo</li>
                    <li>Número de teléfono</li>
                    <li>Correo electrónico (si aplica)</li>
                    <li>Mensajes y preferencias de servicio</li>
                    <li>Datos técnicos como navegador, dirección IP, tipo de dispositivo, etc.</li>
                  </ul>
                </section>

                {/* Section 2 */}
                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                    Uso de la Información
                  </h2>
                  <p className="mb-4">La información recopilada se utiliza para:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Gestionar citas y solicitudes de servicio</li>
                    <li>Responder consultas y proporcionar atención al cliente</li>
                    <li>Enviar promociones y ofertas especiales (solo con su consentimiento previo)</li>
                    <li>Mejorar la experiencia de navegación en nuestro sitio web</li>
                  </ul>
                </section>

                {/* Section 3 */}
                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</span>
                    Protección de Datos
                  </h2>
                  <p>
                    Aplicamos medidas de seguridad técnicas, administrativas y físicas apropiadas 
                    para proteger su información personal contra acceso no autorizado, pérdida, 
                    alteración o divulgación indebida.
                  </p>
                </section>

                {/* Section 4 */}
                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">4</span>
                    Conservación de Datos
                  </h2>
                  <p>
                    Sus datos personales se conservan únicamente durante el tiempo necesario para 
                    cumplir con los fines establecidos en esta política. Una vez cumplido el propósito, 
                    la información será eliminada de forma segura.
                  </p>
                </section>

                {/* Section 5 */}
                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">5</span>
                    Derechos del Usuario
                  </h2>
                  <p className="mb-4">
                    Usted tiene derecho a solicitar el acceso, rectificación o eliminación de sus datos 
                    personales en cualquier momento. Para ejercer estos derechos, puede contactarnos a través de:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">📱</span>
                      <span>WhatsApp: 849-505-8045</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">📍</span>
                      <span>Dirección: Calle Principal #45, Santo Domingo, República Dominicana</span>
                    </li>
                  </ul>
                </section>

                {/* Section 6 */}
                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">6</span>
                    Cookies
                  </h2>
                  <p>
                    Nuestro sitio web utiliza cookies para recopilar estadísticas de uso y mejorar 
                    su experiencia de navegación. Puede desactivar las cookies en cualquier momento 
                    a través de la configuración de su navegador, aunque esto podría afectar algunas 
                    funcionalidades del sitio.
                  </p>
                </section>

                {/* Section 7 */}
                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">7</span>
                    Enlaces a Terceros
                  </h2>
                  <p>
                    Nuestro sitio web puede contener enlaces a sitios externos. No somos responsables 
                    del contenido, políticas de privacidad o prácticas de dichos sitios de terceros. 
                    Le recomendamos revisar las políticas de privacidad de cualquier sitio que visite.
                  </p>
                </section>

                {/* Section 8 */}
                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">8</span>
                    Actualizaciones de la Política
                  </h2>
                  <p>
                    Esta Política de Privacidad puede ser modificada periódicamente para reflejar 
                    cambios en nuestras prácticas de manejo de datos. La fecha de última actualización 
                    será siempre visible al inicio de este documento. Le recomendamos revisar esta 
                    política regularmente.
                  </p>
                </section>

                {/* Closing */}
                <div className="border-t border-border pt-8 mt-8">
                  <p className="text-foreground font-serif text-lg italic text-center">
                    "Gracias por confiar en nosotros. Tu imagen y tu privacidad están en buenas manos."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PoliticaPrivacidad;
