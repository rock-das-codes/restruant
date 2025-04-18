
import { recommendDish, RecommendDishInput, RecommendDishOutput } from '@/ai/flows/dish-recommendation';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse<RecommendDishOutput>> {
  const { preferences } = await req.json() as RecommendDishInput;
  const recommendation = await recommendDish({ preferences });
  return NextResponse.json(recommendation);
}
