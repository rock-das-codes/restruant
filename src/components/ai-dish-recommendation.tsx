
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface AIDishRecommendationProps {
  aiEndpoint: string;
}

export const AIDishRecommendation: React.FC<AIDishRecommendationProps> = ({ aiEndpoint }) => {
  const [preferences, setPreferences] = useState("");
  const [recommendation, setRecommendation] = useState<{ dishName: string; description: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRecommendation = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(aiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ preferences }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setRecommendation(data);
    } catch (error) {
      console.error("Could not get dish recommendation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>AI Dish Recommendation</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Textarea
          placeholder="Enter your food preferences (e.g., vegetarian, spicy)"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        />
        <Button onClick={handleRecommendation} disabled={isLoading}>
          {isLoading ? "Loading..." : "Get Recommendation"}
        </Button>

        {recommendation && (
          <div>
            <div className="font-bold">{recommendation.dishName}</div>
            <div className="text-sm text-muted-foreground">{recommendation.description}</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
