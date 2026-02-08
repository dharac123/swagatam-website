"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ServiceHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement for the spotlight
  const spotlightX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const spotlightY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden px-6">
      
      {/* 1. THE INTERACTIVE SPOTLIGHT */}
      <motion.div 
        style={{ 
          left: spotlightX, 
          top: spotlightY,
          transform: "translate(-50%, -50%)"
        }}
        className="absolute w-[600px] h-[600px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none z-0"
      />

      {/* 2. ANIMATED BACKGROUND GRID */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Moving "Blueprint" Line */}
        <motion.div 
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"
        />
      </div>

      {/* 3. CENTER CONTENT */}
      <div className="relative z-10 text-center max-w-5xl">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-500 text-[10px] font-bold tracking-[0.5em] uppercase">
            Our Production Capabilities
          </span>
        </motion.div> */}

        <h1 className="text-6xl md:text-[10vw] font-black text-white leading-[0.85] tracking-tighter">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block"
          >
            WE CRAFT
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="block text-gray-500 italic font-serif font-light text-5xl md:text-[8vw]"
          >
            the perfect
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block text-yellow-400"
          >
            PERFORMANCE
          </motion.span>
        </h1>

        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
        >
          From the heart of Amdavad, we engineer digital experiences that 
          don't just exist—they command the stage and drive growth.
        </motion.p> */}

        {/* 4. ANIMATED DECORATION: The "Stage" Shape */}
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-20 opacity-10 hidden lg:block"
        >
          <svg width="500" height="500" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.2">
             <circle cx="50" cy="50" r="45" />
             <path d="M50 5 L95 25 L95 75 L50 95 L5 75 L5 25 Z" />
             <path d="M50 5 L50 95 M95 25 L5 75 M95 75 L5 25" />
          </svg>
        </motion.div>
      </div>

      {/* 5. SCROLL INDICATOR */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] font-bold tracking-[0.4em] text-gray-600 uppercase">Explore SERVICES</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-yellow-500 to-transparent" />
      </motion.div>

    </section>
  );
}