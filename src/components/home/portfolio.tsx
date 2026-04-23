"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "SHIVA'S CAFE",
    category: "Brand Film & Identity",
    size: "md:col-span-8",
    // Premium boutique cafe aesthetic
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200",
    stats: "40% Footfall"
  },
  {
    title: "WILLIAM JOHN'S",
    category: "Performance Marketing",
    size: "md:col-span-4",
    // High-quality heritage pizza imagery
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800",
    stats: "4.5x ROAS"
  },
  {
    title: "MYKA CAFE",
    category: "Aesthetic Content",
    size: "md:col-span-4",
    // Modern Gen-Z aesthetic interior
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800",
    stats: "200k+ Reach"
  },
  {
    title: "TREXAGO HOLIDAYS",
    category: "Lead Generation",
    size: "md:col-span-8",
    // Stunning wanderlust/travel scenery
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200",
    stats: "35% Lower CPL"
  },
];

export default function Portfolio() {
  return (
    <section className="py-32 bg-[#080808] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[1px] bg-yellow-500" />
              <span className="text-yellow-500 font-bold text-[10px] tracking-[0.5em] uppercase">Selected Works</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white uppercase">
              Work that <br /> 
              <span className="italic font-serif font-light text-zinc-700 lowercase">claims the</span> spotlight.
            </h2>
          </div>
          
          <p className="text-zinc-500 max-w-[280px] text-lg font-medium leading-tight mb-4 border-l-2 border-yellow-500 pl-6">
            Focused strategies for local legends and global explorers.
          </p>
        </div>

        {/* ASYMMETRICAL GRID (4 CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group relative rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer ${p.size} min-h-[450px] md:min-h-[550px]`}
            >
              {/* Image */}
              <img 
                src={p.img} 
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />

              {/* Agency Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Impact Tag (Stats) */}
              <div className="absolute top-8 left-8 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-yellow-500 text-[10px] font-black tracking-widest uppercase">
                {p.stats}
              </div>

              {/* Details */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-[1px] bg-yellow-500" />
                  <span className="text-yellow-500 text-[10px] font-black uppercase tracking-widest">{p.category}</span>
                </div>
                
                <div className="flex items-end justify-between">
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase max-w-sm group-hover:text-yellow-400 transition-colors">
                    {p.title}
                  </h3>
                  
                  {/* Floating Action Button */}
                  <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-black translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_40px_rgba(234,179,8,0.3)]">
                    <ArrowUpRight size={28} strokeWidth={3} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-32 flex flex-col items-center gap-10">
          <Link href="/portfolio" className="group px-16 py-6 bg-yellow-500 text-black rounded-full font-black tracking-[0.3em] text-[10px] uppercase hover:bg-white transition-all flex items-center gap-4 shadow-2xl">
            View portfolio <ArrowUpRight size={16} strokeWidth={3} />
          </Link>
        </div>
      </div>
    </section>
  );
}