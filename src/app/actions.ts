
"use server";

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export interface ContactFormState {
  message: string;
  status: "success" | "error" | "idle";
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  // Simulate sending an email or saving to a database
  console.log("Contact Form Submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // In a real application, you would integrate with an email service or database here.
  // For example:
  // try {
  //   await sendEmail({ to: 'contact@lattebliss.in', subject: `New message from ${name}`, body: message });
  //   return { message: "Thank you for your message! We'll get back to you soon.", status: "success" };
  // } catch (error) {
  //   return { message: "An error occurred. Please try again later.", status: "error" };
  // }

  return {
    message: "Thank you for your message! We've received it and will get back to you soon.",
    status: "success",
  };
}
