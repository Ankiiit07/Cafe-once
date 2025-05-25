
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  servings: number;
  flavorProfile: string;
  ingredients?: string[];
  aiHint: string;
}

export const products: Product[] = [
  {
    id: 'original-liquid-coffee-concentrate',
    name: 'Original Liquid Coffee Concentrate',
    description: 'Our signature Liquid Coffee Concentrate, made from 100% Arabica Beans. Versatile and delicious, make your coffee in seconds. Just add one part concentrate to six parts milk or water.',
    price: '₹449',
    image: 'https://placehold.co/600x600.png',
    servings: 10,
    flavorProfile: 'Smooth, Rich, Balanced',
    ingredients: ['Coffee', 'Water'],
    aiHint: 'coffee bottle original'
  },
  {
    id: 'vanilla-liquid-coffee-concentrate',
    name: 'Vanilla Liquid Coffee Concentrate',
    description: 'Infused with natural vanilla flavor for a sweet and aromatic twist. Enjoy a delightful vanilla coffee, hot or cold, in an instant.',
    price: '₹499',
    image: 'https://placehold.co/600x600.png',
    servings: 10,
    flavorProfile: 'Sweet, Aromatic, Vanilla',
    ingredients: ['Coffee', 'Water', 'Natural Vanilla Flavor'],
    aiHint: 'coffee bottle vanilla'
  },
  {
    id: 'caramel-liquid-coffee-concentrate',
    name: 'Caramel Liquid Coffee Concentrate',
    description: 'Sweet and rich caramel flavor blended perfectly with our signature coffee concentrate. An indulgent treat for any time of day.',
    price: '₹499',
    image: 'https://placehold.co/600x600.png',
    servings: 10,
    flavorProfile: 'Sweet, Buttery, Caramel',
    ingredients: ['Coffee', 'Water', 'Natural Caramel Flavor'],
    aiHint: 'coffee bottle caramel'
  },
  {
    id: 'mocha-liquid-coffee-concentrate',
    name: 'Mocha Liquid Coffee Concentrate',
    description: 'A decadent blend of rich chocolate and smooth coffee. The perfect pick-me-up for chocolate and coffee lovers alike.',
    price: '₹499',
    image: 'https://placehold.co/600x600.png',
    servings: 10,
    flavorProfile: 'Rich, Chocolatey, Coffee',
    ingredients: ['Coffee', 'Water', 'Natural Chocolate Flavor'],
    aiHint: 'coffee bottle mocha'
  },
  {
    id: 'hazelnut-liquid-coffee-concentrate',
    name: 'Hazelnut Liquid Coffee Concentrate',
    description: 'Warm and nutty hazelnut flavor combined with our premium coffee concentrate. A comforting and sophisticated choice.',
    price: '₹499',
    image: 'https://placehold.co/600x600.png',
    servings: 10,
    flavorProfile: 'Nutty, Toasted, Hazelnut',
    ingredients: ['Coffee', 'Water', 'Natural Hazelnut Flavor'],
    aiHint: 'coffee bottle hazelnut'
  },
  {
    id: 'coconut-liquid-coffee-concentrate',
    name: 'Coconut Liquid Coffee Concentrate',
    description: 'Exotic coconut flavor infused into our smooth coffee concentrate. A tropical escape in every sip, ready in seconds.',
    price: '₹499',
    image: 'https://placehold.co/600x600.png',
    servings: 10,
    flavorProfile: 'Tropical, Creamy, Coconut',
    ingredients: ['Coffee', 'Water', 'Natural Coconut Flavor'],
    aiHint: 'coffee bottle coconut'
  },
  {
    id: 'cinnamon-liquid-coffee-concentrate',
    name: 'Cinnamon Liquid Coffee Concentrate',
    description: 'A comforting blend of warm cinnamon and rich coffee. Perfect for a cozy treat, instantly prepared.',
    price: '₹499',
    image: 'https://placehold.co/600x600.png',
    servings: 10,
    flavorProfile: 'Warm, Spicy, Cinnamon',
    ingredients: ['Coffee', 'Water', 'Natural Cinnamon Flavor'],
    aiHint: 'coffee bottle cinnamon'
  },
  {
    id: 'dark-roast-liquid-coffee-concentrate',
    name: 'Dark Roast Liquid Coffee Concentrate',
    description: 'For those who love a strong, intense coffee flavor. Our Dark Roast concentrate delivers a bold experience, quickly and easily.',
    price: '₹499',
    image: 'https://placehold.co/600x600.png',
    servings: 10,
    flavorProfile: 'Bold, Intense, Dark Roast',
    ingredients: ['Coffee', 'Water'],
    aiHint: 'coffee bottle darkroast'
  },
  {
    id: 'light-roast-liquid-coffee-concentrate',
    name: 'Light Roast Liquid Coffee Concentrate',
    description: 'A smooth and bright coffee experience. Our Light Roast concentrate is perfect for a nuanced cup, ready in moments.',
    price: '₹499',
    image: 'https://placehold.co/600x600.png',
    servings: 10,
    flavorProfile: 'Bright, Smooth, Light Roast',
    ingredients: ['Coffee', 'Water'],
    aiHint: 'coffee bottle lightroast'
  },
  {
    id: 'decaf-liquid-coffee-concentrate',
    name: 'Decaf Liquid Coffee Concentrate',
    description: 'All the rich coffee flavor you love, without the caffeine. Enjoy our Decaf concentrate any time of day, hassle-free.',
    price: '₹549',
    image: 'https://placehold.co/600x600.png',
    servings: 10,
    flavorProfile: 'Smooth, Rich, Decaffeinated',
    ingredients: ['Decaffeinated Coffee', 'Water'],
    aiHint: 'coffee bottle decaf'
  },
];
