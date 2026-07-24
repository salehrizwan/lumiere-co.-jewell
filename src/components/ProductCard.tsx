import React from 'react';
import { Product } from '../types';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../CartContext';

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group flex flex-col relative"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isNewArrival && (
          <span className="bg-brand-primary text-brand-text text-[10px] uppercase tracking-widest px-3 py-1 shadow-sm">
            New
          </span>
        )}
        {product.isBestSeller && (
          <span className="bg-brand-accent text-white text-[10px] uppercase tracking-widest px-3 py-1 shadow-sm">
            Best Seller
          </span>
        )}
      </div>

      {/* Image & Actions */}
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-secondary mb-6">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action Buttons */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white p-3 text-brand-text hover:bg-brand-accent hover:text-white transition-colors shadow-sm" aria-label="Add to wishlist">
            <Heart size={18} />
          </button>
          <button 
            onClick={() => addToCart(product)}
            className="bg-brand-text text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-brand-accent transition-colors shadow-sm flex items-center gap-2"
          >
            <ShoppingBag size={16} />
            <span>Add to Cart</span>
          </button>
          <button className="bg-white p-3 text-brand-text hover:bg-brand-accent hover:text-white transition-colors shadow-sm" aria-label="Quick view">
            <Eye size={18} />
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="text-center">
        <p className="text-brand-muted text-xs uppercase tracking-widest mb-2">{product.category}</p>
        <h3 className="font-serif text-lg text-brand-text mb-2">{product.name}</h3>
        <p className="text-brand-text font-medium">Rs. {product.price.toLocaleString()}</p>
      </div>
    </motion.div>
  );
}
