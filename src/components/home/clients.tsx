"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// 1. CONFIGURE YOUR LOGOS HERE
const priorityTop = [1, 2, 3, 4, 358];    // Seen first in Top Row
const priorityBottom = [5, 6, 7, 443, 442]; // Seen first in Bottom Row
const missingIds = [397, 398, 411, 440, 446]; 

const generateRows = (start: number, end: number) => {
  // Create the list from the range
  const rangeArray = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  
  // Combine priority IDs and range IDs into one unique list
  const combinedIds = Array.from(new Set([...priorityTop, ...priorityBottom, ...rangeArray]));

  // Convert IDs into Logo objects
  const allLogos = combinedIds
    .map(id => ({
      id,
      src: `/${id}.png`, 
      alt: `Client ${id}`
    }))
    // Remove missing ones and any ID that was just a placeholder
    .filter(img => !missingIds.includes(img.id));

  // Extract Top Priority (Logos that MUST be in Row 1)
  const topPriorityLogos = allLogos.filter(img => priorityTop.includes(img.id));
  
  // Extract Bottom Priority (Logos that MUST be in Row 2)
  const bottomPriorityLogos = allLogos.filter(img => priorityBottom.includes(img.id));
  
  // The rest of the logos
  const remainingLogos = allLogos.filter(img => 
    !priorityTop.includes(img.id) && !priorityBottom.includes(img.id)
  );

  // Distribute remaining logos
  const half = Math.ceil(remainingLogos.length / 2);
  
  // Row 1 starts with Top Priority
  const row1 = [...topPriorityLogos, ...remainingLogos.slice(0, half)];
  // Row 2 starts with Bottom Priority
  const row2 = [...bottomPriorityLogos, ...remainingLogos.slice(half)];

  return { row1, row2 };
};

const { row1, row2 } = generateRows(354, 448);

export default function Clients() {
  return (
    <section className="py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-4"
        >
          OUR CLIENTELE
        </motion.p>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
          Trusted by <span className="italic font-serif font-light text-gray-500">Industry</span> Leaders
        </h2>
      </div>

      <div className="relative flex flex-col gap-6 md:gap-10">
        {/* VIGNETTE MASK */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_right,#050505_0%,transparent_20%,transparent_80%,#050505_100%)]" />

        {/* TOP ROW: Moves Left */}
        <div className="flex overflow-hidden">
          <motion.div 
            initial={{ x: 0 }}
            whileInView={{ x: ["0%", "-50%"] }}
            viewport={{ once: false }}
            transition={{ 
              duration: 150, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex whitespace-nowrap gap-6 md:gap-10"
          >
            {[...row1, ...row1].map((logo, i) => (
              <LogoCard key={`top-${i}`} logo={logo} />
            ))}
          </motion.div>
        </div>

        {/* BOTTOM ROW: Moves Right */}
        <div className="flex overflow-hidden">
          <motion.div 
            // Starting at -50% ensures the bottom priority logos are visible immediately
            initial={{ x: "-50%" }}
            whileInView={{ x: ["-50%", "0%"] }}
            viewport={{ once: false }}
            transition={{ 
              duration: 150, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex whitespace-nowrap gap-6 md:gap-10"
          >
            {[...row2, ...row2].map((logo, i) => (
              <LogoCard key={`bottom-${i}`} logo={logo} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LogoCard({ logo }: { logo: { src: string; alt: string } }) {
  return (
    <div className="group relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0 bg-[#0a0a0a] border border-white/5 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 hover:border-yellow-500/40">
      <div className="relative w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          className="object-cover" 
          sizes="(max-width: 768px) 160px, 224px"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-20 group-hover:opacity-40 transition-opacity" />
    </div>
  );
}