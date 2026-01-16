
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-4xl font-bold font-sora mb-4">Featured <span className="gradient-text">Work</span></h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg">
              A curated selection of projects exploring AI integration, distributed systems, and experimental interfaces.
            </p>
          </div>
          <a href="#" className="text-primary font-bold flex items-center hover:underline">
            View All Projects <ExternalLink size={16} className="ml-1" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass rounded-2xl overflow-hidden border border-transparent hover:border-primary/30 transition-all"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  {project.github && (
                    <a href={project.github} className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all">
                      <Github size={20} />
                    </a>
                  )}
                  <a href={project.link} className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-primary/10 text-primary rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors font-sora">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
