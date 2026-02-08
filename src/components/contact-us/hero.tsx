"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Send, Phone, Mail, MapPin, 
  Instagram, Facebook, Youtube, Linkedin, Twitter 
} from "lucide-react";
import { useRef } from "react";

// 1. FLOATING SOCIAL ICONS (Drifting in the Stage Shadows)
const FloatingSocials = () => {
  const icons = [
    { Icon: Instagram, color: "text-pink-500", top: "10%", left: "5%", size: 100, d: 0 },
    { Icon: Facebook, color: "text-blue-600", top: "15%", left: "85%", size: 120, d: 2 },
    { Icon: Youtube, color: "text-red-600", top: "55%", left: "-2%", size: 140, d: 1 },
    { Icon: Linkedin, color: "text-blue-400", top: "70%", left: "92%", size: 110, d: 3 },
    { Icon: Twitter, color: "text-white", top: "40%", left: "80%", size: 80, d: 1.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -50, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 12 + i, repeat: Infinity, ease: "easeInOut", delay: item.d }}
          style={{ top: item.top, left: item.left }}
          className={`absolute ${item.color} filter blur-[1px] md:blur-0`}
        >
          <item.Icon size={item.size} strokeWidth={0.5} />
        </motion.div>
      ))}
      {/* Dynamic Spotlights to light up icons */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full" />
    </div>
  );
};

// 2. REPEATING "LET'S CONNECT" TEXT (Texture for bottom of page)
const ConnectMarquee = () => {
  const text = "let's connect let's connect let's connect let's connect ";
  return (
    <div className="w-full overflow-hidden py-16 opacity-10 mt-20 border-t border-white/5">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap text-[12vw] font-black italic tracking-tighter text-white"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)", color: "" } as any}
      >
        {text} {text}
      </motion.div>
    </div>
  );
};

export default function ContactPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax signature movement
  const signatureX = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#050505] text-white pt-40 overflow-hidden flex flex-col justify-between">

      <FloatingSocials />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
        {/* HEADER */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-yellow-400" />
            <span className="text-yellow-400 font-bold text-xs tracking-[0.4em] uppercase">Connect With the Crew</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[9vw] font-black tracking-tighter leading-[0.8] mb-12">
            Let's <br />
            <span className="italic font-serif font-light text-gray-500">Scale the</span> <span className="text-yellow-400">Stage.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT: INFO CARDS */}
          <div className="space-y-8">
            <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed max-w-md mb-12">
              Ready to claim the center stage? Let's engineer your brand's next major success story.
            </p>

            {/* LEFT COLUMN: UNIFIED CONTACT CARDS */}
            <div className="space-y-6">
            <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed max-w-md mb-12">
                Ready to claim the center stage? Let's engineer your brand's next major success story.
            </p>

            {/* Card 1: Email */}
            <Link href="mailto:hello@swagatam.com" className="group block p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-yellow-400/50 transition-all duration-500">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center text-black shadow-[0_0_30px_rgba(250,204,21,0.3)] group-hover:scale-110 transition-transform duration-500">
                        <Mail size={28} strokeWidth={2.5} />
                    </div>
                    <div>
                        <span className="text-[10px] font-black tracking-widest text-gray-500 uppercase">The Inbox</span>
                        <p className="text-xl font-bold tracking-tight text-white group-hover:text-yellow-400 transition-colors">hello@swagatam.com</p>
                    </div>
                    </div>
                    <Send className="text-yellow-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" size={20} />
                </div>
            </Link>

            {/* Card 2: Phone */}
            <Link href="tel:+919999999999" className="group block p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-yellow-400/50 transition-all duration-500">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center text-black shadow-[0_0_30px_rgba(250,204,21,0.3)] group-hover:scale-110 transition-transform duration-500">
                        <Phone size={28} strokeWidth={2.5} />
                    </div>
                    <div>
                        <span className="text-[10px] font-black tracking-widest text-gray-500 uppercase">The Hotline</span>
                        <p className="text-xl font-bold tracking-tight text-white group-hover:text-yellow-400 transition-colors">+91 99999 99999</p>
                    </div>
                    </div>
                    <Send className="text-yellow-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" size={20} />
                </div>
            </Link>

            {/* Card 3: Location */}
            <div className="group block p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-yellow-400/50 transition-all duration-500">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center text-black shadow-[0_0_30px_rgba(250,204,21,0.3)] group-hover:scale-110 transition-transform duration-500">
                        <MapPin size={28} strokeWidth={2.5} />
                    </div>
                    <div>
                        <span className="text-[10px] font-black tracking-widest text-gray-500 uppercase">Production HQ</span>
                        <p className="text-xl font-bold tracking-tight text-white group-hover:text-yellow-400 transition-colors">Sindhu Bhavan Road, AMD</p>
                    </div>
                    </div>
                    {/* No send icon here as it's not a link, but kept for layout symmetry */}
                    <div className="w-5 h-5 opacity-0 group-hover:opacity-20 transition-all">
                    <MapPin size={20} className="text-yellow-500" />
                    </div>
                </div>
            </div>
            </div>
          </div>

          {/* RIGHT: THE FORM */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-10 md:p-14 rounded-[3.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl relative overflow-hidden"
          >
            <form className="space-y-10 relative z-10">
              <div className="space-y-2 group">
                <label className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase ml-4 group-focus-within:text-yellow-400 transition-colors italic">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 p-4 focus:outline-none focus:border-yellow-400 transition-all text-lg placeholder:text-gray-800" placeholder="Your Name" />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase ml-4 group-focus-within:text-yellow-400 transition-colors italic">Your Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 p-4 focus:outline-none focus:border-yellow-400 transition-all text-lg placeholder:text-gray-800" placeholder="email@brand.com" />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase ml-4 group-focus-within:text-yellow-400 transition-colors italic">Phone Number</label>
                <input type="tel" className="w-full bg-transparent border-b border-white/10 p-4 focus:outline-none focus:border-yellow-400 transition-all text-lg placeholder:text-gray-800" placeholder="+91 98765 43210" />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase ml-4 group-focus-within:text-yellow-400 transition-colors italic">Company</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 p-4 focus:outline-none focus:border-yellow-400 transition-all text-lg placeholder:text-gray-800" placeholder="Your Name" />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase ml-4 italic">Tell us about your project</label>
                <textarea rows={3} className="w-full bg-transparent border-b border-white/10 p-4 focus:outline-none focus:border-yellow-400 transition-all text-lg placeholder:text-gray-800 resize-none" placeholder="Tell us about your brand goals..." />
              </div>

              <button className="w-full py-6 bg-yellow-400 text-black font-black tracking-[0.3em] uppercase rounded-full hover:bg-white transition-all shadow-[0_0_60px_-10px_rgba(250,204,21,0.5)] flex items-center justify-center gap-4 group">
                SUBMIT BRIEF
                <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* 4. MARQUEE BELOW THE FORM */}
      <ConnectMarquee />

    </main>
  );
}