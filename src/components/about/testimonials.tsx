"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Quote, ArrowRight, ArrowLeft } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const reviews = [
  { name: "Rahul S.", company: "Kashmir Port", text: "Swagatam transformed our social presence. Their content doesn't just look good; it converts." },
  { name: "Priya M.", company: "Trexago Holidays", text: "Working with them feels like having an in-house team. The passion they bring is unmatched." },
  { name: "Ankit J.", company: "Urban Stays", text: "From 0 to 1M+ reach. Their performance marketing strategies are pure genius." },
  { name: "Siddharth K.", company: "Gaurav Travels", text: "The attention to detail in their video production is on another level. They captured our brand's soul." },
  { name: "Meera D.", company: "Alpine Stays", text: "They don't just run ads; they build systems. Our cost per lead dropped by 40% in two months." },
  { name: "Ishaan R.", company: "Heritage Walks", text: "Best creative agency in Ahmedabad. Their local insights combined with global aesthetics is rare." },
  { name: "Kavita L.", company: "Eco Resorts", text: "A team of young, hungry, and brilliant creators. They made our brand trending across platforms." },
  { name: "Arjun V.", company: "Skyline Ventures", text: "High-performance marketing with a heart. Swagatam is the edge every growing brand needs." },
];

export default function TestimonialSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      setWidth(scrollRef.current.scrollWidth - scrollRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-32 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HEADER WITH NAVIGATION HINT */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-yellow-500" />
              <span className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-[10px]">Reviews</span>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
              The Audience <br />
              <span className="italic font-serif font-light text-gray-500 text-4xl md:text-6xl">Speaks.</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-end gap-4">
             <p className="text-gray-500 max-w-xs font-medium uppercase tracking-[0.2em] text-[10px] text-right">
                Trusted by 50+ Global Partners
             </p>
          </div>
        </div>

        {/* 2. DRAGGABLE CAROUSEL */}
        <motion.div 
          ref={scrollRef} 
          className="cursor-grab active:cursor-grabbing overflow-hidden pt-4"
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-6"
          >
            {reviews.map((r, i) => (
              <motion.div 
                key={i}
                className="min-w-[350px] md:min-w-[450px] p-10 md:p-14 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group select-none"
                whileHover={{ 
                  y: -10,
                  borderColor: "rgba(250, 204, 21, 0.3)",
                  backgroundColor: "rgba(255, 255, 255, 0.04)"
                }}
              >
                {/* Visual Flair: Large Quote */}
                <Quote className="absolute -top-4 -right-4 w-32 h-32 text-white/5 group-hover:text-yellow-500/10 transition-colors duration-700" />

                <div className="relative z-10 flex flex-col h-full">
                  <p className="text-xl md:text-2xl text-gray-400 group-hover:text-white leading-relaxed mb-16 italic transition-colors duration-500">
                    "{r.text}"
                  </p>
                  
                  <div className="mt-auto">
                    <div className="h-[1px] w-12 bg-yellow-500/30 group-hover:w-full transition-all duration-700 mb-6" />
                    <h4 className="text-yellow-400 font-black tracking-[0.2em] text-sm uppercase">
                      {r.name}
                    </h4>
                    <p className="text-gray-600 text-[10px] font-bold uppercase mt-1 tracking-widest">
                      {r.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}