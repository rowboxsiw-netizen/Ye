
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import GeminiInsights from './components/GeminiInsights';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="relative overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-primary rounded-full mix-blend-multiply filter blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] bg-accent rounded-full mix-blend-multiply filter blur-[120px] animate-pulse-slow delay-1000"></div>
        <div className="absolute top-[40%] right-[10%] w-[30vw] h-[30vw] bg-secondary rounded-full mix-blend-multiply filter blur-[120px] animate-pulse-slow delay-2000"></div>
      </div>

      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <GeminiInsights />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
