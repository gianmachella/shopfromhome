import Benefits from '@/components/landing/Benefits';
import Footer from '@/components/landing/Footer';
import Hero from '@/components/landing/Hero';
import HowItWorks from '@/components/landing/HowItWorks';
import NavBar from '@/components/landing/NavBar';
import Testimonials from '@/components/landing/Testimonials';

export default function HomePage() {
  return (
    <>
        <Hero />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      </>
  );
}
