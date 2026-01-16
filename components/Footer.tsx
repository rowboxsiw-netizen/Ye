
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 border-t border-slate-200 dark:border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold font-sora gradient-text mb-6">Bharat Singh.</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8 leading-relaxed">
              Crafting high-performance digital architectures with a focus on AI integration and scalable cloud solutions for the 2026 tech landscape.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(link => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold font-sora mb-6 uppercase tracking-widest text-xs text-slate-400">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#home" className="hover:text-primary transition-colors">Home Base</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Featured Labs</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Core Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Collaborate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-sora mb-6 uppercase tracking-widest text-xs text-slate-400">Connect</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="https://linkedin.com/in/bharatsingh" className="hover:text-primary transition-colors">LinkedIn Profile</a></li>
              <li><a href="https://github.com/bharatsingh" className="hover:text-primary transition-colors">Open Source</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Developer Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
          <p>© {currentYear} Bharat Singh • Engineered for Excellence</p>
          <p className="flex items-center">
            Designed with <Heart size={14} className="mx-2 text-red-500 animate-pulse" /> in the Cloud
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center z-50 hover:bg-primary/90 hover:scale-110 transition-all"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
