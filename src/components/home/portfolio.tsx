"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "The Himalayan Odyssey",
    category: "Performance Marketing",
    size: "md:col-span-8",
    img: "https://images.unsplash.com/photo-1544735024-35eb5ad3030d?q=80&w=1200",
    stats: "+240% ROI"
  },
  {
    title: "Urban Retreats",
    category: "Web Experience",
    size: "md:col-span-4",
    img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800",
    stats: "Design"
  },
  {
    title: "Desert Safaris Co.",
    category: "Social Growth",
    size: "md:col-span-4",
    img: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=800",
    stats: "1M+ Reach"
  },
  {
    title: "Luxury Cruise Line",
    category: "Full Brand Story",
    size: "md:col-span-8",
    img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1200",
    stats: "Global Launch"
  },
];

export default function Portfolio() {
  return (
    <section className="py-32 bg-[#F2F2F2] text-[#111]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[1px] bg-yellow-500" />
              <span className="text-yellow-600 font-bold text-xs tracking-[0.4em] uppercase">Portfolio</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-black">
              Work that <br /> 
              <span className="italic font-serif font-light text-gray-400">claims the</span> spotlight.
            </h2>
          </div>
          
          <p className="text-gray-500 max-w-[300px] text-lg font-medium leading-tight mb-4 border-l-2 border-yellow-400 pl-6">
            From Ahmedabad to the world, we build digital stages for brands.
          </p>
        </div>

        {/* ASYMMETRICAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-black/5 cursor-pointer ${p.size} min-h-[450px] md:min-h-[550px]`}
            >
              {/* Image */}
              <img 
                src={p.img} 
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Sophisticated Dark Overlay (Bottom Only) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Tag */}
              <div className="absolute top-8 left-8 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase">
                {p.stats}
              </div>

              {/* Details */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-[1px] bg-yellow-400" />
                  <span className="text-yellow-400 text-[10px] font-black uppercase tracking-widest">{p.category}</span>
                </div>
                
                <div className="flex items-end justify-between">
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tight max-w-sm">
                    {p.title}
                  </h3>
                  <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-black translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <button className="group px-12 py-5 bg-black text-white rounded-full font-bold tracking-widest text-xs hover:bg-yellow-400 hover:text-black transition-all flex items-center gap-4">
            VIEW ALL PROJECTS <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}