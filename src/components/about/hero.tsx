"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth parallax rotations and scales
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[100svh] min-h-[600px] flex items-center bg-[#050505] overflow-hidden"
    >
      
      {/* THE LENS (Structural Design) */}
      <motion.div 
        style={{ rotate, scale, opacity }}
        className="absolute 
          /* Position: Centered on mobile, shifted right on desktop */
          -right-[20%] -top-[10%] 
          md:-right-[10%] md:-top-[20%] 
          /* Size: Scaled based on viewport */
          w-[120vw] h-[120vw] 
          md:w-[70vw] md:h-[70vw] 
          border border-white/5 rounded-full flex items-center justify-center pointer-events-none z-0"
      >
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-full h-[0.5px] bg-yellow-500/10" 
            style={{ transform: `rotate(${i * 15}deg)` }} 
          />
        ))}
        <div className="w-[60%] h-[60%] border border-yellow-500/20 rounded-full flex items-center justify-center">
            <div className="w-[40%] h-[40%] border-4 border-yellow-500/5 rounded-full animate-pulse" />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-5xl">
          
          <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-black text-white leading-[0.85] tracking-tighter">
            <motion.span 
              initial={{ opacity: 0, y: 60 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              REDEFINING
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 60 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block text-yellow-400"
            >
              PERSPECTIVE.
            </motion.span>
          </h1>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-8 md:mt-16 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
          >
            {/* Divider line - hidden on very small screens to save space */}
            <div className="hidden sm:block h-[1px] w-12 md:w-20 bg-gray-800" />
            
            <p className="text-gray-400 text-lg sm:text-xl md:text-3xl font-light italic font-serif max-w-2xl leading-relaxed">
              Where ideas transform into <span className="text-white font-medium not-italic">impactful productions</span>
            </p>
          </motion.div>

        </div>
      </div>

      {/* Subtle Bottom Vignette */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-20" />
    </section>
  );
}