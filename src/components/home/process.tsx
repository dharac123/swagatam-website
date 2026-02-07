"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const steps = [
  { step: "01", title: "Discovery & Audit", desc: "We pull back the curtain to reveal hidden gaps in your current brand performance." },
  { step: "02", title: "Strategic Roadmap", desc: "Drafting the script for your success with data-backed blueprints." },
  { step: "03", title: "Creative Execution", desc: "Turning the lights on with high-performance digital experiences." },
  { step: "04", title: "Scale & Dominate", desc: "Expanding the audience and ensuring your brand stays center stage." },
];

export default function Process() {
  return (
    <section className="py-32 bg-[#0d0d0d] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER: High-End Agency Style */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-yellow-500" />
            <span className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-xs">Our Methodology</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85]">
            Setting <span className="italic font-serif font-light text-gray-500">the</span> <br />
            Production Stage.
          </h2>
        </div>

        {/* PROCESS LIST: Large Scale Reveal */}
        <div className="flex flex-col">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative border-b border-white/10 py-10 md:py-16 cursor-pointer"
            >
              {/* The Hover Reveal Background */}
              <div className="absolute inset-0 bg-yellow-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                
                <div className="flex items-center gap-8 md:gap-16">
                  {/* Big Number */}
                  <span className="text-2xl md:text-3xl font-black text-yellow-500 group-hover:text-black transition-colors">
                    {s.step}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-4xl md:text-7xl font-bold tracking-tighter group-hover:text-black transition-colors">
                    {s.title}
                  </h3>
                </div>

                {/* Description - Appears on hover or stays subtle */}
                <div className="max-w-xs md:opacity-0 group-hover:opacity-100 transition-all duration-500 md:translate-x-10 group-hover:translate-x-0">
                  <p className="text-gray-400 group-hover:text-black font-medium leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="hidden md:block group-hover:rotate-45 transition-transform">
                    <ChevronRight size={48} className="text-white/20 group-hover:text-black" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}