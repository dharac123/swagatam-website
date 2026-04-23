"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Layers, 
  Cpu, 
  Activity, 
  Box, 
  ShieldCheck, 
  Sparkles,
  ChevronRight
} from "lucide-react";

const stats = [
  { label: "Years Of Experience", value: "3+" },
  { label: "Brands Scaled", value: "50+" },
  { label: "Asset Production", value: "1.2k+" },
  { label: "Performance Delta", value: "85%" },
  { label: "Revenue Impact", value: "₹25Cr" },
];

const techNodes = [
  { Icon: Layers, pos: "top-0 left-1/2 -translate-x-1/2" },
  { Icon: Cpu, pos: "top-1/4 right-0" },
  { Icon: Activity, pos: "bottom-1/4 right-2" },
  { Icon: Box, pos: "bottom-0 left-1/2 -translate-x-1/2" },
  { Icon: ShieldCheck, pos: "bottom-1/4 left-2" },
  { Icon: Sparkles, pos: "top-1/4 left-0" },
];

export default function AgencyHero() {
  return (
    <section className="bg-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HERO TOP: 2-COLUMN LAYOUT */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          
          {/* LEFT: CONTENT */}
          <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-left">
           

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-black uppercase"
            >
              Grow Your <br />
              Business <span className="italic font-serif font-light text-zinc-300 lowercase">&</span> Revenue.
            </motion.h1>

            <div className="flex">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/contact" 
              className="bg-yellow-400 text-black px-12 py-5 rounded-full font-black text-[10px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all shadow-2xl"
            >
              Book a Free Strategy Call
            </Link>
          </motion.div>
        </div>
          </div>

          {/* RIGHT: ABSTRACT ECOSYSTEM */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center">
            <Image src="/social.jpg" alt="Abstract Tech Ecosystem" width={500} height={500} className="rounded-3xl object-cover" />
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
      `}</style>
    </section>
  );
}