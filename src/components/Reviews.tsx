import React from 'react';
import { reviews } from '../data';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Reviews() {
  return (
    <section className="py-24 bg-brand-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-text mb-6">Client Testimonials</h2>
          <div className="w-16 h-[1px] bg-brand-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 lg:p-10 shadow-sm border border-brand-border/20 text-center flex flex-col items-center"
            >
              <div className="flex gap-1 mb-6 text-brand-accent">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-brand-text font-serif italic text-lg leading-relaxed mb-8 flex-1">
                "{review.text}"
              </p>
              <span className="text-xs uppercase tracking-widest font-medium text-brand-muted">
                — {review.author}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
