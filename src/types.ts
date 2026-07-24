export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
}

export interface Review {
  id: string;
  rating: number;
  text: string;
  author: string;
}

export interface CollectionType {
  id: string;
  name: string;
  imageUrl: string;
}
