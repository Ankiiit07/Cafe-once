
"use client";

import Link from 'next/link';
import { Coffee, Home, List, Bot, Truck, MapPin, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/products', label: 'Products', icon: List },
  { href: '/flavor-finder', label: 'Flavor Finder', icon: Bot },
  { href: '/shipping', label: 'Shipping', icon: Truck },
  { href: '/retailers', label: 'Retailers', icon: MapPin },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold hover:text-accent transition-colors">
          <Coffee size={32} />
          <span>Latte Bliss India</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-2">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" asChild className="hover:bg-primary-foreground hover:text-primary transition-colors">
              <Link href={item.href} className="flex items-center space-x-1">
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            </Button>
          ))}
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground hover:text-primary">
                <Menu size={24} />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-primary-foreground p-6 w-[280px]">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center space-x-2 text-xl font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                  <Coffee size={28} />
                  <span>Latte Bliss</span>
                </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon" className="hover:bg-primary-foreground hover:text-primary">
                    <X size={24} />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Button key={item.href} variant="ghost" asChild className="justify-start text-lg py-3 hover:bg-primary-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href={item.href} className="flex items-center space-x-3">
                      <item.icon size={22} />
                      <span>{item.label}</span>
                    </Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
