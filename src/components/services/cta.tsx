"use client";

import { motion } from "framer-motion";

export default function ServiceCTA() {
  return (
    <section className="py-40 bg-white text-black text-center relative overflow-hidden">
       {/* High-end Watermark */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[25vw] font-black uppercase tracking-tighter">ACTION</h2>
       </div>

       <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-12"
          >
             Ready to bring your <br />
             <span className="italic font-serif font-light text-gray-400">ideas to</span> life?
          </motion.h2>
          
          <button className="px-14 py-6 bg-yellow-400 text-black font-black text-xs tracking-[0.3em] uppercase rounded-full hover:bg-black hover:text-white transition-all shadow-2xl">
             START THE PRODUCTION
          </button>
       </div>
    </section>
  );
}