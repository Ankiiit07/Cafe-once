
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, PackageCheck, RotateCcw } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-5xl font-bold text-primary mb-4 flex items-center justify-center">
          <Truck size={48} className="mr-4 text-accent" /> Shipping & Returns
        </h1>
        <p className="text-xl text-foreground max-w-2xl mx-auto">
          Everything you need to know about how we get your CafeAtOnce to you, and our returns policy.
        </p>
      </header>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <PackageCheck size={28} className="mr-3 text-accent" />
              Shipping Across India
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-foreground">
            <p>We are thrilled to offer shipping for all CafeAtOnce products across the nation!</p>
            <p>Whether you're in a bustling metro city or a quiet town, we aim to deliver your coffee concentrates right to your doorstep.</p>
            <p>Standard shipping charges apply and will be calculated at checkout based on your location.</p>
            <p>We partner with reliable courier services to ensure your package arrives safely and on time.</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Truck size={28} className="mr-3 text-accent" />
              Delivery Timelines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-foreground">
            <p><strong>Metro Cities:</strong> Typically 2-5 business days.</p>
            <p><strong>Other Cities & Towns:</strong> Typically 4-7 business days.</p>
            <p><strong>Remote Areas:</strong> May take up to 7-10 business days.</p>
            <p>Please note that these are estimated timelines and actual delivery times may vary due to unforeseen circumstances like weather, public holidays, or other disruptions.</p>
            <p>You will receive tracking information once your order is dispatched.</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <RotateCcw size={28} className="mr-3 text-accent" />
              Return Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-foreground">
            <p>Your satisfaction is important to us. Due to the perishable nature of our coffee concentrates, we can only accept returns for products that are damaged during transit or if you have received an incorrect item.</p>
            <p>If you receive a damaged or incorrect product, please contact our customer support within 48 hours of delivery with photographic evidence. We will arrange for a replacement or refund as appropriate.</p>
            <p>We do not accept returns for change of mind or if the product has been opened or used.</p>
            <p>For any queries regarding returns, please reach out to us via our <a href="/contact" className="text-accent hover:underline font-medium">Contact Page</a>.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Shipping & Returns - CafeAtOnce',
  description: 'Information about CafeAtOnce shipping policies, delivery timelines across India, and our return policy for coffee concentrates.',
};
