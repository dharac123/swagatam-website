"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

export default function CTA() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Magnetic Button Effect
  const handleMouse = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 }); // 0.3 determines the "pull" strength
  };

  const resetMouse = () => setPosition({ x: 0, y: 0 });

  return (
    <section className="relative py-40 bg-[#050505] overflow-hidden">
      
      {/* 1. ANIMATED BACKGROUND (The Spotlight) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* HEADER */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-10 h-[1px] bg-yellow-500" />
            <span className="text-yellow-500 font-bold tracking-[0.5em] uppercase text-[10px]">The Finale</span>
            <div className="w-10 h-[1px] bg-yellow-500" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[10vw] font-black text-white leading-[0.85] tracking-tighter"
          >
            Ready for <br />
            <span className="italic font-serif font-light text-gray-500">the big</span> Stage?
          </motion.h2>
        </div>

        {/* 2. MAGNETIC CTA BUTTON */}
        <div 
          className="flex justify-center items-center py-10"
          onMouseMove={handleMouse}
          onMouseLeave={resetMouse}
        >
          <motion.button
            ref={buttonRef}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="group relative w-48 h-48 md:w-64 md:h-64 bg-yellow-400 rounded-full flex flex-col items-center justify-center transition-shadow hover:shadow-[0_0_60px_-10px_rgba(234,179,8,0.6)]"
          >
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-black font-black text-lg md:text-xl tracking-tight uppercase leading-none">
                Get a <br /> Call Back
              </span>
              <ArrowRight className="mt-4 text-black group-hover:translate-x-3 transition-transform duration-500" size={32} strokeWidth={3} />
            </div>

            {/* Pulsing Outer Ring */}
            <div className="absolute inset-0 border border-yellow-400/30 rounded-full scale-110 group-hover:scale-125 transition-transform duration-700 animate-pulse" />
          </motion.button>
        </div>

        {/* 3. SUBTLE CALLOUT */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-gray-500 font-medium tracking-widest text-xs"
        >
          JOIN 50+ BRANDS GROWING WITH SWAGATAM AMDAVAD
        </motion.p>

      </div>
    </section>
  );
}