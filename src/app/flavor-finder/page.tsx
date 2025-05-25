
import FlavorFinderClient from '@/components/FlavorFinderClient';
import { Bot } from 'lucide-react';

export default function FlavorFinderPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-5xl font-bold text-primary mb-4 flex items-center justify-center">
          <Bot size={48} className="mr-4 text-accent" /> AI Flavor Finder
        </h1>
        <p className="text-xl text-foreground max-w-3xl mx-auto">
          Let our smart assistant help you choose the perfect Latte Bliss concentrate. Just tell us a bit about your tastes and dietary needs!
        </p>
      </header>

      <section>
        <FlavorFinderClient />
      </section>

      <section className="text-center mt-16 p-8 bg-secondary/30 rounded-xl">
        <h2 className="text-3xl font-semibold text-primary mb-4">How It Works</h2>
        <p className="text-lg text-foreground max-w-2xl mx-auto">
          Our AI considers various factors like your preferred flavor profiles (sweet, nutty, rich) and any dietary restrictions (vegan, gluten-free) to suggest the best coffee concentrate from our range. It's like having a personal coffee connoisseur!
        </p>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'AI Flavor Finder - Latte Bliss India',
  description: 'Discover your ideal Latte Bliss coffee concentrate flavor with our AI-powered recommendation tool. Input your preferences and dietary restrictions for a personalized suggestion.',
};
