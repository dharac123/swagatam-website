"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP SECTION: BIG BRANDING */}
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
              Let’s build <br />
              <span className="italic font-serif font-light text-gray-500">the next</span> big thing.
            </h2>
            <p className="text-gray-500 text-lg max-w-sm mb-8 leading-relaxed">
              From the heart of Ahmedabad, we’re redefining how brands perform on the digital stage.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:gap-20">
            <div>
              <h4 className="text-yellow-400 font-bold text-[10px] tracking-[0.3em] uppercase mb-8">Navigation</h4>
              <ul className="space-y-4">
                {["Home", "Services", "Work", "Process", "Contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white font-medium transition-colors uppercase text-sm tracking-widest">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-yellow-400 font-bold text-[10px] tracking-[0.3em] uppercase mb-8">Office</h4>
              <address className="not-italic text-gray-400 text-sm leading-relaxed tracking-widest uppercase font-medium">
                Sindhu Bhavan Road,<br />
                Ahmedabad, Gujarat<br />
                India 380054
              </address>
              <div className="mt-8">
                <a href="mailto:hello@swagatam.com" className="text-white font-bold hover:text-yellow-400 transition-colors underline underline-offset-8 decoration-yellow-400/30">
                  hello@swagatam.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: CREDITS */}
        <div className="relative pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* GIANT WATERMARK TEXT */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-[0.02] select-none pointer-events-none whitespace-nowrap">
            <h2 className="text-[20vw] font-black tracking-tighter text-white">AMDAVAD</h2>
          </div>

          <p className="text-[10px] text-gray-600 font-black tracking-[0.4em] uppercase relative z-10">
            © {new Date().getFullYear()} Swagatam Amdavad. All Rights Reserved.
          </p>

          <button 
            onClick={scrollToTop}
            className="relative z-10 flex items-center gap-3 text-[10px] text-gray-400 hover:text-yellow-400 font-black tracking-[0.4em] uppercase group"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all">
               <ArrowUp size={14} />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}