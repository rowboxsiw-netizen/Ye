
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Cpu, Cloud, Layers } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, any> = {
  Layout,
  Cpu,
  Cloud,
  Layers
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-sora mb-4">Premium <span className="gradient-text">Solutions</span></h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            High-value engineering services tailored for high-growth startups and tech giants.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 glass rounded-2xl hover:bg-white/5 dark:hover:bg-white/5 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                  {Icon && <Icon className="text-primary" size={28} />}
                </div>
                <h3 className="text-xl font-bold mb-4 font-sora">{service.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
