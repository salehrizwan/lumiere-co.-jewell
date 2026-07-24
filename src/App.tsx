/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedCollection from './components/FeaturedCollection';
import WhyChooseUs from './components/WhyChooseUs';
import GiftCollection from './components/GiftCollection';
import Reviews from './components/Reviews';
import InstagramGallery from './components/InstagramGallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import WhatsAppButton from './components/WhatsAppButton';
import { CartProvider } from './CartContext';
import CartDrawer from './components/CartDrawer';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-brand-primary text-brand-text font-sans selection:bg-brand-accent selection:text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <FeaturedCollection />
          <WhyChooseUs />
          <GiftCollection />
          <Reviews />
          <InstagramGallery />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        <AIAssistant />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

