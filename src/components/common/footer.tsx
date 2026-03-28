"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Instagram, 
  Linkedin, 
  ArrowUp, 
  Youtube, 
  Facebook, 
  MessageCircle, 
  Phone,
  Mail,     // Added
  MapPin,   // Added
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navItems = ["Home", "About Us", "Services", "Portfolio", "Contact Us"];

  const socialLinks = [
    { 
        Icon: Instagram, 
        href: "https://www.instagram.com/swagatam_amdavad?igsh=MXQ1aTAwNHgzZWZpMw==", 
        label: "Instagram" 
    },
    { 
        Icon: Facebook, 
        href: "https://www.facebook.com/p/Swagatam-Amdavad-61569035135416/", 
        label: "Facebook" 
    },
    { 
        Icon: Youtube, 
        href: "https://www.youtube.com/@swagatamdavad", 
        label: "YouTube" 
    },
    { 
        Icon: MessageCircle, 
        href: "https://wa.me/+918320574922", 
        label: "WhatsApp" 
    },
  ];

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP SECTION: BIG BRANDING */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-10 mb-20">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8"
            >
              Let’s build <br />
              <span className="italic font-serif font-light text-gray-500">the next</span> big thing.
            </motion.h2>
            <p className="text-gray-500 text-lg max-w-sm mb-8 leading-relaxed">
              From the heart of Ahmedabad, we’re redefining how brands perform on the digital stage.
            </p>
            
            {/* SOCIAL ICONS */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <Link 
                  key={i} 
                  href={href} 
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-20 md:gap-5">
            <div className="md:col-span-4">
              <ul className="space-y-4">
                {navItems.map((item) => {
                  const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`;
                  return (
                    <li key={item}>
                      <Link 
                        href={path} 
                        className="text-gray-400 hover:text-white font-medium transition-colors uppercase text-sm tracking-widest inline-block group"
                      >
                        {item}
                        <span className="block h-[1px] w-0 bg-yellow-400 transition-all group-hover:w-full" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="md:col-span-8">
              {/* ADDRESS WITH ICON */}
              <div className="flex gap-3 mb-8">
                <MapPin size={20} className="text-yellow-400 shrink-0" />
                <address className="not-italic text-gray-400 text-sm leading-relaxed tracking-widest uppercase font-medium">
                  St. Xavier's College Corner, <br />
                  501, Aaryan workspace,<br />
                  above Wagh bakri Tea lounge, <br/>
                  Ahmedabad, Gujarat - 380009
                </address>
              </div>
              
              {/* CONTACT DETAILS (Email & Phone) */}
              <div className="flex flex-col space-y-4">
                <Link 
                  href="mailto:swagatamdavad@gmail.com" 
                  className="text-white font-bold hover:text-yellow-400 transition-colors flex items-center gap-3 group"
                >
                  <Mail size={18} className="text-yellow-400 group-hover:scale-110 transition-transform" />
                  <span className="underline underline-offset-8 decoration-yellow-400/30">swagatamdavad@gmail.com</span>
                </Link>
                
                <Link 
                  href="tel:+918320574922" 
                  className="text-white font-bold hover:text-yellow-400 transition-colors flex items-center gap-3 group"
                >
                  <Phone size={18} className="text-yellow-400 group-hover:scale-110 transition-transform" />
                  <span className="underline underline-offset-8 decoration-yellow-400/30">+91 832 057 4922</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: CREDITS */}
        <div className="relative pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-[0.02] select-none pointer-events-none whitespace-nowrap">
            <h2 className="text-[20vw] font-black tracking-tighter text-white">AMDAVAD</h2>
          </div>

          <p className="text-[10px] text-gray-600 font-black tracking-[0.4em] uppercase relative z-10">
            © {new Date().getFullYear()} Swagatam Amdavad. All Rights Reserved.
          </p>

          <button 
            onClick={scrollToTop}
            className="relative z-10 flex items-center gap-4 text-[10px] text-gray-400 hover:text-yellow-400 font-black tracking-[0.4em] uppercase group transition-colors"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 transition-all duration-300">
               <ArrowUp size={16} />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}