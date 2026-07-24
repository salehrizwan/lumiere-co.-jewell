import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { question: "Is the jewelry waterproof?", answer: "Yes, our stainless steel collection is highly water-resistant. However, to maintain the perfect shine, we recommend removing pieces before swimming in chlorinated pools or salt water." },
  { question: "Will it tarnish?", answer: "Our pieces are crafted with premium materials and advanced plating techniques designed to resist tarnishing and fading with proper care." },
  { question: "Do you offer gift packaging?", answer: "Absolutely. Every order arrives in our signature elegant Lumière packaging, perfect for gifting." },
  { question: "How long does shipping take?", answer: "Standard shipping takes 3-5 business days. Express shipping options are available at checkout for next-day delivery." },
  { question: "Can I return my order?", answer: "We offer a 30-day return policy for unworn items in their original packaging. Custom engraved pieces are final sale." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-primary">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-brand-text mb-6">Frequently Asked Questions</h2>
          <div className="w-16 h-[1px] bg-brand-accent mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-brand-border/40 pb-4">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left py-4 focus:outline-none group"
              >
                <span className="font-serif text-lg text-brand-text group-hover:text-brand-accent transition-colors">
                  {faq.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`text-brand-muted transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-accent' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-brand-muted pb-6 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
