
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { flavorFinder, type FlavorFinderInput, type FlavorFinderOutput } from '@/ai/flows/flavor-finder';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Wand2, Lightbulb } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  dietaryRestrictions: z.string().min(2, { message: "Please describe any dietary restrictions, or type 'None'." }),
  flavorPreferences: z.string().min(5, { message: "Please describe your preferred flavors (e.g., sweet, nutty, fruity, chocolatey)." }),
});

type FlavorFinderFormValues = z.infer<typeof formSchema>;

export default function FlavorFinderClient() {
  const [result, setResult] = useState<FlavorFinderOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FlavorFinderFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dietaryRestrictions: '',
      flavorPreferences: '',
    },
  });

  const onSubmit: SubmitHandler<FlavorFinderFormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const aiResult = await flavorFinder(data as FlavorFinderInput);
      setResult(aiResult);
      toast({
        title: "Flavor Found!",
        description: "We've found a recommendation for you.",
      });
    } catch (error) {
      console.error("Error calling Flavor Finder AI:", error);
      toast({
        title: "Error",
        description: "Sorry, we couldn't find a flavor right now. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl text-primary flex items-center">
            <Wand2 size={28} className="mr-3 text-accent" />
            Tell Us Your Preferences
          </CardTitle>
          <CardDescription>
            Answer a couple of questions and our AI will suggest the perfect CafeAtOnce flavor for you.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="dietaryRestrictions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-foreground">Dietary Restrictions</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Vegan, Gluten-free, Nut allergy, None"
                        className="resize-none"
                        {...field}
                        rows={3}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="flavorPreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-foreground">Flavor Preferences</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., I love sweet caramel, rich chocolate, or nutty flavors. Not a fan of fruity coffee."
                        className="resize-none"
                        {...field}
                        rows={5}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-colors py-6 text-lg">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Finding Your Flavor...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-5 w-5" />
                    Find My Flavor
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {isLoading && !result && (
        <div className="flex flex-col items-center justify-center p-8 bg-secondary/30 rounded-xl h-full min-h-[300px]">
          <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
          <p className="text-xl text-foreground">Our AI is brewing up a recommendation for you...</p>
        </div>
      )}

      {result && !isLoading && (
        <Card className="shadow-xl bg-gradient-to-br from-accent/20 to-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl text-primary flex items-center">
              <Lightbulb size={28} className="mr-3 text-accent" />
              Your Flavor Recommendation!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-background/70 rounded-lg">
              <h3 className="text-2xl font-semibold text-accent mb-2">{result.recommendedFlavor}</h3>
            </div>
            <div className="p-4 bg-background/70 rounded-lg">
              <h4 className="text-lg font-medium text-foreground mb-1">Why this flavor?</h4>
              <p className="text-muted-foreground">{result.reasoning}</p>
            </div>
          </CardContent>
           <CardFooter>
            <Button variant="outline" onClick={() => { setResult(null); form.reset(); }} className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors py-6 text-lg">
              Try Again With New Preferences
            </Button>
          </CardFooter>
        </Card>
      )}
       {!isLoading && !result && (
         <div className="flex flex-col items-center justify-center p-8 bg-secondary/30 rounded-xl h-full min-h-[300px] text-center">
           <Wand2 size={48} className="text-primary mb-4" />
           <p className="text-xl text-foreground">Waiting for your preferences to conjure up a flavor!</p>
         </div>
       )}
    </div>
  );
}
