"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Clapperboard, TrendingUp, Plus } from "lucide-react";

const pipeline = [
  {
    no: "01",
    title: "Diagnostic Audit",
    desc: "We dissect your current digital footprint to identify performance gaps and untapped market opportunities.",
    icon: Search,
  },
  {
    no: "02",
    title: "Strategy Architecture",
    desc: "Crafting a bespoke production script and performance roadmap tailored to your specific scale goals.",
    icon: PenTool,
  },
  {
    no: "03",
    title: "High-Fidelity Production",
    desc: "The stage is set. We deploy cinematic content and data-backed campaigns with absolute precision.",
    icon: Clapperboard,
  },
  {
    no: "04",
    title: "Optimization & Scale",
    desc: "Success is a loop. We continuously refine the performance to turn growth into a predictable system.",
    icon: TrendingUp,
  },
];

export default function Methodology() {
  return (
    <section className="py-32 bg-white text-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-yellow-500" />
              <span className="text-yellow-600 font-bold text-xs tracking-[0.4em] uppercase">The Production Pipeline</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              How we <span className="italic font-serif font-light text-gray-300">perfect</span> <br /> 
              the performance.
            </h2>
          </div>
          
          <p className="text-gray-400 max-w-[300px] text-lg font-medium leading-tight border-l-2 border-yellow-400 pl-8 py-2">
            A systematic approach to brand dominance, from the heart of Amdavad.
          </p>
        </div>

        {/* THE PIPELINE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-gray-100">
          {pipeline.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-12 border-b md:border-r border-gray-100 hover:bg-[#fafafa] transition-all duration-500 overflow-hidden"
              >
                {/* 1. GHOST NUMBER (Background) */}
                <span className="absolute -top-4 -right-2 text-9xl font-black text-black/[0.02] group-hover:text-yellow-400/10 transition-colors duration-700 select-none">
                  {step.no}
                </span>

                {/* 2. SCAN LINE ANIMATION (Hover Effect) */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-yellow-400 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                <div className="relative z-10">
                  {/* Icon & Step Number */}
                  <div className="flex items-center justify-between mb-12">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-yellow-400 transition-all duration-500">
                      <Icon size={20} className="text-gray-400 group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-xs font-black text-gray-200 group-hover:text-yellow-500 transition-colors tracking-widest">
                      STEP {step.no}
                    </span>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase group-hover:translate-x-2 transition-transform duration-500">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                    {step.desc}
                  </p>

                  {/* Plus Icon (Decorative) */}
                  <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Plus size={16} className="text-yellow-600" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER CALLOUT */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-between items-center text-[10px] font-black tracking-[0.5em] text-gray-300 uppercase"
        >
          <span>Strategic Integrity</span>
          <div className="h-[1px] flex-1 mx-10 bg-gray-100" />
          <span>Creative Excellence</span>
        </motion.div>

      </div>
    </section>
  );
}