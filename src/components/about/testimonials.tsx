"use client";

import { motion } from "framer-motion";
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll limits specifically for buttons
  const checkScrollLimits = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // Added a 5px buffer for sub-pixel rounding issues
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      checkScrollLimits();
      window.addEventListener("resize", checkScrollLimits);
      return () => window.removeEventListener("resize", checkScrollLimits);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      // Scroll by 80% of the visible width for a smoother feel
      const moveDistance = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
      
      scrollRef.current.scrollBy({
        left: moveDistance,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HEADER WITH NAVIGATION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <div className="w-full md:w-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4 md:mb-6"
            >
              <div className="w-8 md:w-10 h-[1px] bg-yellow-500" />
              <span className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px]">Reviews</span>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              The Audience <br />
              <span className="italic font-serif font-light text-gray-500 text-3xl md:text-6xl">Speaks.</span>
            </h2>
          </div>
          
          <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-6 border-t border-white/5 pt-8 md:border-none md:pt-0">
             <p className="text-gray-500 max-w-[120px] md:max-w-xs font-medium uppercase tracking-[0.2em] text-[8px] md:text-[10px] text-left md:text-right">
                Trusted by 50+ Global Partners
             </p>
             
             {/* ARROW BUTTONS */}
             <div className="flex gap-3 md:gap-4">
                <button 
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  aria-label="Previous review"
                  className="p-3 md:p-4 rounded-full border border-white/10 hover:border-yellow-500/50 hover:text-yellow-500 transition-all active:scale-90 disabled:opacity-10 disabled:cursor-not-allowed"
                >
                  <ArrowLeft size={20} className="md:w-6 md:h-6" />
                </button>
                <button 
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  aria-label="Next review"
                  className="p-3 md:p-4 rounded-full border border-white/10 hover:border-yellow-500/50 hover:text-yellow-500 transition-all active:scale-90 disabled:opacity-10 disabled:cursor-not-allowed"
                >
                  <ArrowRight size={20} className="md:w-6 md:h-6" />
                </button>
             </div>
          </div>
        </div>

        {/* 2. CAROUSEL */}
        <div 
          ref={scrollRef} 
          onScroll={checkScrollLimits}
          className="overflow-x-auto no-scrollbar pt-4 flex gap-4 md:gap-6 snap-x snap-mandatory touch-pan-x"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch' 
          }}
        >
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              className="min-w-[85vw] sm:min-w-[400px] md:min-w-[450px] p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group select-none snap-center"
              whileHover={{ 
                y: -5,
                borderColor: "rgba(250, 204, 21, 0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.04)"
              }}
            >
              <Quote className="absolute -top-4 -right-4 w-24 h-24 md:w-32 md:h-32 text-white/5 group-hover:text-yellow-500/10 transition-colors duration-700" />

              <div className="relative z-10 flex flex-col h-full">
                <p className="text-lg md:text-2xl text-gray-400 group-hover:text-white leading-relaxed mb-12 md:mb-16 italic transition-colors duration-500">
                  "{r.text}"
                </p>
                
                <div className="mt-auto">
                  <div className="h-[1px] w-12 bg-yellow-500/30 group-hover:w-full transition-all duration-700 mb-4 md:mb-6" />
                  <h4 className="text-yellow-400 font-black tracking-[0.2em] text-xs md:text-sm uppercase">
                    {r.name}
                  </h4>
                  <p className="text-gray-600 text-[9px] md:text-[10px] font-bold uppercase mt-1 tracking-widest">
                    {r.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}