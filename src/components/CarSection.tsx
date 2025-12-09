'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface CarSectionProps {
  model: string;
  description: string;
  imageUrl: any; // StaticImageData
  color: string;
  index: number;
}

export default function CarSection({ model, description, imageUrl, color, index }: CarSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const textX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-100, 0, 0, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);
  
  const modelVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } },
    hover: { scale: 1.05, backgroundColor: "#b5001a" }
  };
  
  return (
    <section 
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      <motion.div 
        className="car-section-bg"
        style={{ 
          backgroundColor: color,
          opacity
        }}
      />
      
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ opacity }}
      >
        <motion.div
          style={{ scale: imageScale }}
          className="w-full h-full"
        >
          <Image 
            src={imageUrl} 
            alt={model} 
            fill
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            priority={index === 0}
          />
        </motion.div>
      </motion.div>
      
      <div className="container mx-auto px-4 py-20 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-white"
            style={{ x: textX, opacity }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
                variants={modelVariants}
              >
                {model === 'Model S' ? 'PORSCHE 911' : 
                 model === 'Model X' ? 'PORSCHE TAYCAN' : 'PORSCHE CAYMAN'}
              </motion.h2>
              
              <motion.p 
                className="text-xl md:text-2xl mb-8 font-light max-w-xl"
                variants={descriptionVariants}
              >
                {model === 'Model S' ? 
                  'The iconic sports car that defines the perfect balance of power and precision. A legend reborn for the modern era.' :
                 model === 'Model X' ? 
                  'Revolutionary electric performance with unmistakable Porsche DNA. The future of driving is here.' :
                  'Pure driving pleasure in its most concentrated form. Agile, responsive, and breathtakingly beautiful.'}
              </motion.p>
              
              <motion.button 
                className="porsche-btn px-10 py-4 rounded-none text-lg"
                variants={buttonVariants}
                whileHover="hover"
              >
                Explore {model === 'Model S' ? '911' : model === 'Model X' ? 'Taycan' : 'Cayman'}
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative h-[400px] md:h-[600px] overflow-hidden rounded-lg shadow-2xl"
            style={{ scale, opacity }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image 
              src={imageUrl} 
              alt={model} 
              fill
              style={{ 
                objectFit: 'cover',
                objectPosition: 'center 30%',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}