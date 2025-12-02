import { About } from '../components/About/About';
import { Hero } from '../components/Hero/Hero';
import { OurSolutions } from '../components/OurSolutions/OurSolutions';
import { TechnicalFeatures } from '../components/TechnicalFeatures/TechnicalFeatures';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <OurSolutions />
      <TechnicalFeatures />
    </>
  );
}
