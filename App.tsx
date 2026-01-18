import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ChartsSection } from './components/ChartsSection';
import { Pricing } from './components/Pricing';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Badge } from './components/Badge';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ChartsSection />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
      <Badge />
    </div>
  );
};

export default App;