"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Play, Target, TrendingUp } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "The Blueprint",
    serif: "strategizing the",
    desc: "We dive deep into the city's pulse to engineer a data-driven strategy that aligns with your brand's DNA.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    id: "02",
    title: "Cinematic Execution",
    serif: "capturing the",
    desc: "Our elite 15-member crew takes the stage, turning concepts into high-production visual assets.",
    icon: <Play className="w-6 h-6" />,
  },
  {
    id: "03",
    title: "Performance Engine",
    serif: "amplifying the",
    desc: "We don't just post; we dominate social ecosystems using precise performance media engines.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: "04",
    title: "Global Impact",
    serif: "scaling the",
    desc: "We analyze every frame and click to ensure your brand doesn't just exist—it leads the conversation.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

export default function WorkflowSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // This creates the horizontal scroll effect based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section className="relative bg-white border-t border-gray-100">
      {/* 1. STICKY HEADER AREA */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="text-yellow-600 font-bold tracking-[0.5em] text-[10px] uppercase block">
              Our Craft
            </span>
            <h2 className="text-6xl md:text-8xl font-black text-black leading-[0.8] tracking-tighter uppercase">
              THE <br /> 
              <span className="italic font-serif font-light text-gray-300 lowercase">Production</span> <br /> 
              PROTOCOL
            </h2>
          </div>
          <p className="text-gray-400 font-medium max-w-xs text-sm leading-relaxed mb-4">
            From the heart of Amdavad to the global stage, this is how we engineer performance.
          </p>
        </div>
      </div>

      {/* 2. HORIZONTAL SCROLL TRACK */}
      <div ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-10 px-6 md:px-24">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="group relative min-w-[350px] md:min-w-[550px] aspect-[4/5] md:aspect-video bg-[#F9F9F9] rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-between border border-gray-100 hover:border-yellow-400 transition-colors duration-500"
              >
                {/* Top: Icon and ID */}
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-yellow-500 border border-gray-50 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-500">
                    {step.icon}
                  </div>
                  <span className="text-6xl font-black text-gray-100 group-hover:text-yellow-400/20 transition-colors duration-500">
                    {step.id}
                  </span>
                </div>

                {/* Bottom: Text Content */}
                <div>
                  <h3 className="text-4xl md:text-6xl font-black text-black leading-none tracking-tighter uppercase mb-6">
                    <span className="block text-gray-400 italic font-serif font-light text-2xl md:text-3xl lowercase mb-2">
                      {step.serif}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="absolute bottom-0 left-10 right-10 h-1 bg-gray-100 group-hover:bg-yellow-400 transition-colors" />
              </div>
            ))}

            {/* Final "Contact Us" Teaser Card */}
            <div className="min-w-[350px] md:min-w-[550px] aspect-[4/5] md:aspect-video bg-black rounded-[2.5rem] p-16 flex flex-col items-center justify-center text-center">
                <h4 className="text-white text-4xl font-black uppercase tracking-tighter mb-8">
                  READY TO <br /> <span className="text-yellow-400 italic font-serif lowercase">perform?</span>
                </h4>
                <button className="bg-yellow-400 text-black px-10 py-4 font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-all">
                   Let's Talk
                </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. SUBTLE WATERMARK FOOTER OF SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-100 flex justify-between items-center opacity-30">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">Efficiency in Motion</span>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">Swagatam Amdavad © 2024</span>
      </div>
    </section>
  );
}