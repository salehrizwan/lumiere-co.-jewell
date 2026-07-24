import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data';

export default function FeaturedCollection() {
  const featured = products.slice(0, 6);

  return (
    <section id="shop" className="py-24 bg-brand-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-brand-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Curated Selection</h4>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-text mb-6">Featured Collection</h2>
          <div className="w-16 h-[1px] bg-brand-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-10 py-4 border border-brand-text text-brand-text text-sm uppercase tracking-widest font-medium hover:bg-brand-text hover:text-white transition-colors">
            View All Jewelry
          </button>
        </div>
      </div>
    </section>
  );
}
