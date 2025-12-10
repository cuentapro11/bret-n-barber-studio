import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AvisoLegal = () => {
  return (
    <>
      <Helmet>
        <title>Aviso Legal | Miguel Bretón Barber Shop</title>
        <meta
          name="description"
          content="Aviso legal de Miguel Bretón Barber Shop. Información sobre propiedad intelectual y uso del sitio web."
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
                  Legal
                </p>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Aviso Legal
                </h1>
                <div className="w-20 h-0.5 bg-primary" />
              </div>

              {/* Content */}
              <div className="prose prose-invert max-w-none">
                <div className="bg-card border border-border rounded-xl p-8 space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Este sitio web pertenece a <span className="text-foreground font-semibold">Miguel Bretón Barber Shop</span>.
                  </p>

                  <p>
                    La información, servicios y precios mostrados están sujetos a cambios sin previo aviso.
                  </p>

                  <p>
                    Todo el contenido del sitio, incluyendo pero no limitado a imágenes, textos, 
                    logotipos, marcas, diseños gráficos y cualquier otro material, está protegido 
                    por las leyes de propiedad intelectual aplicables en la República Dominicana 
                    y tratados internacionales.
                  </p>

                  <p>
                    Queda estrictamente prohibida la reproducción, distribución, modificación, 
                    comunicación pública o cualquier otro uso del contenido de este sitio web 
                    sin la autorización expresa y por escrito de Miguel Bretón Barber Shop.
                  </p>

                  <p>
                    El uso indebido del contenido protegido podrá ser objeto de las acciones 
                    legales pertinentes, incluyendo reclamaciones por daños y perjuicios.
                  </p>

                  <div className="border-t border-border pt-6 mt-8">
                    <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                      Información de Contacto
                    </h2>
                    <ul className="space-y-2">
                      <li>
                        <span className="text-foreground">Razón Social:</span> Miguel Bretón Barber Shop
                      </li>
                      <li>
                        <span className="text-foreground">Dirección:</span> Calle Principal #45, Santo Domingo, República Dominicana
                      </li>
                      <li>
                        <span className="text-foreground">Teléfono:</span> 849-505-8045
                      </li>
                    </ul>
                  </div>
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

export default AvisoLegal;
