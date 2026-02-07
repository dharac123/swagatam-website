"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  
  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#080808] text-white selection:bg-yellow-400 selection:text-black"
    >
      {/* 1. STYLIZED BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Yellow Radial Glow */}
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full" />
        
        {/* Animated Geometric Shape (Wireframe Style) */}
        <motion.div 
          animate={{ 
            rotate: 360,
            y: [0, -20, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-[-5%] opacity-20 hidden lg:block"
        >
          <svg width="600" height="600" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.2">
            <path d="M50 5 L95 25 L95 75 L50 95 L5 75 L5 25 Z" />
            <path d="M50 5 L50 95 M95 25 L5 75 M95 75 L5 25" />
          </svg>
        </motion.div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-[1px] w-12 bg-yellow-400" />
          <span className="text-yellow-400 font-medium tracking-[0.2em] uppercase text-xs">
            Welcome to Amdavad's Finest
          </span>
        </motion.div>

        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight"
          >
            Designing a <span className="text-yellow-400">Stage</span> <br />
            <span className="font-light italic font-serif">for</span> Your Brand’s Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            We merge local heritage with global digital standards. 
            From the heart of Amdavad, we build marketing strategies that 
            don't just reach people—they move them.
          </motion.p>

          {/* 3. CTA SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-8"
          >
            {/* Main Button */}
            <button className="group relative px-8 py-4 bg-yellow-400 text-black font-bold rounded-full overflow-hidden transition-all hover:pr-12">
              <span className="relative z-10">GET A CALL BACK</span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                →
              </span>
            </button>

            {/* Secondary Button */}
            <button className="group flex items-center gap-3 text-white font-medium hover:text-yellow-400 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 group-hover:border-yellow-400 transition-colors">
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
              WHAT WE DO
            </button>
          </motion.div>
        </div>
      </div>

      {/* 4. SCROLL INDICATOR (Bottom Right) */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-4"
      >
        <span className="[writing-mode:vertical-lr] text-[10px] tracking-[0.3em] text-gray-500 uppercase">
          Scroll to explore
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-yellow-400 to-transparent" />
      </motion.div>

    </section>
  );
}