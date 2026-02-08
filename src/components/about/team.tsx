"use client";

import { motion } from "framer-motion";

const founders = [
  { name: "Founder One", role: "Creative Director" },
  { name: "Founder Two", role: "Strategy Head" },
  { name: "Founder Three", role: "Production Head" },
];

const crew = [
  { name: "Crew Member 01", role: "Lead Videographer" },
  { name: "Crew Member 02", role: "Sr. Editor" },
  { name: "Crew Member 03", role: "VFX Artist" },
  { name: "Crew Member 04", role: "Growth Expert" },
  { name: "Crew Member 05", role: "Content Strategist" },
  { name: "Crew Member 06", role: "Ad Specialist" },
  { name: "Crew Member 07", role: "Model/Talent" },
  { name: "Crew Member 08", role: "Sound Engineer" },
  { name: "Crew Member 09", role: "Campaign Mgr" },
  { name: "Crew Member 10", role: "Graphic Designer" },
  { name: "Crew Member 11", role: "UGC Lead" },
  { name: "Crew Member 12", role: "Post Production" },
];

export default function TeamSection() {
  return (
    // Updated Section Background to Deep Black
    <section className="py-32 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. SECTION HEADER */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[1px] bg-yellow-400" />
              <span className="text-yellow-500 font-bold text-xs tracking-[0.4em] uppercase">The Humans</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white">
              The <span className="text-yellow-400">Production</span> <br /> 
              <span className="text-gray-500 italic font-serif font-light">Crew.</span>
            </h2>
          </div>
          <p className="text-gray-500 font-bold text-[10px] tracking-[0.5em] uppercase pb-4">
            15 Multidisciplinary Visionaries
          </p>
        </div>

        {/* 2. UNEVEN STAGGERED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          
          {/* FOUNDERS ROW (Largest) */}
          {founders.map((member, i) => (
            <motion.div
              key={`founder-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-4 h-[500px]"
            >
              <MemberCard member={member} index={i} isFounder={true} />
            </motion.div>
          ))}

          {/* CREW ROW 1 (4-column span) */}
          {crew.slice(0, 3).map((member, i) => (
            <motion.div key={`crew1-${i}`} className="md:col-span-4 h-[350px]">
              <MemberCard member={member} index={i + 3} />
            </motion.div>
          ))}

          {/* CREW ROW 2 (3-column span) */}
          {crew.slice(3, 7).map((member, i) => (
            <motion.div key={`crew2-${i}`} className="md:col-span-3 h-[350px]">
              <MemberCard member={member} index={i + 6} />
            </motion.div>
          ))}

          {/* CREW ROW 3 (Mixed/Asymmetrical with spacers) */}
          <div className="hidden md:block md:col-span-2" />
          {crew.slice(7, 10).map((member, i) => (
            <motion.div key={`crew3-${i}`} className="md:col-span-3 h-[350px]">
              <MemberCard member={member} index={i + 10} />
            </motion.div>
          ))}
          <div className="hidden md:block md:col-span-1" />

          {/* CREW ROW 4 (Centered Finale) */}
          <div className="hidden md:block md:col-span-3" />
          {crew.slice(10, 12).map((member, i) => (
            <motion.div key={`crew4-${i}`} className="md:col-span-3 h-[350px]">
              <MemberCard member={member} index={i + 13} />
            </motion.div>
          ))}
        </div>

        {/* FOOTER ACCENT */}
        <div className="mt-20 pt-10 border-t border-white/5 flex justify-center opacity-30">
           <span className="text-[10px] font-black tracking-[0.8em] uppercase text-gray-500">Amdavad • Est 2023</span>
        </div>

      </div>
    </section>
  );
}

function MemberCard({ member, index, isFounder = false }: { member: any, index: number, isFounder?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      // Card remains dark charcoal, but border and shadow are adjusted for dark mode
      className="group relative w-full h-full rounded-[2.5rem] overflow-hidden bg-[#0D0D0D] p-10 flex flex-col justify-end transition-all duration-500 border border-white/5 hover:border-yellow-400/30"
    >
      {/* Background Graphic: Grid/Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none" />
      
      {/* Photo/Video Placeholder - slightly brighter for visibility on black */}
      <div className="absolute inset-0 bg-white/5 opacity-20 group-hover:opacity-30 transition-opacity" />
      
      {/* Animated Shine Effect - Golden Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10">
        <span className="text-[10px] font-black text-yellow-500 mb-2 block tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
          {isFounder ? 'Creative Director' : `Crew Member 0${index + 1}`}
        </span>
        <h4 className={`${isFounder ? 'text-4xl' : 'text-2xl'} font-black tracking-tight leading-none text-white uppercase group-hover:text-yellow-400 transition-colors`}>
          {member.name}
        </h4>
        <p className="text-[10px] font-bold tracking-[0.3em] mt-3 text-gray-500 uppercase">
          {member.role}
        </p>
      </div>

      {/* Ghost Number in background - dimmed for dark mode */}
      <div className="absolute top-8 right-8 text-white/[0.03] font-black text-7xl select-none group-hover:text-yellow-400/[0.05] transition-colors">
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </div>
    </motion.div>
  );
}