"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronUp } from "lucide-react";

const serviceActs = [
  {
    title: "Paid Media & Performance",
    desc: "Data-driven engines designed to dominate search and social ecosystems.",
    services: ["Meta Ads Management", "Google Ads (PPC)", "YouTube Marketing", "Google My Business"],
  },
  {
    title: "Content & Social Ecosystems",
    desc: "Turning casual scrollers into loyal brand advocates through storytelling.",
    services: ["Social Media Marketing", "Influencer Marketing", "UGC Content", "LinkedIn Growth", "Content Marketing"],
  },
  {
    title: "Production & Visuals",
    desc: "High-production value assets designed for the center stage.",
    services: ["Video Shoots", "Video Editing", "Ad Creations", "Graphic Designing", "Podcast Production"],
  },
  {
    title: "Digital Infrastructure",
    desc: "Building the high-speed foundations of your digital empire.",
    services: ["Website Development", "Search Engine Optimization (SEO)", "Public Relations (PR)", "Personal Branding"],
  }
];

export default function ServiceList() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="relative flex flex-col md:flex-row bg-[#080808] border-t border-white/5">

      {/* THE CHAPTERS */}
      <div className="flex-1">
        {serviceActs.map((act, i) => (
          <div key={i} className="group relative border-b border-white/5 py-24 px-6 md:px-20 overflow-hidden">
            
            {/* Subtle Yellow Glow on Hover */}
            <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-12">
              {/* Left Side: Chapter Info */}
              <div className="lg:col-span-5">
                <span className="text-yellow-500 font-black text-xs tracking-widest mb-6 block uppercase">0{i + 1}</span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8 group-hover:text-yellow-400 transition-colors">
                  {act.title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">{act.desc}</p>
              </div>

              {/* Right Side: Specific Services List */}
              <div className="lg:col-span-7 grid md:grid-cols-2 gap-y-4 gap-x-12">
                {act.services.map((service, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="py-4 border-b border-white/5 flex items-center justify-between group/item"
                  >
                    <span className="text-gray-400 group-hover/item:text-white transition-colors uppercase text-sm font-bold tracking-widest">
                      {service}
                    </span>
                    <ArrowUpRight size={14} className="text-yellow-500 opacity-0 group-hover/item:opacity-100 transition-all" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Back to Top Indicator */}
            <button 
              onClick={scrollToTop}
              className="absolute bottom-10 right-10 hidden md:flex items-center gap-2 text-[8px] font-black tracking-[0.3em] text-gray-700 uppercase rotate-90 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              BACK TO TOP <ChevronUp size={10} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}