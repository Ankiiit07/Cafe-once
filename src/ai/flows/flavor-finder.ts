
// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview AI-powered tool that recommends coffee concentrate flavors based on user preferences.
 *
 * - flavorFinder - A function that helps users discover coffee concentrate flavors based on their dietary restrictions and flavor preferences.
 * - FlavorFinderInput - The input type for the flavorFinder function.
 * - FlavorFinderOutput - The return type for the flavorFinder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FlavorFinderInputSchema = z.object({
  dietaryRestrictions: z
    .string()
    .describe(
      'Any dietary restrictions the user has, such as vegan, gluten-free, nut allergies, etc.'
    ),
  flavorPreferences: z
    .string()
    .describe(
      'The users flavor preferences. What kind of flavors does the user enjoy?'
    ),
});
export type FlavorFinderInput = z.infer<typeof FlavorFinderInputSchema>;

const FlavorFinderOutputSchema = z.object({
  recommendedFlavor: z
    .string()
    .describe(
      'The recommended coffee concentrate flavor based on the dietary restrictions and flavor preferences provided.'
    ),
  reasoning: z
    .string()
    .describe(
      'Explanation of why the recommended flavor is suitable for the user.'
    ),
});
export type FlavorFinderOutput = z.infer<typeof FlavorFinderOutputSchema>;

export async function flavorFinder(input: FlavorFinderInput): Promise<FlavorFinderOutput> {
  return flavorFinderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'flavorFinderPrompt',
  input: {schema: FlavorFinderInputSchema},
  output: {schema: FlavorFinderOutputSchema},
  prompt: `You are a coffee flavor expert. A user will provide their dietary restrictions and flavor preferences, and you will recommend a coffee concentrate flavor that suits their needs.

Dietary Restrictions: {{{dietaryRestrictions}}}
Flavor Preferences: {{{flavorPreferences}}}

Consider the available coffee concentrate flavors:
- Original Liquid Coffee Concentrate: The signature, balanced coffee concentrate.
- Vanilla Liquid Coffee Concentrate: Infused with natural vanilla flavor.
- Caramel Liquid Coffee Concentrate: Sweet and rich caramel flavor.
- Mocha Liquid Coffee Concentrate: Chocolate and coffee blend.
- Hazelnut Liquid Coffee Concentrate: Nutty hazelnut flavor.
- Jasmine Liquid Coffee Concentrate: Tropical coconut flavor.
- Cinnamon Liquid Coffee Concentrate: Warm cinnamon spice flavor.
- Dark Roast Liquid Coffee Concentrate: Bold and intense coffee.
- Light Roast Liquid Coffee Concentrate: Smooth and bright coffee.
- Decaf Liquid Coffee Concentrate: Rich coffee flavor, decaffeinated.

Based on the users input, recommend one of the available flavors and explain why it is a good fit for them. If none of the flavors fit the dietary restictions, state that none are suitable. If a dietary restriction like "nut allergy" is mentioned, avoid recommending Hazelnut.
`,
});

const flavorFinderFlow = ai.defineFlow(
  {
    name: 'flavorFinderFlow',
    inputSchema: FlavorFinderInputSchema,
    outputSchema: FlavorFinderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
