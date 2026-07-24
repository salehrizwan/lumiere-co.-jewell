import React from 'react';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const galleryImages = [
  '/1.jpeg',
  '/2.jpeg',
  '/3.jpeg',
  '/4.jpeg',
  '/5.jpeg',
  '/6.jpeg',
];

export default function InstagramGallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <h4 className="text-brand-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">#LumiereCoJewell</h4>
        <h2 className="font-serif text-3xl md:text-4xl text-brand-text mb-8">Follow Our Journey</h2>
        <a href="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium border-b border-brand-text pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors">
          <Instagram size={16} />
          <span>@lumiereco.jewell</span>
        </a>
      </div>

      <div className="flex w-full overflow-x-auto snap-x snap-mandatory pb-8 hide-scrollbar">
        <div className="flex gap-4 px-6 mx-auto w-max">
          {galleryImages.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-[280px] sm:w-[320px] aspect-square flex-shrink-0 snap-center group relative cursor-pointer"
            >
              <img 
                src={img} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={32} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
