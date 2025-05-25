
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { products } from '@/lib/productsData';
import ProductCard from '@/components/ProductCard';
import { Bot, ShoppingCart, Truck } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary via-background to-secondary py-20 md:py-32 rounded-xl overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-20">
           <Image 
            src="https://storage.googleapis.com/project-idm-images/user_uploaded/CafeAtOnce_product_in_bag.png"
            alt="Cafe@once Cold Brew product in a handbag" 
            fill
            className="transform scale-110 object-cover"
            data-ai-hint="product handbag"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
            Discover Your <span className="text-accent">Perfect Cafe@once Moment</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-10 max-w-3xl mx-auto">
            Premium coffee concentrates, crafted for the Indian palate. Enjoy café-quality coffee at home, effortlessly with Cafe@once.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg rounded-lg shadow-md hover:shadow-lg transition-all">
              <Link href="/products">Explore Flavors</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-10 py-7 text-lg rounded-lg shadow-md hover:shadow-lg transition-all">
              <Link href="/flavor-finder">Find My Flavor <Bot className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section>
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Our Signature Concentrates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-md rounded-lg shadow-md hover:shadow-lg transition-all">
            <Link href="/products">View All Products <ShoppingCart className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      {/* Flavor Finder CTA Section */}
      <section className="bg-secondary/50 p-10 md:p-16 rounded-xl shadow-lg text-center">
        <Bot size={64} className="mx-auto mb-6 text-primary" />
        <h2 className="text-4xl font-bold text-primary mb-6">Can't Decide? Let Us Help!</h2>
        <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
          Our AI-powered Flavor Finder considers your unique tastes and dietary needs to recommend the perfect Cafe@once concentrate for you.
        </p>
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg rounded-lg shadow-md hover:shadow-lg transition-all">
          <Link href="/flavor-finder">Launch Flavor Finder</Link>
        </Button>
      </section>

      {/* Info Snippets Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Truck size={28} className="mr-3 text-accent" />
              Nationwide Shipping
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground mb-4">
              We deliver Cafe@once across India! Get your favorite coffee concentrates delivered right to your doorstep.
            </p>
            <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-lg">
              <Link href="/shipping">Shipping Details</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Image src="https://placehold.co/40x40.png" alt="Quality Icon" width={28} height={28} className="mr-3 rounded-full" data-ai-hint="quality badge" />
              Pure & Delicious
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground mb-4">
              Crafted with premium beans and natural flavors for an authentic, delightful coffee experience every time.
            </p>
            <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-lg">
              <Link href="/products">Explore Ingredients</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
