'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import c8 from '../../public/c8.jpg';
import c9 from '../../public/c9.jpg';
import c10 from '../../public/c10.jpg';
import c11 from '../../public/c11.jpg';

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  
  const galleryImages = [
    { src: c8, alt: "Porsche Detail", delay: 0 },
    { src: c9, alt: "Porsche Interior", delay: 0.1 },
    { src: c10, alt: "Porsche Racing", delay: 0.2 },
    { src: c11, alt: "Porsche Lifestyle", delay: 0.3 },
  ];
  
  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black to-[#1a1a1a]">
      <motion.div 
        className="container mx-auto px-4"
        style={{ opacity }}
      >
        <motion.h2 
          className="text-5xl md:text-6xl font-black mb-16 text-white text-center tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          PORSCHE GALLERY
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: image.delay }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">{image.alt}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="porsche-btn px-10 py-4 rounded-none text-lg">
            View Full Gallery
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}