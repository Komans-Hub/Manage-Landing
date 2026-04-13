import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import CtaSection from './components/sections/CtaSection';
import Footer from './components/sections/Footer';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
