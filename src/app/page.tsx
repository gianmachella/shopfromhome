import AboutSection from '@/components/landing/AboutSection';
import Hero from '@/components/landing/Hero';
import MobileHero from '@/components/landing/MobileHero';
import NavBar from '@/components/landing/NavBar';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="hidden md:block">
        <Hero />
      </div>
      <div className="block md:hidden">
        <MobileHero />
      </div>

      <AboutSection />
      </>
  );
}
