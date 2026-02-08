"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  // { name: "Process", href: "/process" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" }
  
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="relative group">
          <div className="text-2xl font-black tracking-tighter text-white">
            SWAGATAM <span className="text-yellow-400">.</span>
          </div>
          <div className="text-[8px] tracking-[0.4em] text-gray-500 uppercase font-bold -mt-1 group-hover:text-yellow-400 transition-colors">
            Amdavad
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-yellow-400 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <button className="px-6 py-2.5 bg-yellow-400 text-black font-black text-xs tracking-widest uppercase rounded-full hover:bg-white transition-all flex items-center gap-2 group">
            Let's Talk
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-2xl font-bold text-white uppercase tracking-tighter"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full py-4 bg-yellow-400 text-black font-bold rounded-xl">
              GET A CALL BACK
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}