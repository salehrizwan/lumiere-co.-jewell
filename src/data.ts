import { Product, Review, CollectionType } from './types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Eternity Gold Necklace',
    description: 'A timeless 18k gold-plated necklace for everyday elegance.',
    price: 750,
    imageUrl: '/1.jpeg',
    category: 'Necklaces',
    isBestSeller: true,
  },
  {
    id: 'p2',
    name: 'Luminous Pearl Earrings',
    description: 'Classic freshwater pearl earrings with a modern gold twist.',
    price: 450,
    imageUrl: '/2.jpeg',
    category: 'Earrings',
    isNewArrival: true,
  },
  {
    id: 'p3',
    name: 'Aura Luxury Ring',
    description: 'An elegant statement ring with a brilliant cubic zirconia centerpiece.',
    price: 450,
    imageUrl: '/3.jpeg',
    category: 'Rings',
    isBestSeller: true,
  },
  {
    id: 'p4',
    name: 'Minimalist Steel Chain',
    description: 'Premium stainless steel chain that resists tarnishing.',
    price: 400,
    imageUrl: '/4.jpeg',
    category: 'Necklaces',
  },
  {
    id: 'p5',
    name: 'Signature Chain Bracelet',
    description: 'A chunky, sophisticated bracelet for a bold look.',
    price: 450,
    imageUrl: '/5.jpeg', // Replace with a bracelet image
    category: 'Bracelets',
  },
  {
    id: 'p6',
    name: 'Radiance Jewelry Set',
    description: 'A matching necklace and earring set for special moments.',
    price: 500,
    imageUrl: '/6.jpeg',
    category: 'Sets',
    isNewArrival: true,
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    rating: 5,
    text: "Absolutely stunning quality. I wear my necklace every day and it still shines.",
    author: "Sarah M."
  },
  {
    id: 'r2',
    rating: 5,
    text: "The jewelry looks even better in person. The packaging was also incredibly elegant.",
    author: "Ayesha K."
  },
  {
    id: 'r3',
    rating: 5,
    text: "Elegant packaging and premium finish. Will definitely be ordering more for gifts.",
    author: "Emily R."
  }
];

export const collections: CollectionType[] = [
  {
    id: 'c1',
    name: 'Everyday Luxury',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c2',
    name: 'Fine Jewelry',
    imageUrl: 'https://images.unsplash.com/photo-1599643478524-fb66f70a00ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c3',
    name: 'Stainless Steel',
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c4',
    name: 'Gift Collection',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f673f4e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];
