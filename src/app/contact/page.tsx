
import ContactFormClient from '@/components/ContactFormClient';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPinIcon } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-5xl font-bold text-primary mb-4 flex items-center justify-center">
          <Mail size={48} className="mr-4 text-accent" /> Get In Touch
        </h1>
        <p className="text-xl text-foreground max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question, feedback, or a partnership inquiry, feel free to reach out.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-primary">Send Us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactFormClient />
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Phone size={24} className="mr-3 text-accent" />
                Customer Support
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground">
              <p>For urgent inquiries, you can reach us at:</p>
              <p className="font-semibold text-lg text-primary mt-1">+91 (XXX) XXX-XXXX (Mon-Fri, 10 AM - 6 PM IST)</p>
              <p className="text-sm text-muted-foreground">(Please note: Phone support is illustrative for this demo.)</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <MapPinIcon size={24} className="mr-3 text-accent" />
                Our Office (By Appointment)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground">
              <p>CafeAtOnce Headquarters</p>
              <p>123 Coffee Lane, Bean Town</p>
              <p>Mumbai, Maharashtra, India</p>
              <p className="text-sm text-muted-foreground">(Office address is illustrative for this demo.)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Contact Us - CafeAtOnce',
  description: 'Get in touch with CafeAtOnce for inquiries, feedback, or support. Fill out our contact form or find our contact details.',
};
