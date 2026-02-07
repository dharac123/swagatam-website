"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Brands Scaled", sub: "From local startups to global names" },
  { value: 3, suffix: "x", label: "Avg. ROI", sub: "Measurable growth in every campaign" },
  { value: 5, suffix: "+", label: "Years Active", sub: "Deep roots in the Amdavad market" },
  { value: 100, suffix: "%", label: "Success Rate", sub: "Committed to every brand story" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const springValue = useSpring(count, { damping: 40, stiffness: 60 });
  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) count.set(value);
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="text-7xl md:text-[120px] font-black tracking-tighter leading-none text-[#111]">
      <motion.span>{displayValue}</motion.span>
      <span className="text-yellow-400">{suffix}</span>
    </span>
  );
}

export default function WhyUs() {
  return (
    <section className="relative py-32 bg-[#F9F9F9] overflow-hidden border-t border-black/5">
      
      {/* Background "Stage" Element - subtle light reveal */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-200/20 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* EDITORIAL HEADER */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-yellow-600 font-bold tracking-[0.4em] uppercase text-xs mb-6"
          >
            The Evidence
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold text-[#111] leading-none tracking-tighter max-w-4xl"
          >
            We don’t just <span className="italic font-serif font-light text-gray-400">promise</span> growth. We build it.
          </motion.h2>
        </div>

        {/* NUMERIC LANDSCAPE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group flex flex-col items-start"
            >
              {/* Vertical line indicator */}
              <div className="w-[1px] h-12 bg-yellow-400 mb-8 origin-top group-hover:scale-y-150 transition-transform duration-500" />
              
              <div className="flex items-baseline gap-2">
                 <Counter value={s.value} suffix={s.suffix} />
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-[#111] uppercase tracking-tight mb-2">
                  {s.label}
                </h3>
                <p className="text-gray-500 text-lg max-w-xs font-medium leading-tight">
                  {s.sub}
                </p>
              </div>

              {/* Decorative horizontal line that expands on hover */}
              <div className="mt-8 h-[1px] w-full bg-black/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-yellow-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}