
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, RefreshCw, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-sora mb-4"
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Ready to bring your vision to life? Choose your preferred way to start the conversation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Instant Actions */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {/* WhatsApp Premium Button */}
            <motion.a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block glass p-8 rounded-3xl border-green-500/20 hover:border-green-500/40 transition-all relative overflow-hidden group shadow-2xl shadow-green-500/5"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <img src={CONTACT_INFO.whatsappIcon} alt="" className="w-24 h-24 grayscale" />
              </div>
              <div className="relative z-10 flex items-center space-x-6">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center p-3">
                  <img src={CONTACT_INFO.whatsappIcon} alt="WhatsApp" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-sora mb-1">WhatsApp Instant</h3>
                  <p className="text-sm text-slate-500 mb-2">Typically replies in <span className="text-green-500 font-bold">5 mins</span></p>
                  <span className="flex items-center text-green-500 font-bold text-sm">
                    Start Chat <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.a>

            {/* Email Premium Button */}
            <motion.a
              href={`mailto:${CONTACT_INFO.email}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block glass p-8 rounded-3xl border-red-500/20 hover:border-red-500/40 transition-all relative overflow-hidden group shadow-2xl shadow-red-500/5"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <img src={CONTACT_INFO.gmailIcon} alt="" className="w-24 h-24 grayscale" />
              </div>
              <div className="relative z-10 flex items-center space-x-6">
                <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center p-3">
                  <img src={CONTACT_INFO.gmailIcon} alt="Gmail" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-sora mb-1">Official Email</h3>
                  <p className="text-sm text-slate-500 mb-2">{CONTACT_INFO.email}</p>
                  <span className="flex items-center text-red-500 font-bold text-sm">
                    Send Inquiry <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.a>

            <motion.div variants={itemVariants} className="space-y-4 pt-4">
              <div className="flex items-center space-x-4 px-6">
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-primary">
                  <MapPin size={18} />
                </div>
                <p className="text-sm font-medium">{CONTACT_INFO.location}</p>
              </div>
              <div className="flex items-center space-x-4 px-6">
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-primary">
                  <Phone size={18} />
                </div>
                <p className="text-sm font-medium">{CONTACT_INFO.phone}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-[400px] flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                    <Send size={40} className="animate-bounce" />
                  </div>
                  <h3 className="text-3xl font-bold font-sora mb-3">Transmission Received!</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm">
                    Bharat has been notified. Expect a response in your inbox within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Your Identity</label>
                      <input 
                        required
                        type="text" 
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                        placeholder="e.g. Satoshi Nakamoto" 
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Email Portal</label>
                      <input 
                        required
                        type="email" 
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                        placeholder="you@company.com" 
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Briefing</label>
                    <textarea 
                      required
                      rows={5}
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                      placeholder="Tell me about your vision..." 
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium resize-none"
                    />
                  </div>
                  <motion.button 
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full py-5 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center space-x-3 text-lg"
                  >
                    {isSubmitting ? (
                      <RefreshCw className="animate-spin" />
                    ) : (
                      <>
                        <span>Initialize Collaboration</span>
                        <ArrowRight size={20} />
                      </>
                    )}
                  </motion.button>
                  <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest pt-2">
                    Secure 256-bit encrypted transmission
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
