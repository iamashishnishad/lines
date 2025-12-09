'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import c23 from '../../public/c23.jpg';
import c24 from '../../public/c24.jpg';
import c25 from '../../public/c25.jpg';
import c26 from '../../public/c26.jpg';

export default function ModelShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  
  const models = [
    {
      name: "911 GT3 RS",
      tagline: "Born in Flacht",
      description: "The pinnacle of Porsche motorsport engineering for the road.",
      specs: ["520 HP", "0-100 km/h in 3.2s", "Top Speed: 312 km/h"],
      image: c23,
      color: "#d5001c"
    },
    {
      name: "Taycan Turbo S",
      tagline: "Soul, Electrified",
      description: "The future of performance with zero compromises.",
      specs: ["761 HP", "0-100 km/h in 2.8s", "Range: 412 km"],
      image: c24,
      color: "#1d7ed8"
    },
    {
      name: "718 Cayman GT4 RS",
      tagline: "Perfectly Irrational",
      description: "Mid-engine perfection meets motorsport DNA.",
      specs: ["500 HP", "0-100 km/h in 3.4s", "Top Speed: 315 km/h"],
      image: c25,
      color: "#f0b323"
    },
    {
      name: "Cayenne Turbo GT",
      tagline: "Defying Physics",
      description: "The SUV that rewrites the rules of performance.",
      specs: ["640 HP", "0-100 km/h in 3.3s", "Top Speed: 300 km/h"],
      image: c26,
      color: "#2d9d5d"
    }
  ];
  
  return (
    <section ref={ref} className="py-32 bg-[#f5f5f5]">
      <motion.div 
        className="container mx-auto px-4"
        style={{ opacity }}
      >
        <div className="text-center mb-24">
          <motion.span 
            className="text-sm uppercase tracking-[0.3em] text-[#d5001c]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The Collection
          </motion.span>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-black mt-4 mb-6 tracking-tighter text-[#1a1a1a]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            DISCOVER OUR MODELS
          </motion.h2>
          
          <motion.div 
            className="w-24 h-[2px] bg-[#d5001c] mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
          
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto font-light text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Each Porsche model represents the perfect balance of performance, design, and everyday usability.
          </motion.p>
        </div>
        
        <div className="space-y-24">
          {models.map((model, index) => (
            <motion.div 
              key={model.name}
              className="flex flex-col lg:flex-row items-center gap-12 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`absolute top-0 bottom-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-1 bg-gradient-to-b from-transparent via-[${model.color}] to-transparent opacity-50`} />
              
              <div className={`flex-1 order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm uppercase tracking-[0.2em] text-gray-500 block mb-2">{model.tagline}</span>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: model.color }}>{model.name}</h3>
                  <p className="text-xl text-gray-700 mb-8 font-light">{model.description}</p>
                  
                  <div className="flex flex-wrap gap-6 mb-10">
                    {model.specs.map((spec, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <span className="text-2xl font-bold text-[#1a1a1a]">{spec.split(':')[0]}</span>
                        {spec.includes(':') && (
                          <span className="text-sm text-gray-500">{spec.split(':')[1]}</span>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="porsche-btn px-8 py-3 rounded-none">
                      Explore {model.name}
                    </button>
                    <button className="border-2 border-[#1a1a1a] px-8 py-3 rounded-none text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300">
                      Build Your Own
                    </button>
                  </div>
                </motion.div>
              </div>
              
              <div className={`flex-1 order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <motion.div 
                  className="relative h-[300px] md:h-[500px] overflow-hidden rounded-lg shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image 
                    src={model.image}
                    alt={model.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}