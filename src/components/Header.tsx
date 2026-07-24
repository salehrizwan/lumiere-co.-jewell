import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left: Mobile Menu Toggle & Search */}
        <div className="flex items-center gap-4 flex-1">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-brand-text hover:text-brand-accent transition-colors"
          >
            <Menu size={24} />
          </button>
          <div className="hidden md:flex items-center gap-6">
            <a href="#shop" className="text-sm font-medium tracking-wide hover:text-brand-accent transition-colors">Shop</a>
            <a href="#collections" className="text-sm font-medium tracking-wide hover:text-brand-accent transition-colors">Collections</a>
            <a href="#about" className="text-sm font-medium tracking-wide hover:text-brand-accent transition-colors">About</a>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors ml-4">
            <Search size={20} />
          </button>
        </div>

        {/* Center: Brand Logo */}
        <div className="flex flex-col items-center justify-center flex-shrink-0 cursor-pointer text-center">
          <h1 className="font-serif text-3xl md:text-4xl tracking-widest text-brand-text leading-none">
            LUMIÈRE
          </h1>
          <span className="text-[10px] md:text-xs tracking-[0.3em] text-brand-accent uppercase mt-1 font-medium">
            CO. JEWELL
          </span>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center justify-end gap-4 md:gap-6 flex-1">
          <button className="hidden md:block text-brand-text hover:text-brand-accent transition-colors">
            <User size={20} />
          </button>
          <button className="text-brand-text hover:text-brand-accent transition-colors relative">
            <Heart size={20} />
            <span className="absolute -top-1.5 -right-1.5 bg-brand-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="text-brand-text hover:text-brand-accent transition-colors relative"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-brand-border/30">
              <h2 className="font-serif text-2xl tracking-widest">LUMIÈRE</h2>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-text">
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 p-8">
              <a href="#shop" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-brand-text">Shop</a>
              <a href="#collections" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-brand-text">Collections</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-brand-text">About</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-brand-text">Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
