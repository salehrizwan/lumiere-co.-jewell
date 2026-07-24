import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="flex-1">
            <h4 className="text-brand-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Get In Touch</h4>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-text mb-6 leading-tight">
              We'd Love To Hear From You
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-10 max-w-md">
              Whether you have a question about our collections, need assistance with an order, or just want to share your thoughts, our concierge team is here to help.
            </p>
            
            <div className="space-y-6">
              <div>
                <h5 className="font-serif text-xl text-brand-text mb-2">Email</h5>
                <p className="text-brand-muted">care@lumierecojewell.com</p>
              </div>
              <div>
                <h5 className="font-serif text-xl text-brand-text mb-2">Boutique Hours</h5>
                <p className="text-brand-muted">Monday - Friday: 10am - 6pm EST</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white p-8 md:p-12 shadow-sm border border-brand-border/20"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-brand-muted mb-2">Name</label>
                  <input type="text" id="name" className="w-full border-b border-brand-border py-2 focus:outline-none focus:border-brand-accent transition-colors bg-transparent" placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-brand-muted mb-2">Email</label>
                  <input type="email" id="email" className="w-full border-b border-brand-border py-2 focus:outline-none focus:border-brand-accent transition-colors bg-transparent" placeholder="jane@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-brand-muted mb-2">Phone (Optional)</label>
                <input type="tel" id="phone" className="w-full border-b border-brand-border py-2 focus:outline-none focus:border-brand-accent transition-colors bg-transparent" placeholder="+1 (555) 000-0000" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-brand-muted mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full border-b border-brand-border py-2 focus:outline-none focus:border-brand-accent transition-colors bg-transparent resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button type="submit" className="flex-1 bg-brand-text text-white px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-brand-accent transition-colors text-center">
                  Send Inquiry
                </button>
                <a href="https://wa.me/923328232083?text=Hi%20LUMI%C3%88RE%20CO.%20JEWELL%2C%20I%27d%20like%20to%20place%20a%20jewelry%20order." target="_blank" rel="noopener noreferrer" className="flex-1 border border-brand-text text-brand-text flex items-center justify-center gap-2 px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-brand-secondary transition-colors">
                  <MessageCircle size={18} />
                  <span>WhatsApp Order</span>
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
