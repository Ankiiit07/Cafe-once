
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
    id: 'classic-latte',
    name: 'Classic Latte Concentrate',
    description: 'The original, creamy coffee concentrate. Perfect for a traditional latte experience. Just add milk (dairy or non-dairy) and enjoy hot or cold.',
    price: '₹399',
    image: 'https://placehold.co/600x600.png',
    servings: 6,
    flavorProfile: 'Smooth, Rich, Balanced',
    ingredients: ['Premium Coffee Concentrate', 'Filtered Water', 'Natural Flavors'],
    aiHint: 'coffee bottle classic'
  },
  {
    id: 'vanilla-latte',
    name: 'Vanilla Latte Concentrate',
    description: 'Infused with natural vanilla flavor for a sweet and aromatic twist. Create a delightful vanilla latte in seconds.',
    price: '₹429',
    image: 'https://placehold.co/600x600.png',
    servings: 6,
    flavorProfile: 'Sweet, Aromatic, Vanilla',
    ingredients: ['Premium Coffee Concentrate', 'Filtered Water', 'Natural Vanilla Flavor', 'Natural Flavors'],
    aiHint: 'coffee bottle vanilla'
  },
  {
    id: 'caramel-latte',
    name: 'Caramel Latte Concentrate',
    description: 'Sweet and rich caramel flavor blended perfectly with our signature coffee concentrate. An indulgent treat for any time of day.',
    price: '₹429',
    image: 'https://placehold.co/600x600.png',
    servings: 6,
    flavorProfile: 'Sweet, Buttery, Caramel',
    ingredients: ['Premium Coffee Concentrate', 'Filtered Water', 'Natural Caramel Flavor', 'Natural Flavors'],
    aiHint: 'coffee bottle caramel'
  },
  {
    id: 'mocha-latte',
    name: 'Mocha Latte Concentrate',
    description: 'A decadent blend of rich chocolate and smooth coffee. The perfect pick-me-up for chocolate and coffee lovers alike.',
    price: '₹449',
    image: 'https://placehold.co/600x600.png',
    servings: 6,
    flavorProfile: 'Rich, Chocolatey, Coffee',
    ingredients: ['Premium Coffee Concentrate', 'Filtered Water', 'Natural Chocolate Flavor', 'Natural Flavors'],
    aiHint: 'coffee bottle mocha'
  },
  {
    id: 'hazelnut-latte',
    name: 'Hazelnut Latte Concentrate',
    description: 'Warm and nutty hazelnut flavor combined with our premium coffee concentrate. A comforting and sophisticated choice.',
    price: '₹429',
    image: 'https://placehold.co/600x600.png',
    servings: 6,
    flavorProfile: 'Nutty, Toasted, Hazelnut',
    ingredients: ['Premium Coffee Concentrate', 'Filtered Water', 'Natural Hazelnut Flavor', 'Natural Flavors'],
    aiHint: 'coffee bottle hazelnut'
  },
];
