
import Image from 'next/image';
import type { Product } from '@/lib/productsData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="aspect-square w-full relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            data-ai-hint={product.aiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl mb-2 font-semibold text-primary">{product.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-3 h-20 overflow-hidden">
          {product.description}
        </CardDescription>
        <div className="flex items-center text-sm text-foreground mb-1">
          <Tag size={16} className="mr-2 text-accent" />
          <span>Flavor: {product.flavorProfile}</span>
        </div>
         <p className="text-sm text-foreground">Servings: {product.servings}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <p className="text-2xl font-bold text-accent">{product.price}</p>
        <Button variant="default" className="bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-colors">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
