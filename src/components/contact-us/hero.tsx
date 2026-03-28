"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Send, Phone, Mail, MapPin, 
  Instagram, Facebook, Youtube, Linkedin, Twitter,
  MessageSquare, AlertCircle
} from "lucide-react";
import { useRef, useState } from "react";

const FloatingSocials = () => {
  const icons = [
    // Reduced base sizes for mobile, keeping your exact positions and colors
    { Icon: Instagram, color: "text-pink-500", top: "10%", left: "5%", size: 40, mdSize: 100, d: 0 },
    { Icon: Facebook, color: "text-blue-600", top: "15%", left: "85%", size: 50, mdSize: 120, d: 2 },
    { Icon: Youtube, color: "text-red-600", top: "55%", left: "-2%", size: 60, mdSize: 140, d: 1 },
    { Icon: Linkedin, color: "text-blue-400", top: "70%", left: "92%", size: 45, mdSize: 110, d: 3 },
    { Icon: Twitter, color: "text-white", top: "40%", left: "80%", size: 35, mdSize: 80, d: 1.5 },
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
          {/* Responsive Icon Sizing */}
          <div className="md:hidden">
            <item.Icon size={item.size} strokeWidth={0.5} />
          </div>
          <div className="hidden md:block">
            <item.Icon size={item.mdSize} strokeWidth={0.5} />
          </div>
        </motion.div>
      ))}
      <div className="absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-yellow-500/10 blur-[100px] md:blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-500/5 blur-[100px] md:blur-[150px] rounded-full" />
    </div>
  );
};

const ConnectMarquee = () => {
  const text = "let's connect let's connect let's connect let's connect ";
  return (
    <div className="w-full overflow-hidden py-8 md:py-16 mt-10 md:mt-20 border-t border-white/5">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap text-[18vw] md:text-[12vw] font-black italic tracking-tighter text-white"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)", color: "transparent" } as any}
      >
        {text} {text}
      </motion.div>
    </div>
  );
};

export default function ContactPage() {
  const containerRef = useRef(null);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^\+?[0-9]{10,14}$/;
    if (!number) {
      setPhoneError("Phone number is required");
      return false;
    }
    if (!phoneRegex.test(number.replace(/\s/g, ""))) {
      setPhoneError("Valid number required");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validatePhoneNumber(phone)) return;

    const whatsappNumber = "918320574922"; 
    const formData = new FormData(e.currentTarget);
    const text = `*New Inquiry*%0A*Name:* ${formData.get("name")}%0A*Phone:* ${phone}%0A*Message:* ${formData.get("message")}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };
  
  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#050505] text-white pt-24 md:pt-40 overflow-hidden flex flex-col justify-between">
      <FloatingSocials />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* HEADER */}
        <div className="mt-10 md:mt-0 mb-12 md:mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-4">
            <div className="w-8 md:w-12 h-[1px] bg-yellow-400" />
            <span className="text-yellow-400 font-bold text-[10px] md:text-xs tracking-[0.4em] uppercase">Instant Connect</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-6xl md:text-[9vw] font-black tracking-tighter leading-[1] md:leading-[0.8] mb-6 md:mb-12">
            Let's <br className="hidden md:block" />
            <span className="italic font-serif font-light text-gray-500">Scale the</span> <span className="text-yellow-400">Stage.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-medium leading-relaxed max-w-md">
            Ready to claim the center stage? Fill the form and we'll chat instantly.
          </p>
        </div>

        {/* Responsive Grid: Stacks on mobile, 2-cols on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          
          {/* LEFT: INFO CARD (Order 2 on mobile to put form first) */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-yellow-400/20 transition-all duration-500 space-y-6 md:space-y-8">
                <Link href="mailto:swagatamdavad@gmail.com" className="group flex items-center justify-between">
                    <div className="flex items-center gap-4 md:gap-6 overflow-hidden">
                        <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 rounded-xl md:rounded-2xl bg-yellow-400 flex items-center justify-center text-black shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                            <Mail size={20} className="md:w-6 md:h-6" strokeWidth={2.5} />
                        </div>
                        <p className="text-sm md:text-xl font-bold tracking-tight text-white group-hover:text-yellow-400 transition-colors truncate">swagatamdavad@gmail.com</p>
                    </div>
                </Link>

                <div className="h-[1px] w-full bg-white/5" />

                <Link href="tel:+918320574922" className="group flex items-center justify-between">
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 rounded-xl md:rounded-2xl bg-yellow-400 flex items-center justify-center text-black shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                            <Phone size={20} className="md:w-6 md:h-6" strokeWidth={2.5} />
                        </div>
                        <p className="text-sm md:text-xl font-bold tracking-tight text-white group-hover:text-yellow-400 transition-colors">+91 832 057 4922</p>
                    </div>
                </Link>
            </div>
          </div>

          {/* RIGHT: THE FORM (Order 1 on mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="order-1 lg:order-2 p-6 md:p-14 rounded-3xl md:rounded-[3.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl relative overflow-hidden"
          >
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6 md:space-y-10 relative z-10">
              <div className="space-y-1 group">
                <label className="text-[9px] font-black tracking-[0.4em] text-gray-500 uppercase ml-2 italic">Full Name</label>
                <input required name="name" type="text" className="w-full bg-transparent border-b border-white/10 p-3 md:p-4 focus:outline-none focus:border-yellow-400 transition-all text-base md:text-lg placeholder:text-gray-700" placeholder="Your Name" />
              </div>

              <div className="space-y-1 group">
                <label className="text-[9px] font-black tracking-[0.4em] text-gray-500 uppercase ml-2 italic">Your Email</label>
                <input required name="email" type="email" className="w-full bg-transparent border-b border-white/10 p-3 md:p-4 focus:outline-none focus:border-yellow-400 transition-all text-base md:text-lg placeholder:text-gray-700" placeholder="email@brand.com" />
              </div>

              <div className="space-y-1 group">
                <label className="text-[9px] font-black tracking-[0.4em] text-gray-500 uppercase ml-2 italic">Phone Number</label>
                <input 
                  required 
                  name="phone" 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full bg-transparent border-b ${phoneError ? 'border-red-500' : 'border-white/10'} p-3 md:p-4 focus:outline-none focus:border-yellow-400 transition-all text-base md:text-lg placeholder:text-gray-700`} 
                  placeholder="+91..." 
                />
              </div>

              <div className="space-y-1 group">
                <label className="text-[9px] font-black tracking-[0.4em] text-gray-500 uppercase ml-2 italic">Tell us about your project</label>
                <textarea required name="message" rows={2} className="w-full bg-transparent border-b border-white/10 p-3 md:p-4 focus:outline-none focus:border-yellow-400 transition-all text-base md:text-lg placeholder:text-gray-700 resize-none" placeholder="Brand goals..." />
              </div>

              <button type="submit" className="w-full py-4 md:py-6 bg-yellow-400 text-black font-black tracking-[0.3em] uppercase rounded-full hover:bg-white transition-all flex items-center justify-center gap-3 text-sm md:text-base">
                SUBMIT BRIEF <MessageSquare size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <ConnectMarquee />
    </main>
  );
}