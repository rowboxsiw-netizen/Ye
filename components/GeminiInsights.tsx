
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, RefreshCw } from 'lucide-react';
import { getTechInsights } from '../services/geminiService';
import { TechInsight } from '../types';

const GeminiInsights: React.FC = () => {
  const [insights, setInsights] = useState<TechInsight[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchInsights = async () => {
    setLoading(true);
    const data = await getTechInsights();
    setInsights(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="glass p-8 md:p-12 rounded-[2.5rem] relative">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-sora">Live Tech Radar</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Powered by Gemini AI Engine</p>
              </div>
            </div>
            <button 
              onClick={fetchInsights}
              disabled={loading}
              className="px-6 py-2 glass rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2 hover:bg-white/10 disabled:opacity-50"
            >
              {loading ? <RefreshCw className="animate-spin" size={14} /> : <RefreshCw size={14} />}
              <span>Sync with 2026 Trends</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {loading ? (
              [1, 2, 3].map(i => (
                <div key={i} className="h-48 glass rounded-2xl animate-pulse" />
              ))
            ) : (
              insights.map((insight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 glass bg-white/5 rounded-2xl border-primary/10 flex flex-col justify-between group"
                >
                  <div>
                    <h3 className="font-bold text-lg mb-3 font-sora">{insight.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                      {insight.snippet}
                    </p>
                  </div>
                  <a 
                    href={insight.sourceUrl} 
                    target="_blank" 
                    className="text-primary text-xs font-bold flex items-center group-hover:translate-x-1 transition-transform"
                  >
                    Deep Dive <ArrowUpRight size={14} className="ml-1" />
                  </a>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiInsights;
