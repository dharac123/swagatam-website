"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function PortfolioHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
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
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#050505] overflow-hidden px-6 pt-20">
      {/* Interactive Spotlight */}
      <motion.div 
        style={{ left: spotlightX, top: spotlightY, transform: "translate(-50%, -50%)" }}
        className="absolute w-[600px] h-[600px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none z-0"
      />

      <div className="relative z-10 text-center max-w-5xl">
        <h1 className="text-5xl md:text-[9vw] font-black text-white leading-[0.85] tracking-tighter uppercase">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="block">
            Showcasing
          </motion.span>
          <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
            className="block text-gray-500 italic font-serif font-light text-5xl md:text-[7vw] lowercase py-4"
          >
            the digital
          </motion.span>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="block text-yellow-400">
            Impact
          </motion.span>
        </h1>
      </div>
    </section>
  );
}