import React from 'react';
import { Instagram, Twitter, PinIcon, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-text text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1">
            <h2 className="font-serif text-3xl tracking-widest mb-2">LUMIÈRE</h2>
            <p className="text-[10px] tracking-[0.3em] text-brand-accent uppercase mb-6 font-medium">CO. JEWELL</p>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs">
              Jewelry That Speaks Softly & Shines Loudly. Designed for everyday elegance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-brand-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-brand-accent transition-colors">
                {/* TikTok icon fallback using lucide standard icons if TikTok not present */}
                <span className="font-bold text-sm tracking-widest">TK</span>
              </a>
              <a href="#" className="text-white/60 hover:text-brand-accent transition-colors">
                <PinIcon size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#shop" className="text-white/60 hover:text-brand-accent transition-colors text-sm">Shop</a></li>
              <li><a href="#collections" className="text-white/60 hover:text-brand-accent transition-colors text-sm">Collections</a></li>
              <li><a href="#about" className="text-white/60 hover:text-brand-accent transition-colors text-sm">About Us</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-brand-accent transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-accent transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-brand-accent transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-accent transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-accent transition-colors text-sm">Shipping & Returns</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-accent transition-colors text-sm">Jewelry Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex border-b border-white/30 focus-within:border-brand-accent transition-colors pb-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none text-sm text-white w-full placeholder:text-white/40"
              />
              <button type="submit" className="text-white hover:text-brand-accent transition-colors pl-2">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
          
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} LUMIÈRE CO. JEWELL. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-white/40 text-xs">Secure Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
