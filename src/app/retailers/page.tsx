
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Search, Building2 } from 'lucide-react';
import Image from 'next/image';

export default function RetailersPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-5xl font-bold text-primary mb-4 flex items-center justify-center">
          <MapPin size={48} className="mr-4 text-accent" /> Find Us Near You
        </h1>
        <p className="text-xl text-foreground max-w-2xl mx-auto">
          Discover local stores and cafes in India where you can find Cafe@once coffee concentrates.
        </p>
      </header>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl text-primary flex items-center">
            <Search size={28} className="mr-3 text-accent" />
            Interactive Retailer Map (Coming Soon!)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-foreground">
          <p className="text-lg">
            We're working hard to bring you an interactive map that will help you locate Cafe@once retailers in your region. This feature will use IP Geolocation to show you the closest stores.
          </p>
          <div className="my-8 p-6 bg-secondary/30 rounded-lg flex flex-col items-center text-center">
            <Image src="https://placehold.co/600x400.png" alt="Map placeholder" width={600} height={400} className="rounded-md shadow-md mb-4" data-ai-hint="map illustration location" />
            <p className="text-muted-foreground">Imagine a map here, pinpointing all our partner stores!</p>
          </div>
          <p>
            In the meantime, you can find our products in select premium grocery stores and partner cafes in major cities. We are continuously expanding our network!
          </p>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">Currently Available In Select Stores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Mumbai', 'Delhi NCR', 'Bangalore', 'Pune', 'Hyderabad', 'Chennai'].map((city) => (
            <Card key={city} className="bg-background shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Building2 size={32} className="mx-auto mb-3 text-accent" />
                <p className="text-xl font-medium text-primary">{city}</p>
                <p className="text-sm text-muted-foreground">Look for us in premium retail outlets and cafes.</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center mt-8 text-foreground">
          We are rapidly expanding! Follow us on social media (links in footer soon!) or check back here for updates on new locations.
        </p>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'Find Our Retailers - Cafe@once',
  description: 'Locate stores and cafes in India that stock Cafe@once coffee concentrates. Interactive map coming soon.',
};
