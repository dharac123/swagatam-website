"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Palette, 
  Megaphone, 
  ShoppingBag, 
  Search, 
  Code2, 
  Video,
  Linkedin
} from "lucide-react";

const serviceActs = [
  // ROW 1: Long Data Cards (2 Columns)
  {
    title: "Podcast Production & Growth",
    desc: "We help you turn your podcast into a powerful content and growth engine. From strategy and recording guidance to editing, publishing, and distribution, we handle the entire process end-to-end. Our focus goes beyond just production — we optimize each episode for engagement, repurpose content into high-performing clips, and position your brand as an authority in your niche. Whether you're building an audience or generating leads, we make sure your podcast delivers real business impact.",
    icon: <ShoppingBag className="w-8 h-8 text-yellow-500" />,
    span: "lg:col-span-6",
  },
  {
    title: "UGC Ad Studio",
    desc: "We create high-converting UGC ads that feel native, authentic, and impossible to ignore. Our team handles everything — from sourcing creators and scripting scroll-stopping hooks to producing and editing content optimized for performance. Every video is built with one goal in mind: driving conversions. By combining real human storytelling with proven ad frameworks, we help your brand stand out in crowded feeds and scale winning creatives across Meta and Google.",
    icon: <Video className="w-8 h-8 text-yellow-500" />,
    span: "lg:col-span-6",
  },
  
  // ROW 2: Short Data Cards (3 Columns)
  {
    title: "SEO",
    desc: "We help your brand rank higher and grow organically with strategic, data-driven SEO. We improve traffic quality, visibility, and conversions for long-term growth.",
    icon: <Search className="w-8 h-8 text-yellow-500" />,
    span: "lg:col-span-4",
  },
  {
    title: "Meta & Google Ads",
    desc: "We run performance-driven ad campaigns designed to scale profitably. We focus on maximizing ROI with data-backed strategies that consistently deliver results.",
    icon: <Megaphone className="w-8 h-8 text-yellow-500" />,
    span: "lg:col-span-4",
  },
  {
    title: "Graphic Design",
    desc: "We create scroll-stopping visuals that capture attention and build brand trust. Every asset is crafted to boost engagement and drive real conversions.",
    icon: <Palette className="w-8 h-8 text-yellow-500" />,
    span: "lg:col-span-4",
  },

  // ROW 3: Medium/Long Data Cards (2 Columns)
  {
    title: "Web Development",
    desc: "We design and develop fast, responsive, and conversion-focused websites. Whether it’s landing pages or full sites, every build is optimized to deliver better user experience, higher conversions, and lower ad costs.",
    icon: <Code2 className="w-8 h-8 text-yellow-500" />,
    span: "lg:col-span-6",
  },
  {
    title: "LinkedIn Personal Branding",
    desc: "We build and scale powerful LinkedIn personal brands that attract opportunities, leads, and authority. From content strategy and post creation to profile optimization and consistent growth systems, we position you as a go-to voice in your industry. Every post is crafted to spark engagement and build trust.",
    icon: <Linkedin className="w-8 h-8 text-yellow-500" />,
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