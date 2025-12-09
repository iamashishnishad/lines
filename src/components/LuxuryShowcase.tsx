'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import c12 from '../../public/c12.jpg';
import c13 from '../../public/c13.jpg';
import c14 from '../../public/c14.jpg';

export default function LuxuryShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  
  return (
    <section ref={ref} className="py-32 bg-[#0a0a0a] text-white">
      <motion.div 
        className="container mx-auto px-4"
        style={{ opacity }}
      >
        <div className="text-center mb-24">
          <motion.span 
            className="text-sm uppercase tracking-[0.3em] gold-accent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Craftsmanship Redefined
          </motion.span>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-black mt-4 mb-6 tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="gold-gradient">LUXURY</span> IN EVERY DETAIL
          </motion.h2>
          
          <motion.div 
            className="w-24 h-[2px] bg-[#c8a97e] mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
          
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto font-light text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Experience unparalleled craftsmanship where every stitch, every curve, and every material is selected with meticulous attention to detail.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "EXQUISITE MATERIALS", 
              description: "Only the finest leather, carbon fiber, and metals make their way into a Porsche interior.",
              image: c12
            },
            { 
              title: "HANDCRAFTED EXCELLENCE", 
              description: "Each vehicle passes through the hands of skilled artisans who perfect every detail.",
              image: c13
            },
            { 
              title: "BESPOKE CUSTOMIZATION", 
              description: "Create a Porsche that is uniquely yours with our extensive personalization options.",
              image: c14
            }
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              className="luxury-card overflow-hidden rounded-none bg-[#1a1a1a] border border-[#333] group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <div className="relative h-[300px] overflow-hidden">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#c8a97e] transition-colors duration-300">{item.title}</h3>
                <div className="w-12 h-[2px] bg-[#c8a97e] mb-6 transition-all duration-300 group-hover:w-20" />
                <p className="text-gray-400 mb-6">{item.description}</p>
                <div className="flex items-center text-[#c8a97e] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Discover More</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}