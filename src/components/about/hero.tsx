"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center bg-[#050505] overflow-hidden">
      
      {/* THE LENS (Structural Design) */}
      <motion.div 
        style={{ rotate, scale }}
        className="absolute -right-20 -top-20 w-[100vw] h-[100vw] md:w-[70vw] md:h-[70vw] border border-white/5 rounded-full flex items-center justify-center pointer-events-none"
      >
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute w-full h-[0.5px] bg-yellow-500/10" style={{ transform: `rotate(${i * 15}deg)` }} />
        ))}
        <div className="w-[60%] h-[60%] border border-yellow-500/20 rounded-full flex items-center justify-center">
            <div className="w-[40%] h-[40%] border-4 border-yellow-500/5 rounded-full animate-pulse" />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-yellow-500 font-bold tracking-[0.5em] uppercase text-[10px] mb-8"
          >
            The Swagatam Standard
          </motion.p>

          <h1 className="text-6xl md:text-[11vw] font-black text-white leading-[0.8] tracking-tighter">
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="block">REDEFINING</motion.span>
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="block text-yellow-400">PERSPECTIVE.</motion.span>
          </h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex items-center gap-6"
          >
            <div className="h-[1px] w-20 bg-gray-800" />
            <p className="text-gray-500 text-xl md:text-3xl font-light italic font-serif">
              Amdavad's premier <span className="text-white">production powerhouse.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}