import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-stone-900 bg-[#FAFAF9] selection:bg-stone-900 selection:text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <HowItWorks />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;