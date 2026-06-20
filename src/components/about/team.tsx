"use client";

import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Linkedin } from "lucide-react";

const teamMembers = [
  { name: "Founders", role: "", image: "/founder.jpeg" },
  { name: "Manmeet", role: "Manager", image: "/manmeet.jpeg" },
  { name: "Yashvi", role: "Ads Expert & Creative Designer", image: "/yashvi.jpg" },
  { name: "Manav", role: "Video Editor", image: "/manav.jpeg" },
  { name: "Hritik", role: "Google Expert & HR", image: "/hritik.jpg" },
  { name: "Dhananjay", role: "Videographer", image: "/dhananjay.jpg" },
  { name: "Nikita", role: "Video Editor", image: "/nikita.jpeg" },
  { name: "Krisha", role: "Social Media Model/Anchor", image: "/member.PNG" },
  { name: "Ayush", role: "Videographer", image: "/ayush.jpeg" },
  { name: "Yash", role: "Video Editor", image: "/yash.jpeg" },
  { name: "Kaviyan", role: "Videographer & Editor", image: "/kaviyan.jpg" },
  { name: "Snehi", role: "Creative Intern", image: "/snehi.jpeg" },  
  { name: "Jiya", role: "Social Media Intern", image: "/jiya.jpeg" },
  { name: "Nitya", role: "Social Media Intern/Anchor", image: "/nitya.jpeg" },
  { name: "Sakshi", role: "Graphic Designer", image: "/sakshi.jpeg" },
  { name: "Suchit", role: "Video Editor", image: "/suchit.jpeg" },
  { name: "Rahul", role: "Video Editor", image: "/rahul.jpeg" },
  { name: "Nayan", role: "Video Editing Intern", image: "/nayan.jpg" },
];

export default function TeamCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [constraints, setConstraints] = useState(0);

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current) {
        const fullWidth = containerRef.current.scrollWidth;
        const visibleWidth = containerRef.current.offsetWidth;
        setConstraints(visibleWidth - fullWidth);
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    const currentX = x.get();
    const moveAmount = 324; 
    let newX = direction === "right" ? currentX - moveAmount : currentX + moveAmount;

    if (newX < constraints) newX = constraints;
    if (newX > 0) newX = 0;

    controls.start({
      x: newX,
      transition: { type: "spring", stiffness: 150, damping: 20 }
    });
  };

  return (
    <section className="bg-[#080808] py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-yellow-400" />
            <span className="text-yellow-400 font-medium tracking-[0.2em] uppercase text-xs">
              Our People
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            Meet <span className="font-light italic font-serif">the</span> Squad
          </h2>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={() => handleScroll("left")}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition-all active:scale-90"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => handleScroll("right")}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition-all active:scale-90"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={containerRef} className="overflow-visible cursor-grab active:cursor-grabbing">
            <motion.div
              drag="x"
              dragConstraints={{ left: constraints, right: 0 }}
              style={{ x }}
              animate={controls}
              className="flex gap-6"
            >
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="w-[260px] md:w-[300px] flex-shrink-0 group"
                >
                  <div className="relative rounded-[16px] aspect-[4/5] overflow-hidden bg-neutral-900 border border-white/5 group-hover:border-yellow-400/30 transition-colors duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      draggable={false}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-bold uppercase tracking-wider group-hover:text-yellow-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 font-serif italic text-base mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}