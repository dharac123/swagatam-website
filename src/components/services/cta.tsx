"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceCTA() {
  return (
    <section className="py-24 md:py-40 bg-white text-black text-center relative overflow-hidden">
       {/* 1. HIGH-END WATERMARK (Responsive Scaling) */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none w-full">
          <h2 className="text-[30vw] md:text-[25vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap">
            ACTION
          </h2>
       </div>

       <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* 2. RESPONSIVE HEADING */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] md:leading-none mb-10 md:mb-16"
          >
             Ready to bring your <br className="hidden sm:block" />
             <span className="italic font-serif font-light text-gray-400">ideas to</span> life?
          </motion.h2>
          
          {/* 3. RESPONSIVE BUTTON (Full-width on mobile, auto on desktop) */}
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link 
                href="/contact" 
                className="block sm:inline-block px-8 md:px-14 py-5 md:py-6 bg-yellow-400 text-black font-black text-[10px] md:text-xs tracking-[0.3em] uppercase rounded-full hover:bg-black hover:text-white transition-all shadow-xl md:shadow-2xl"
              >
                START THE PRODUCTION
              </Link>
            </motion.div>
          </div>
       </div>
    </section>
  );
}