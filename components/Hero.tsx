
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass text-xs font-mono mb-8 border border-primary/20"
        >
          <Terminal size={14} className="text-primary" />
          <span>v2.0.26 Production Ready</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-black font-sora leading-tight mb-6"
        >
          Engineering <span className="gradient-text">Intelligence</span> <br />
          For The Modern Web.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10"
        >
          I am Bharat Singh, a Senior Full-Stack Engineer specializing in building 
          high-performance, AI-integrated digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
          >
            View Projects <ChevronRight size={20} className="ml-2" />
          </a>
          <a 
            href="/resume.pdf" 
            className="w-full sm:w-auto px-8 py-4 glass rounded-xl font-bold flex items-center justify-center hover:bg-white/5 dark:hover:bg-white/10 transition-all"
          >
            Download CV <Download size={20} className="ml-2" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-400 flex items-start justify-center p-1">
            <motion.div 
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-1 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
