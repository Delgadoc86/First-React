import React from 'react';
import Navbar from './Navbar';  
import HeroSection from './HeroSection';  
import ServicesSection from './ServicesSection';  
import Footer from './Footer';  // Importamos el Footer

const LandingPage = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <Navbar />
      </header>

      {/* Sección Principal */}
      <main>
        <HeroSection />
        <ServicesSection />
      </main>

      {/* Footer */}
      <Footer />  {/* Agregamos el Footer aquí */}
    </div>
  );
};

export default LandingPage;
