'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import c15 from '../../public/c15.jpg';
import c16 from '../../public/c16.jpg';
import c17 from '../../public/c17.jpg';
import c18 from '../../public/c18.jpg';
import c19 from '../../public/c19.jpg';
import c20 from '../../public/c20.jpg';
import c21 from '../../public/c21.jpg';
import c22 from '../../public/c22.jpg';

export default function PremiumGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  
  const galleryImages = [
    { src: c15, alt: "Porsche Design Detail", category: "Design" },
    { src: c16, alt: "Porsche Interior Craftsmanship", category: "Interior" },
    { src: c17, alt: "Porsche Performance Engineering", category: "Engineering" },
    { src: c18, alt: "Porsche Lifestyle", category: "Lifestyle" },
    { src: c19, alt: "Porsche Heritage", category: "Heritage" },
    { src: c20, alt: "Porsche Innovation", category: "Innovation" },
    { src: c21, alt: "Porsche Motorsport", category: "Motorsport" },
    { src: c22, alt: "Porsche Exclusive Manufaktur", category: "Exclusive" },
  ];
  
  return (
    <section ref={ref} className="py-32 bg-white">
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
            Visual Excellence
          </motion.span>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-black mt-4 mb-6 tracking-tighter text-[#1a1a1a]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            THE PORSCHE <span className="text-gradient">GALLERY</span>
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
            Explore the artistry and engineering excellence that defines the Porsche legacy through our curated collection of imagery.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              className="relative group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative h-[400px] overflow-hidden">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs uppercase tracking-wider text-[#c8a97e] block mb-2">{image.category}</span>
                <h3 className="text-xl font-bold">{image.alt}</h3>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="porsche-btn px-10 py-4 rounded-none text-lg">
            View Complete Collection
          </button>
        </motion.div>
      </motion.div>
      
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[80vh]">
                <Image 
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              
              <button 
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-sm uppercase tracking-wider text-[#c8a97e] block mb-1">{galleryImages[selectedImage].category}</span>
                <h3 className="text-2xl font-bold text-white">{galleryImages[selectedImage].alt}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}