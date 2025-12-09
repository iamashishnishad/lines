'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import c28 from '../../public/c28.jpg';
import c29 from '../../public/c29.jpg';
import c30 from '../../public/c30.jpg';
import c31 from '../../public/c31.jpg';

export default function HeritageTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  
  const timelineEvents = [
    {
      year: "1948",
      title: "The First Porsche",
      description: "The Porsche 356 'No. 1' Roadster receives its general operating permit, marking the birth of the Porsche brand.",
      image: c28
    },
    {
      year: "1963",
      title: "Birth of an Icon",
      description: "The Porsche 911 makes its debut at the Frankfurt Motor Show, beginning a legacy that continues to this day.",
      image: c29
    },
    {
      year: "1970",
      title: "Le Mans Victory",
      description: "Porsche achieves its first overall victory at the 24 Hours of Le Mans with the legendary 917.",
      image: c30
    },
    {
      year: "2019",
      title: "Electric Revolution",
      description: "The Taycan marks Porsche's entry into the all-electric era, combining performance with sustainability.",
      image: c31
    }
  ];
  
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
            Our Legacy
          </motion.span>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-black mt-4 mb-6 tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            THE PORSCHE <span className="gold-gradient">HERITAGE</span>
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
            For over 70 years, Porsche has been committed to creating sports cars that inspire. Explore the milestones that have shaped our history.
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#c8a97e]/30 via-[#c8a97e] to-[#c8a97e]/30" />
          
          {timelineEvents.map((event, index) => (
            <div 
              key={event.year}
              className={`relative mb-32 last:mb-0 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#c8a97e] border-4 border-[#0a0a0a] z-10" />
              
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-4xl md:text-6xl font-bold gold-accent block mb-4">{event.year}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{event.title}</h3>
                <p className="text-gray-400">{event.description}</p>
              </motion.div>
              
              <motion.div 
                className="flex-1 relative h-[250px] md:h-[350px] overflow-hidden rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Image 
                  src={event.image}
                  alt={event.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 hover:scale-110 filter grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60" />
              </motion.div>
            </div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="border-2 border-[#c8a97e] text-[#c8a97e] px-10 py-4 rounded-none text-lg hover:bg-[#c8a97e] hover:text-[#0a0a0a] transition-colors duration-300">
            Explore Our Full History
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}