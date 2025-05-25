
"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';

const initialState: ContactFormState = {
  message: "",
  status: "idle",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-colors py-3 text-lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-5 w-5" />
          Send Message
        </>
      )}
    </Button>
  );
}

export default function ContactFormClient() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      // Consider resetting form fields here if needed, though useFormState doesn't automatically handle this.
      // A full form reset might require managing form input state with useState or a library like react-hook-form if not using its server action integration.
      // For this example, we'll rely on page navigation or manual clearing by the user.
    } else if (state.status === "error" && state.message && !state.errors) { // General error not related to fields
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-lg text-foreground">Full Name</Label>
        <Input type="text" id="name" name="name" placeholder="Your Name" required className="mt-1"/>
        {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>}
      </div>
      <div>
        <Label htmlFor="email" className="text-lg text-foreground">Email Address</Label>
        <Input type="email" id="email" name="email" placeholder="your.email@example.com" required className="mt-1"/>
        {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>}
      </div>
      <div>
        <Label htmlFor="message" className="text-lg text-foreground">Message</Label>
        <Textarea id="message" name="message" placeholder="Your inquiry or feedback..." required rows={6} className="mt-1 resize-none"/>
        {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>}
      </div>
      <SubmitButton />
      {state.status !== "idle" && !state.errors && state.message && (
         <p className={`text-sm mt-2 ${state.status === 'success' ? 'text-green-600' : 'text-destructive'}`}>
           {state.message}
         </p>
       )}
    </form>
  );
}
