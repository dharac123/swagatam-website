"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const pathname = usePathname();

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
          <Image src="/swg_logo.png" alt="Logo" width={60} height={60} className="w-18 h-18" />
        </Link>

        {/* DESKTOP NAV - Now hidden until XL */}
        <nav className="hidden xl:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors relative group ${
                  isActive ? "text-yellow-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-yellow-400 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            );
          })}
        </nav>

        {/* CTA BUTTON - Now hidden until XL */}
        <div className="hidden xl:block">
          <Link href="/contact" className="px-6 py-2.5 bg-yellow-400 text-black font-black text-xs tracking-widest uppercase rounded-full hover:bg-white transition-all flex items-center gap-2 group">
            Let's Talk
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* MOBILE TOGGLE - Now visible until XL */}
        <button 
          className="xl:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            // Added xl:hidden to ensure it disappears if window is resized manually
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-8 flex flex-col gap-6 xl:hidden overflow-hidden shadow-2xl"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`text-2xl font-bold uppercase tracking-tighter flex items-center justify-between ${
                    isActive ? "text-yellow-400" : "text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  {isActive && <div className="w-2 h-2 bg-yellow-400 rounded-full" />}
                </Link>
              );
            })}
            <Link 
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 bg-yellow-400 text-black font-black text-center rounded-xl uppercase tracking-widest text-sm"
            >
              GET A CALL BACK
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}