"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "522 THE RESTAURANT",
    serif: "the taste of",
    tagline: "Premium Culinary Storytelling",
    objective: "Crafting a high-end visual narrative to position the restaurant as a premier fine-dining destination.",
    services: "Cinematic Production, Brand Identity, Social Media Growth",
    result: "Achieved over 500k+ organic views on launch content with a 30% increase in weekend reservations.",
    image: "/522.png" 
  },
  {
    id: "02",
    title: "LIJJAT KHAMAN",
    serif: "the legacy of",
    tagline: "Heritage Brand Modernization",
    objective: "Rejuvenating a traditional Farsan legacy for the digital-first younger generation without losing its roots.",
    services: "Visual Rebranding, Content Strategy, Packaging Design",
    result: "Grew Instagram community by 40% and successfully launched their modern 'Snack-Box' campaign.",
    image: "/lijjat.png" 
  },
  {
    id: "03",
    title: "HOLIDAYS CROWD",
    serif: "the escape of",
    tagline: "B2C Travel Lead Generation",
    objective: "Generating high-intent inquiries for customized domestic and international holiday packages.",
    services: "Performance Marketing, Meta Ads, Landing Page Optimization",
    result: "Generated 2000+ qualified leads in one quarter with a 35% reduction in Cost Per Lead (CPL).",
    image: "/holidays-crowd.png" 
  },
  {
    id: "04",
    title: "ASIAN HOLIDAYS",
    serif: "the horizon of",
    tagline: "Luxury Global Tourism Positioning",
    objective: "Scaling the digital footprint for international luxury tours and corporate travel solutions.",
    services: "Google Ads (PPC), SEO Strategy, Corporate Branding",
    result: "Ranked on Page 1 for high-volume travel keywords, leading to a 2x increase in organic web traffic.",
    image: "/asian-holidays.png" 
  },
  {
    id: "05",
    title: "WILLIAM JOHN'S",
    serif: "the crust of",
    tagline: "Pizza Chain Performance Scaling",
    objective: "Driving consistent footfall and online orders across multiple franchise outlets in the city.",
    services: "Hyper-local Meta Ads, Motion Graphics, Influencer Tie-ups",
    result: "Delivered a consistent 4.5x ROAS on digital spend across 10+ operational locations.",
    image: "/william.png" 
  },
  {
    id: "06",
    title: "HOUSE OF 147",
    serif: "the essence of",
    tagline: "Aesthetic Lifestyle Branding",
    objective: "Creating a 'must-visit' buzz through high-aesthetic content that highlights the unique interior and vibe.",
    services: "UGC Campaigns, Professional Photography, Grid Design",
    result: "Established as one of the most 'Instagrammable' spots in the city with viral creator collaborations.",
    image: "/house147.png" 
  },
  {
    id: "07",
    title: "AMASA",
    serif: "the ritual of",
    tagline: "Boutique Cafe Production",
    objective: "Defining a unique brand voice that emphasizes fresh ingredients and a soulful dining experience.",
    services: "Video Production, Social Media Management, PR Strategy",
    result: "Increased repeat customer frequency by 25% through consistent community-driven storytelling.",
    image: "/amasa.png" 
  },
  {
    id: "08",
    title: "GRANVILLE GREENS",
    serif: "the nature of",
    tagline: "Eco-Conscious Brand Identity",
    objective: "Highlighting the garden-to-table philosophy and the serene, nature-first atmosphere of the brand.",
    services: "Content Marketing, Visual Storytelling, Brand Positioning",
    result: "Built a loyal niche audience resulting in 100% occupancy during special eco-event weekends.",
    image: "/granville.png" 
  }
];

export default function ProjectShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative min-h-screen bg-[#F0F0F0] py-24 md:py-32 overflow-hidden selection:bg-yellow-200">
      
      {/* CSS Utility to hide scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* 1. ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:60px_60px]" />
        
        {/* Dynamic Watermark Number */}
        <AnimatePresence mode="wait">
          <motion.h2 
            key={active}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.08, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="absolute top-1/2 left-10 -translate-y-1/2 text-[35vw] font-black text-black leading-none"
          >
            {projects[active].id}
          </motion.h2>
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* 2. LEFT: CONTENT SPREAD */}
          <div className="w-full lg:w-[72%]">
            <header className="mb-12 md:mb-16">
               <div className="flex items-center gap-4 mb-4">
                  <span className="text-yellow-700 font-bold tracking-[0.4em] uppercase text-[10px]">Production Archive</span>
                  <div className="h-[1px] w-20 bg-yellow-500" />
               </div>
               
               <AnimatePresence mode="wait">
                 <motion.div
                   key={active}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   transition={{ duration: 0.5 }}
                 >
                    <h2 className="text-6xl md:text-9xl font-black text-black tracking-tighter leading-[0.8] uppercase">
                       <span className="block text-zinc-500 italic font-serif font-light text-3xl md:text-5xl lowercase mb-2">
                         {projects[active].serif}
                       </span>
                       {projects[active].title}
                    </h2>
                    <p className="mt-8 text-zinc-600 font-bold tracking-widest text-[11px] uppercase">
                       {projects[active].tagline}
                    </p>
                 </motion.div>
               </AnimatePresence>
            </header>

            {/* IMPACT GRID */}
            <div className="grid md:grid-cols-3 gap-10 border-t border-black/20 pt-12 mb-16">
               <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-yellow-700 uppercase tracking-widest">The Objective</h4>
                  <p className="text-sm text-zinc-800 font-medium leading-relaxed">{projects[active].objective}</p>
               </div>
               <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-yellow-700 uppercase tracking-widest">Execution</h4>
                  <p className="text-sm text-zinc-800 font-medium leading-relaxed">{projects[active].services}</p>
               </div>
               <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-yellow-700 uppercase tracking-widest">The Result</h4>
                  <p className="text-sm text-black font-bold leading-relaxed">{projects[active].result}</p>
               </div>
            </div>
          </div>

          {/* 3. RIGHT: THE STICKY INDEX */}
          <div className="w-full lg:w-[28%] lg:sticky lg:top-32 h-fit pb-10">
            <div className="border-l border-black/20 pl-8 space-y-4 max-h-[70vh] overflow-y-auto no-scrollbar py-2">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActive(index)}
                  className="group flex flex-col items-start text-left block w-full outline-none py-2"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-[9px] font-bold transition-all duration-300 ${active === index ? 'text-yellow-600 scale-125' : 'text-zinc-500'}`}>
                      {project.id}
                    </span>
                    <motion.div 
                      animate={{ width: active === index ? 30 : 0 }}
                      className="h-[1.5px] bg-yellow-500"
                    />
                  </div>
                  <span className={`text-lg font-black uppercase tracking-tighter transition-all duration-300 ${active === index ? 'text-black' : 'text-zinc-400 group-hover:text-zinc-700'}`}>
                    {project.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}