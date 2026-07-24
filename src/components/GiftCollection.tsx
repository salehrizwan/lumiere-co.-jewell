import React from 'react';
import { motion } from 'motion/react';

export default function GiftCollection() {
  return (
    <section className="py-24 bg-brand-text text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-brand-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Curated Presents</h4>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              The Perfect Gift <br className="hidden lg:block"/> For Every Occasion
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
              Celebrate birthdays, anniversaries, weddings, graduations, Mother's Day, Valentine's Day, and life's special moments with timeless jewelry that speaks volumes.
            </p>
            <button className="px-10 py-4 bg-brand-accent text-white text-sm uppercase tracking-widest font-medium hover:bg-white hover:text-brand-text transition-colors">
              Shop Gift Collection
            </button>
          </div>
          <div className="flex-1 w-full relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square w-full max-w-lg mx-auto"
            >
              <div className="absolute inset-0 border border-brand-accent/30 transform -translate-x-4 -translate-y-4" />
              <img 
                src="/Elegance Framed in Light.jpg" 
                alt="Jewelry Gift" 
                className="relative z-10 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
