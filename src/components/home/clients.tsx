"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// 1. ADD THE NUMBERS YOU WANT TO SKIP HERE
const missingIds = [397, 398, 411, 440, 446]; // Example: put the numbers that don't exist here

const generateImageData = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 }, (_, i) => ({
    id: start + i,
    src: `/${start + i}.png`, 
    alt: `Client ${start + i}`
  }))
  // 2. THIS FILTERS OUT THE MISSING IMAGES
  .filter(img => !missingIds.includes(img.id));
};

const allImages = generateImageData(354, 448);

// Split the remaining images into two rows
const half = Math.ceil(allImages.length / 2);
const row1 = allImages.slice(0, half);
const row2 = allImages.slice(half);

export default function Clients() {
  return (
    <section className="py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />

        {/* TOP ROW: SEAMLESS INFINITE LOOP */}
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 280, // Ultra slow
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex whitespace-nowrap gap-6 md:gap-10"
          >
            {/* Doubling the filtered array for infinite loop */}
            {[...row1, ...row1].map((logo, i) => (
              <LogoCard key={`top-${i}`} logo={logo} />
            ))}
          </motion.div>
        </div>

        {/* BOTTOM ROW: SEAMLESS INFINITE LOOP (REVERSE) */}
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ 
              duration: 280, // Slightly different speed for natural feel
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
    // LARGE SIZE PRESERVED
    <div className="group relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 hover:border-yellow-500/50">
      
      <div className="relative w-full h-full transition-all duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100">
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          className="object-cover" 
          sizes="(max-width: 768px) 160px, 224px"
          priority={false}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}