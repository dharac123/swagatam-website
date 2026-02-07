"use client";

import { motion } from "framer-motion";
import { 
  Palmtree, Mountain, Plane, Globe, 
  MapPin, Compass, Anchor, Sun 
} from "lucide-react";

const row1 = [
  { name: "HOLIDAY CROWD", icon: Palmtree },
  { name: "KASHMIR PORT", icon: Mountain },
  { name: "TREXAGO", icon: Plane },
  { name: "UNIQUE TRIP", icon: Globe },
  { name: "TRIP IQ", icon: MapPin },
  { name: "KINGDOM", icon: Compass },
];

const row2 = [
  { name: "ASIAN HOLIDAY", icon: Anchor },
  { name: "DEJA VU", icon: Sun },
  { name: "YOU WE TRAVEL", icon: Palmtree },
  { name: "YOUR SIKKIM", icon: Mountain },
  { name: "SEMBARK", icon: Plane },
  { name: "SUVIDHAA", icon: Globe },
];

export default function Clients() {
  return (
    <section className="py-24 bg-[#080808] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col items-center text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-4"
          >
            The Portfolio
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Trusted by <span className="italic font-serif font-light text-gray-500">Global</span> Brands
          </h2>
        </div>
      </div>

      <div className="relative flex flex-col gap-6 md:gap-10">
        {/* EDGE BLUR MASK (Makes logos fade in/out) */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#080808] via-transparent to-[#080808]" />

        {/* TOP ROW: MOVES LEFT TO RIGHT */}
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-6 md:gap-10 pr-10"
          >
            {[...row1, ...row1].map((brand, i) => (
              <LogoPlaceholder key={i} brand={brand} />
            ))}
          </motion.div>
        </div>

        {/* BOTTOM ROW: MOVES RIGHT TO LEFT (VICE VERSA) */}
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-6 md:gap-10 pr-10"
          >
            {[...row2, ...row2].map((brand, i) => (
              <LogoPlaceholder key={i} brand={brand} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LogoPlaceholder({ brand }: { brand: any }) {
  const Icon = brand.icon;
  return (
    <div className="group relative w-48 h-24 md:w-64 md:h-32 bg-white/[0.02] border border-white/5 rounded-3xl flex flex-col items-center justify-center gap-3 transition-all duration-500 hover:bg-white/[0.05] hover:border-yellow-500/30">
      {/* Abstract Icon acting as a logo */}
      <Icon className="text-white/80 group-hover:text-yellow-500 transition-colors duration-500" size={32} />
      
      {/* Brand Text styled like a logo */}
      <span className="text-[10px] md:text-xs font-black tracking-[0.3em] text-white/70 group-hover:text-white transition-colors duration-500 uppercase">
        {brand.name}
      </span>

      {/* Subtle Glow Effect on Hover */}
      <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity rounded-3xl" />
    </div>
  );
}