'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import c36 from '../../public/c36.jpg';
import c37 from '../../public/c37.jpg';

// Use fixed, deterministic positions instead of random ones
const particlePositions = [
  { left: 89, top: 54 },
  { left: 11, top: 36 },
  { left: 62, top: 92 },
  { left: 3, top: 93 },
  { left: 24, top: 48 },
  { left: 79, top: 41 },
  { left: 43, top: 77 },
  { left: 77, top: 74 },
  { left: 83, top: 55 },
  { left: 36, top: 23 },
  { left: 92, top: 67 },
  { left: 18, top: 82 },
  { left: 57, top: 9 },
  { left: 68, top: 63 },
  { left: 47, top: 33 }
];

export default function ParallaxHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [c36, c37];
  
  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);
  
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        delay: 0.2,
        staggerChildren: 0.08,
        delayChildren: 0.3
      } 
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const titleText = "PORSCHE SPRITE";
  
  return (
    <div ref={ref} className="h-screen relative overflow-hidden">
      {/* Premium gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent z-50" />
      
      {/* Luxury overlay gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10"
        style={{ opacity }}
      />
      
      {/* Background image carousel with crossfade */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          {images.map((image, index) => (
            currentImage === index && (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
                style={{ scale }}
              >
                <Image 
                  src={image} 
                  alt="Porsche Luxury" 
                  fill 
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center',
                    y
                  }}
                  priority
                  className="filter brightness-85"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
      
      {/* Animated diamond pattern overlay */}
      <motion.div 
        className="absolute inset-0 z-15 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #c8a97e 0, #c8a97e 1px, transparent 0, transparent 50%)',
          backgroundSize: '30px 30px',
          mixBlendMode: 'overlay'
        }}
      />
      
      <motion.div 
        className="absolute inset-0 flex items-center justify-center z-20 text-white text-center px-4"
        style={{ opacity }}
      >
        <motion.div style={{ y: textY }}>
          <motion.div 
            className="mb-8 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent mx-2 mt-4" />
            <span className="text-sm uppercase tracking-[0.4em] text-[#c8a97e] font-light">Since 1948</span>
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent mx-2 mt-4" />
          </motion.div>
          
          <motion.h1 
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter flex flex-wrap justify-center"
          >
            {titleText.split('').map((letter, index) => (
              <motion.span 
                key={index} 
                variants={letterVariants}
                className={`${letter === ' ' ? 'mr-4' : 'mx-[2px] md:mx-1'} gold-gradient`}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.div 
            className="relative w-32 h-[2px] mx-auto mb-10"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45 border-2 border-[#c8a97e] bg-black/50" />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-xl md:text-3xl max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
          >
            <span className="font-cormorant italic">Unleashing</span> the perfect harmony of <span className="gold-gradient font-medium">precision engineering</span> and <span className="gold-gradient font-medium">timeless design</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-12 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6"
          >
            <motion.button
              className="porsche-btn px-10 py-4 rounded-none text-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Discover the Legacy</span>
              <motion.span 
                className="absolute inset-0 bg-[#b5001a]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
            
            <motion.button
              className="border-2 border-[#c8a97e] text-[#c8a97e] px-10 py-4 rounded-none text-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">Build Your Porsche</span>
              <motion.span 
                className="absolute inset-0 bg-[#c8a97e]"
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-[#c8a97e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Luxury corner accents with animated borders */}
      <div className="absolute top-8 left-8 w-20 h-20 z-20">
        <motion.div 
          className="w-full h-full border-t-2 border-l-2 border-[#c8a97e] opacity-80"
          initial={{ width: 0, height: 0 }}
          animate={{ width: '100%', height: '100%' }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
      <div className="absolute top-8 right-8 w-20 h-20 z-20">
        <motion.div 
          className="w-full h-full border-t-2 border-r-2 border-[#c8a97e] opacity-80"
          initial={{ width: 0, height: 0 }}
          animate={{ width: '100%', height: '100%' }}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </div>
      <div className="absolute bottom-8 left-8 w-20 h-20 z-20">
        <motion.div 
          className="w-full h-full border-b-2 border-l-2 border-[#c8a97e] opacity-80"
          initial={{ width: 0, height: 0 }}
          animate={{ width: '100%', height: '100%' }}
          transition={{ duration: 1, delay: 0.9 }}
        />
      </div>
      <div className="absolute bottom-8 right-8 w-20 h-20 z-20">
        <motion.div 
          className="w-full h-full border-b-2 border-r-2 border-[#c8a97e] opacity-80"
          initial={{ width: 0, height: 0 }}
          animate={{ width: '100%', height: '100%' }}
          transition={{ duration: 1, delay: 1.1 }}
        />
      </div>
      
      {/* Subtle floating particles with FIXED positions */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
        {particlePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#c8a97e] opacity-40"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 5 + (i % 5),
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>
    </div>
  );
}