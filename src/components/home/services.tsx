"use client";

import { motion } from "framer-motion";
import { BarChart3, Sparkles, Users, Layout, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Performance Marketing",
    desc: "ROI-focused ads across Google, Meta & more.",
    icon: BarChart3,
    size: "md:col-span-2", // Larger card
    color: "from-yellow-500/20",
  },
  {
    title: "Brand Strategy",
    desc: "Clear positioning & storytelling.",
    icon: Sparkles,
    size: "md:col-span-1",
    color: "from-white/10",
  },
  {
    title: "Social Growth",
    desc: "Engagement-driven content systems.",
    icon: Users,
    size: "md:col-span-1",
    color: "from-white/10",
  },
  {
    title: "Websites & Funnels",
    desc: "High-converting digital experiences built to scale and convert visitors into loyal customers.",
    icon: Layout,
    size: "md:col-span-2", // Larger card
    color: "from-yellow-500/20",
  },
];

export default function Services() {
  return (
    <section className="relative py-32 bg-[#141414] overflow-hidden">
      
      {/* 1. BACKGROUND AMBIANCE (Breaks the black scroll) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-yellow-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />
      </div>

      {/* 2. SUBTLE WATERMARK (Heritage Element) */}
      <div className="absolute bottom-0 right-0 opacity-[0.03] select-none pointer-events-none translate-y-1/4">
         <h1 className="text-[20vw] font-bold whitespace-nowrap">AMDAVAD</h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-[1px] bg-yellow-400"></span>
              <p className="text-yellow-400 text-xs tracking-[0.3em] font-bold uppercase">Expertise</p>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight"
            >
              Services that <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">drive growth</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 max-w-sm text-sm md:text-base leading-relaxed"
          >
            We don't just provide services; we build the digital infrastructure your brand needs to dominate the market.
          </motion.p>
        </div>

        {/* 3. BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative p-8 rounded-[2rem] bg-gradient-to-br ${s.color} to-transparent border border-white/5 hover:border-yellow-400/50 transition-all duration-500 overflow-hidden ${s.size}`}
              >
                {/* Decorative Icon Background */}
                <div className="absolute -right-4 -top-4 text-white/[0.03] group-hover:text-yellow-400/[0.05] transition-colors">
                    <Icon size={140} />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="text-yellow-400" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                        {s.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[250px]">
                        {s.desc}
                    </p>
                  </div>

                  <div className="mt-12 flex items-center gap-2 text-xs font-bold tracking-widest text-white/40 group-hover:text-yellow-400 transition-colors">
                    LEARN MORE <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}