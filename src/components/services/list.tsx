"use client";

import { motion } from "framer-motion";
import { 
  Palette, 
  Megaphone, 
  Search, 
  Linkedin,
  Share2,
  Users,
  Mic
} from "lucide-react";

const serviceActs = [
  // ROW 1: Long Data Cards (2 Columns)
  {
    title: "Social Media Marketing & Management",
    desc: "We craft scroll-stopping content and community-focused strategies to grow your presence across all major platforms. From content pillars and aesthetic grids to engagement hacks and community management, we ensure your brand doesn't just exist on social—it leads. Our approach focuses on building a loyal tribe through storytelling that resonates and moves your audience to take action.",
    icon: <Share2 className="w-8 h-8 text-yellow-500" />,
    span: "lg:col-span-6",
  },
  {
    title: "Meta & Google Ads Studio",
    desc: "Performance-driven paid advertising designed to scale your business profitably. We combine creative testing with data-driven targeting to maximize your ROI across the world's most powerful ad networks. Every campaign is built on a foundation of proven ad frameworks, constant A/B testing, and meticulous conversion tracking to ensure your marketing spend is an investment, not an expense.",
    icon: <Megaphone className="w-8 h-8 text-yellow-500" />,
    span: "lg:col-span-6",
  },
  
  // ROW 2: Short Data Cards (3 Columns)
  {
    title: "Influencer Marketing",
    desc: "We connect your brand with the right creators to build authentic trust and reach targeted audiences through strategic partnerships and organic-feeling campaigns.",
    icon: <Users className="w-8 h-8 text-yellow-500" />,
    span: "lg:col-span-4",
  },
  {
    title: "Podcast Production",
    desc: "End-to-end production focusing on authority building. We handle everything from recording guidance to editing and distribution for maximum reach.",
    icon: <Mic className="w-8 h-8 text-yellow-500" />,
    span: "lg:col-span-4",
  },
  {
    title: "Graphic Design",
    desc: "High-impact visual branding and digital assets crafted to stop the scroll. We build trust through premium, consistent design across all your brand touchpoints.",
    icon: <Palette className="w-8 h-8 text-yellow-500" />,
    span: "lg:col-span-4",
  },

  // ROW 3: Medium/Long Data Cards (2 Columns)
  {
    title: "LinkedIn Personal Branding",
    desc: "We position founders and executives as industry authorities through high-value content and strategic networking. From profile optimization to thought-leading posts, we build your digital legacy and attract premium opportunities. Our systems ensure consistent growth and position you as the go-to voice in your specific niche.",
    icon: <Linkedin className="w-8 h-8 text-yellow-500" />,
    span: "lg:col-span-6",
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Long-term organic growth driven by technical excellence and high-quality content strategies. We help your brand get discovered by the right people at the right time by improving traffic quality, domain authority, and search visibility. Our data-backed approach ensures you stay ahead of competitors in the evolving search landscape.",
    icon: <Search className="w-8 h-8 text-yellow-500" />,
    span: "lg:col-span-6",
  },
];

export default function ServiceGrid() {
  return (
    <section className="bg-[#080808] py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
            Our <span className="text-yellow-500">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Strategic digital solutions built to stop the scroll and drive measurable growth.
          </p>
        </div>

        {/* The Grid Layout (2 - 3 - 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
          {serviceActs.map((act, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className={`
                group relative bg-white/[0.02] border border-white/10 p-8 md:p-10 rounded-[2.5rem] 
                overflow-hidden transition-all duration-500 hover:border-yellow-500/30 flex flex-col
                ${act.span}
              `}
            >
              {/* Internal Glow Effect */}
              <div className="absolute inset-0 bg-yellow-400/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                {/* Modern Icon Container */}
                <div className="relative mb-8 w-16 h-16">
                    <div className="absolute inset-0 bg-yellow-500/10 rotate-6 rounded-2xl group-hover:rotate-12 transition-transform" />
                    <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                        {act.icon}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-yellow-400 transition-colors">
                  {act.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-[15px] font-medium">
                  {act.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}