'use server';
/**
 * @fileOverview An AI agent for recommending dishes from La Gran Fiesta Mexican Restaurant.
 *
 * - recommendDish - A function that handles the dish recommendation process.
 * - RecommendDishInput - The input type for the recommendDish function.
 * - RecommendDishOutput - The return type for the recommendDish function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const RecommendDishInputSchema = z.object({
  preferences: z.string().describe('The user preferences for food, e.g., vegetarian, spicy, etc.'),
});
export type RecommendDishInput = z.infer<typeof RecommendDishInputSchema>;

const RecommendDishOutputSchema = z.object({
  dishName: z.string().describe('The name of the recommended dish.'),
  description: z.string().describe('A description of the recommended dish.'),
});
export type RecommendDishOutput = z.infer<typeof RecommendDishOutputSchema>;

const isOnMenuTool = ai.defineTool({
  name: 'isOnMenu',
  description: 'Check if a dish is on the menu.',
  inputSchema: z.object({
    dishName: z.string().describe('The name of the dish to check.'),
  }),
  outputSchema: z.boolean(),
  async run(input) {
    // TODO: Replace with actual menu lookup logic.
    // This is a mock implementation.
    const menu = ["Tacos", "Enchiladas", "Burritos", "Quesadillas", "Fajitas", "Chiles Rellenos"];
    return menu.includes(input.dishName);
  },
});

export async function recommendDish(input: RecommendDishInput): Promise<RecommendDishOutput> {
  return recommendDishFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendDishPrompt',
  input: {
    schema: z.object({
      preferences: z.string().describe('The user preferences for food, e.g., vegetarian, spicy, etc.'),
    }),
  },
  output: {
    schema: z.object({
      dishName: z.string().describe('The name of the recommended dish.'),
      description: z.string().describe('A description of the recommended dish.'),
    }),
  },
  tools: [isOnMenuTool],
  prompt: `You are a helpful AI assistant that recommends a dish from La Gran Fiesta Mexican Restaurant based on the user's preferences.

  User Preferences: {{{preferences}}}
  First determine if the dish is on the menu by calling the isOnMenu tool, and then suggest a dish with a description that matches the user's preferences.
`,
});

const recommendDishFlow = ai.defineFlow<
  typeof RecommendDishInputSchema,
  typeof RecommendDishOutputSchema
>({
  name: 'recommendDishFlow',
  inputSchema: RecommendDishInputSchema,
  outputSchema: RecommendDishOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});
