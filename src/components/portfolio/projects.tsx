"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "SHIVA'S CAFE",
    serif: "the aroma of",
    tagline: "Digital Rebranding & Footfall Strategy",
    objective: "Recreate a business image to attract premium customers looking for a sensory experience.",
    services: "Social Media Optimization, Brand Film, Visual Identity",
    result: "Deployed high-production visuals leading to a 40% increase in weekend footfall.",
    image: "/shivas.png" 
  },
  {
    id: "02",
    title: "WILLIAM JOHN'S",
    serif: "the slice of",
    tagline: "FMCG / Pizza Chain Performance Media",
    objective: "Scaling a heritage pizza brand's digital presence to compete with global franchises.",
    services: "Performance Marketing, Meta Ads, Motion Graphics",
    result: "Achieved a 4.5x ROAS on digital campaigns across 5 city outlets.",
    image: "/pizza.png" 
  },
  {
    id: "03",
    title: "MYKA CAFE",
    serif: "the heart of",
    tagline: "Aesthetic Content & Community Building",
    objective: "Positioning Myka as the 'go-to' aesthetic spot for Gen-Z and creators.",
    services: "Influencer Management, UGC Content, Instagram Grid Design",
    result: "Grew organic reach by 200k+ in 3 months through viral storytelling.",
    image: "/myka.png" 
  },
  {
    id: "04",
    title: "TREXAGO HOLIDAYS",
    serif: "the journey of",
    tagline: "Tourism & Travel Lead Generation",
    objective: "Generating high-intent leads for premium holiday packages and custom tours.",
    services: "Google Ads (PPC), Landing Page Optimization, SEO",
    result: "Reduced cost-per-lead by 35% while increasing lead quality significantly.",
    image: "/trexago.png" 
  },
  {
    id: "05",
    title: "SAFARI SUTRA",
    serif: "the wild of",
    tagline: "Eco-Tourism Visual Storytelling",
    objective: "Capturing the raw essence of wildlife travel to drive direct website bookings.",
    services: "Production & Visuals, Video Editing, Content Strategy",
    result: "Video content reached 1M+ views across travel-specific social ecosystems.",
    image: "/safari.png" 
  },
  {
    id: "06",
    title: "MAD OVER GRILLS",
    serif: "the fire of",
    tagline: "Restaurant Launch & Viral Marketing",
    objective: "Creating a 'hype-driven' launch for a new grill-based restaurant concept.",
    services: "Public Relations, Event Coverage, Meta Ads",
    result: "Fully booked for the first 30 days post-launch via digital reservations.",
    image: "/grills.png" 
  },
  {
    id: "07",
    title: "KOH KINGDOM",
    serif: "the realm of",
    tagline: "Luxury Travel Infrastructure",
    objective: "Rebuilding the digital identity of a premium hospitality group.",
    services: "Website Development, Brand Identity, Personal Branding",
    result: "Modernized digital footprint resulting in higher direct B2B inquiries.",
    image: "/koh.png" 
  },
  {
    id: "08",
    title: "GRANVILLE GREENS",
    serif: "the freshness of",
    tagline: "Nature-First Cafe Branding",
    objective: "Highlighting the organic and green philosophy of the Granville brand.",
    services: "Content Marketing, Photography, Social Media Management",
    result: "Established a consistent brand voice that increased repeat customer loyalty.",
    image: "/greens.png" 
  },
  {
    id: "09",
    title: "522 CAFE",
    serif: "the story of",
    tagline: "Boutique Cafe Production",
    objective: "Developing a high-production value video series for an artisanal cafe.",
    services: "Video Shoots, Ad Creations, Podcast Production",
    result: "Assets utilized for national ad campaigns driving brand awareness.",
    image: "/522.png" 
  },
  {
    id: "10",
    title: "CHAKU KI CHAI",
    serif: "the sip of",
    tagline: "Traditional Brand Modernization",
    objective: "Bringing a traditional 'Chai' brand into the modern digital landscape.",
    services: "Social Media Optimization, Graphic Designing, PR",
    result: "Successfully bridged the gap between traditional roots and modern audiences.",
    image: "/chai.png" 
  }
];

export default function ProjectShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative min-h-screen bg-[#F7F7F7] py-24 md:py-32 overflow-hidden selection:bg-yellow-200">
      
      {/* 1. ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:60px_60px]" />
        
        {/* Dynamic Watermark Number */}
        <AnimatePresence mode="wait">
          <motion.h2 
            key={active}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.05, x: 0 }}
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
                  <span className="text-yellow-600 font-bold tracking-[0.4em] uppercase text-[10px]">Production Archive</span>
                  <div className="h-[1px] w-20 bg-yellow-400" />
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
                       <span className="block text-gray-300 italic font-serif font-light text-3xl md:text-5xl lowercase mb-2">
                         {projects[active].serif}
                       </span>
                       {projects[active].title}
                    </h2>
                    <p className="mt-8 text-gray-400 font-medium tracking-widest text-[11px] uppercase">
                       {projects[active].tagline}
                    </p>
                 </motion.div>
               </AnimatePresence>
            </header>

            {/* IMPACT GRID */}
            <div className="grid md:grid-cols-3 gap-10 border-t border-black/5 pt-12 mb-16">
               <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest">The Objective</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{projects[active].objective}</p>
               </div>
               <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest">Execution</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{projects[active].services}</p>
               </div>
               <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest">The Result</h4>
                  <p className="text-sm text-black font-semibold leading-relaxed">{projects[active].result}</p>
               </div>
            </div>

            {/* VISUAL STAGE */}
            {/* <div className="relative group cursor-pointer overflow-hidden rounded-[2rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  className="relative aspect-[16/9] bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden border border-black/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 to-transparent z-10 pointer-events-none" />
                  <div className="w-full h-full bg-zinc-50 flex items-center justify-center">
                     <span className="text-zinc-200 font-black text-6xl uppercase italic tracking-widest">Visual Asset {projects[active].id}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 z-20">
                 <ArrowUpRight className="text-black w-8 h-8" />
              </div>
            </div> */}
          </div>

          {/* 3. RIGHT: THE STICKY INDEX */}
          <div className="w-full lg:w-[28%] lg:sticky lg:top-32 h-fit pb-10">
            <div className="border-l border-black/10 pl-8 space-y-4 max-h-[70vh] overflow-y-auto no-scrollbar py-2">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActive(index)}
                  className="group flex flex-col items-start text-left block w-full outline-none py-2"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-[9px] font-bold transition-all duration-300 ${active === index ? 'text-yellow-600 scale-125' : 'text-gray-300'}`}>
                      {project.id}
                    </span>
                    <motion.div 
                      animate={{ width: active === index ? 30 : 0 }}
                      className="h-[1px] bg-yellow-500"
                    />
                  </div>
                  <span className={`text-lg font-black uppercase tracking-tighter transition-all duration-300 ${active === index ? 'text-black' : 'text-gray-300 group-hover:text-gray-500'}`}>
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