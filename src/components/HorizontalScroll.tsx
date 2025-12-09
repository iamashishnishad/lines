'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import c8 from '../../public/c8.jpg';
import c9 from '../../public/c9.jpg';
import c10 from '../../public/c10.jpg';
import c11 from '../../public/c11.jpg';

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const sections = gsap.utils.toArray('.panel');
    
    if (containerRef.current && sectionRef.current && sections.length > 0) {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => `+=${sectionRef.current?.offsetWidth * 1.5 || 0}`
        }
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  
  const panelContent = [
    {
      title: "PERFORMANCE",
      description: "From 0 to 100 km/h in just 2.8 seconds. Experience the raw power of Porsche engineering.",
      bgColor: "bg-[#1a1a1a]",
      textColor: "text-white",
      image: c8
    },
    {
      title: "DESIGN",
      description: "Timeless aesthetics meet cutting-edge aerodynamics. Every curve has a purpose.",
      bgColor: "bg-[#f5f5f5]",
      textColor: "text-[#1a1a1a]",
      image: c9
    },
    {
      title: "TECHNOLOGY",
      description: "Innovative systems that enhance both performance and comfort. The future is now.",
      bgColor: "bg-[#d5001c]",
      textColor: "text-white",
      image: c10
    },
    {
      title: "HERITAGE",
      description: "Over 70 years of motorsport excellence. A legacy that continues to evolve.",
      bgColor: "bg-[#0f1419]",
      textColor: "text-white",
      image: c11
    }
  ];
  
  return (
    <div ref={sectionRef} className="h-screen overflow-hidden">
      <div ref={containerRef} className="flex h-full">
        {panelContent.map((panel, index) => (
          <div 
            key={panel.title}
            className={`panel h-screen w-screen flex-shrink-0 flex items-center justify-center ${panel.bgColor} relative overflow-hidden`}
          >
            <div className="absolute inset-0 opacity-30">
              <Image 
                src={panel.image}
                alt={panel.title}
                fill
                style={{ objectFit: 'cover' }}
                className="mix-blend-overlay"
              />
            </div>
            
            <div className={`max-w-4xl mx-auto px-8 ${panel.textColor} relative z-10`}>
              <motion.h2 
                className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {panel.title}
              </motion.h2>
              
              <motion.div 
                className="w-24 h-1 bg-white mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                style={{ 
                  backgroundColor: panel.textColor === 'text-white' ? 'white' : '#d5001c'
                }}
              />
              
              <motion.p
                className="text-xl md:text-2xl font-light"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {panel.description}
              </motion.p>
              
              <motion.button
                className={`mt-8 px-8 py-3 border-2 ${panel.textColor === 'text-white' ? 'border-white hover:bg-white hover:text-black' : 'border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white'} transition-colors duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore {panel.title.toLowerCase()}
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}