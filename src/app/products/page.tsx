
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/productsData';
import { ListChecks } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-5xl font-bold text-primary mb-4 flex items-center justify-center">
          <ListChecks size={48} className="mr-4 text-accent" /> Our Coffee Concentrates
        </h1>
        <p className="text-xl text-foreground max-w-2xl mx-auto">
          Explore our full range of premium coffee concentrates. Each flavor is crafted to bring you a unique and delightful latte experience.
        </p>
      </header>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="text-center mt-16 p-8 bg-secondary/30 rounded-xl">
        <h2 className="text-3xl font-semibold text-primary mb-4">Why Choose CafeAtOnce?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="p-4">
            <h3 className="text-xl font-medium text-accent mb-2">Premium Quality</h3>
            <p className="text-sm text-foreground">Made from carefully selected coffee beans for a rich, smooth taste.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-medium text-accent mb-2">Ultimate Convenience</h3>
            <p className="text-sm text-foreground">Enjoy a delicious latte in seconds – just add milk and savor.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-medium text-accent mb-2">Natural Flavors</h3>
            <p className="text-sm text-foreground">Crafted with natural ingredients for an authentic and wholesome experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'Our Products - CafeAtOnce',
  description: 'Explore the full range of CafeAtOnce coffee concentrates. Classic, Vanilla, Caramel, Mocha, and Hazelnut flavors available.',
};
