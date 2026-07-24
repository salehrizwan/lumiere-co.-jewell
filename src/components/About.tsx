import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-brand-border/30 transform translate-x-4 translate-y-4" />
              <img 
                src="/story.jpg" 
                alt="Lumiere Co. Jewell Craftsmanship" 
                className="relative z-10 w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <h4 className="text-brand-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Our Story</h4>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-text mb-8 leading-tight">
              Modern Elegance. <br className="hidden lg:block"/> Timeless Style.
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              LUMIÈRE CO. JEWELL creates beautifully crafted jewelry that combines modern elegance with timeless style. Every piece is designed to elevate everyday fashion while remaining versatile enough for life's most memorable occasions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <span className="uppercase text-xs tracking-widest border-b border-brand-accent pb-1 cursor-pointer hover:text-brand-accent transition-colors">
                Read Full Story
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
