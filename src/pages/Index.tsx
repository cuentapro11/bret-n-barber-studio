import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PromotionsSection } from "@/components/sections/PromotionsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Miguel Bretón Barber Shop | Barbería Premium en Santo Domingo</title>
        <meta
          name="description"
          content="Miguel Bretón Barber Shop - Barbería premium en Santo Domingo, República Dominicana. Cortes clásicos, diseño de barba, y afeitado premium. Más de 10 años de experiencia."
        />
        <meta
          name="keywords"
          content="barbería, Santo Domingo, corte de cabello, barba, afeitado, República Dominicana"
        />
        <link rel="canonical" href="https://miguelbretonbarbershop.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PromotionsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
