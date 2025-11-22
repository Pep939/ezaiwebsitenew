import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhoWeServe from './components/WhoWeServe';
import PropertyManagementDetails from './components/PropertyManagementDetails';
import InsuranceDetails from './components/InsuranceDetails';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Credibility from './components/Credibility';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);


    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <WhoWeServe />
      <PropertyManagementDetails />
      <InsuranceDetails />
      <HowItWorks />
      <Pricing />
      <Credibility />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;