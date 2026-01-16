
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
              <img 
                src="https://picsum.photos/seed/bharat/600/600" 
                alt="Bharat Singh" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-primary/20">
              <p className="text-3xl font-bold font-sora">8+</p>
              <p className="text-sm text-slate-500 font-medium">Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-sora mb-6">Designing the Future <br /><span className="text-primary">One Line at a Time.</span></h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              Based at the intersection of design and logic, I specialize in crafting digital solutions that aren't just functional, but transformative. My approach combines deep architectural knowledge with an obsession for user experience.
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              In the rapidly evolving landscape of 2026, I stay ahead by integrating AI-driven workflows and edge-computing paradigms into every project, ensuring scalability and future-proof performance.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 glass rounded-xl">
                <p className="text-primary font-bold mb-1">Architecture</p>
                <p className="text-sm opacity-70 text-slate-500 dark:text-slate-400">Scalable Microservices</p>
              </div>
              <div className="p-4 glass rounded-xl">
                <p className="text-primary font-bold mb-1">Front-End</p>
                <p className="text-sm opacity-70 text-slate-500 dark:text-slate-400">Next-gen Frameworks</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
