import React from 'react';
import { ShieldCheck, Gem, Sparkles, Clock, Gift, PackageCheck } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  { icon: Gem, title: 'Premium Craftsmanship', desc: 'Expertly designed with attention to detail.' },
  { icon: ShieldCheck, title: 'Stainless Steel', desc: 'Durable, hypoallergenic, and reliable.' },
  { icon: Sparkles, title: 'Tarnish Resistant', desc: 'Built to maintain its beautiful shine.' },
  { icon: Clock, title: 'Everyday Luxury', desc: 'Versatile pieces for any occasion.' },
  { icon: Gift, title: 'Elegant Packaging', desc: 'Ready for the perfect gift moment.' },
  { icon: PackageCheck, title: 'Long-lasting Shine', desc: 'Quality that stands the test of time.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 luxury-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-brand-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">The Lumière Difference</h4>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-text mb-6">Why Choose Us</h2>
          <div className="w-16 h-[1px] bg-brand-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-8 bg-white/50 backdrop-blur-sm border border-brand-border/30 hover:border-brand-accent/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-brand-secondary flex items-center justify-center mb-6 text-brand-accent">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-brand-text mb-3">{feature.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
