"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function AboutStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="relative py-20 md:py-40 bg-[#F7F7F7] text-[#0a0a0a] overflow-hidden">
      
      {/* 1. BACKGROUND: SUBTLE BLUEPRINT & MESH */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:30px_30px] md:[background-size:40px_40px]" />
        
        {/* Responsive Blobs: Smaller on mobile to prevent overflow issues */}
        <div className="absolute top-1/4 -left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-yellow-400/10 blur-[80px] md:blur-[130px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-white blur-[60px] md:blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* LEFT: THE TIMELINE LINE (Hidden on mobile, visible on LG) */}
          <div className="hidden lg:flex col-span-1 justify-center">
            <div className="relative w-[1px] h-full bg-black/5">
              <motion.div 
                style={{ scaleY }}
                className="absolute top-0 left-0 w-full h-full bg-yellow-500 origin-top shadow-[0_0_15px_rgba(234,179,8,0.3)]"
              />
            </div>
          </div>

          {/* RIGHT: THE CONTENT */}
          <div className="col-span-12 lg:col-span-11 space-y-24 md:space-y-48">
            
            {/* Act 01 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="text-yellow-600 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px] block">01 / Origins</span>
                <div className="h-[1px] w-8 md:w-12 bg-yellow-400/30" />
              </div>
              <h2 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] md:leading-[0.85] mb-6 md:mb-10 text-black">
                STREET <br /> 
                <span className="text-gray-300">BY STREET.</span>
              </h2>
              <p className="text-gray-500 text-lg md:text-3xl font-light leading-relaxed font-serif italic max-w-2xl">
                Founded in 2023, Swagatam Amdavad emerged from a shared love for the city. We explored Ahmedabad's pulse—shooting and editing, <span className="text-black font-semibold">driven purely by passion.</span>
              </p>
            </motion.div>

            {/* Act 02 - Responsive Alignment */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl lg:ml-auto text-left lg:text-right"
            >
              <div className="flex items-center lg:justify-end gap-3 mb-4 md:mb-6">
                <div className="hidden lg:block h-[1px] w-12 bg-yellow-400/30" />
                <span className="text-yellow-600 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px] block">02 / The Shift</span>
                <div className="lg:hidden h-[1px] w-8 bg-yellow-400/30" />
              </div>
              <h2 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] md:leading-[0.85] mb-6 md:mb-10 text-black">
                THE <span className="text-gray-200">SCALE.</span>
              </h2>
              <p className="text-gray-500 text-lg md:text-3xl font-light leading-relaxed max-w-2xl lg:ml-auto">
                That spark grew into a <span className="text-black font-bold">15-member elite crew</span>. What began as a city page evolved into a full-fledged production and performance powerhouse.
              </p>
            </motion.div>

            {/* Act 03 - Pure White "Floating" Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-20 items-end">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-2 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-white border border-black/5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] group hover:border-yellow-400/50 transition-all duration-700"
              >
                <div className="flex justify-between items-start mb-4">
                   <h4 className="text-5xl md:text-7xl font-black text-black group-hover:text-yellow-600 transition-colors">1.6L+</h4>
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-400/10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-500 animate-pulse" />
                   </div>
                </div>
                <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] text-gray-400 uppercase">Combined Digital Influence</p>
              </motion.div>
              
              <div className="lg:col-span-3 pb-0 md:pb-6">
                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                  We understand what clicks, converts, and connects. We don’t just showcase the city—we help brands <span className="text-black italic font-serif">perform</span> on the global stage.
                </p>
                <div className="h-[1px] w-full bg-black/5" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}