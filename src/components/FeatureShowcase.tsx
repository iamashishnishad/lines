'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  imageUrl: any; // StaticImageData
}

interface FeatureShowcaseProps {
  features: Feature[];
}

export default function FeatureShowcase({ features }: FeatureShowcaseProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  return (
    <section 
      ref={ref} 
      className="py-24 bg-gradient-to-b from-[#f5f5f5] to-white"
    >
      <motion.div 
        className="container mx-auto px-4"
        style={{ opacity }}
      >
        <motion.h2 
          className="text-5xl md:text-6xl font-black mb-16 text-center tracking-tighter text-[#1a1a1a]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          EXCELLENCE IN EVERY DETAIL
        </motion.h2>
        
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a1a1a]">{feature.title}</h3>
                <p className="text-lg text-gray-700 mb-8">{feature.description}</p>
                <button className="porsche-btn px-8 py-3 rounded-none">
                  Learn More
                </button>
              </motion.div>
              
              <motion.div 
                className="flex-1 relative h-[400px] overflow-hidden rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Image 
                  src={feature.imageUrl}
                  alt={feature.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}