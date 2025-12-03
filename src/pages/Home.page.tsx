import { About } from '../components/About/About';
import { Banner } from '../components/Banner/Banner';
import { Benefits } from '../components/Benefits/Benefits';
import { Hero } from '../components/Hero/Hero';
import { OurSolutions } from '../components/OurSolutions/OurSolutions';
import { TechnicalFeatures } from '../components/TechnicalFeatures/TechnicalFeatures';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Banner />
      <OurSolutions />
      <TechnicalFeatures />
      <Benefits />
    </>
  );
}
