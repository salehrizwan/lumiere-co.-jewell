import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/hero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 uppercase tracking-[0.3em] text-sm mb-6"
        >
          Lumière Co. Jewell
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight drop-shadow-lg"
        >
          Jewelry That Speaks Softly & Shines Loudly
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/90 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto drop-shadow-md"
        >
          Discover timeless pieces designed for everyday elegance, unforgettable moments, and effortless luxury.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#shop"
            className="px-8 py-4 bg-white text-brand-text text-sm uppercase tracking-widest font-medium hover:bg-brand-secondary transition-colors w-full sm:w-auto"
          >
            Shop Collection
          </a>
        </motion.div>
      </div>

      {/* Floating sparkles - CSS animation could be added in a global style but let's keep it simple */}
      <motion.div 
        animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }} 
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <span className="block w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent mx-auto"></span>
      </motion.div>
    </section>
  );
}
