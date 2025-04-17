
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Moon, Cake, Seating } from 'lucide-react';

export const DiningOptions: React.FC = () => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Dining Options</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="mb-2">
            <Sun className="mr-2 inline-block h-4 w-4" />
            Lunch
          </li>
          <li className="mb-2">
            <Moon className="mr-2 inline-block h-4 w-4" />
            Dinner
          </li>
          <li className="mb-2">
            <Cake className="mr-2 inline-block h-4 w-4" />
            Dessert
          </li>
          <li className="mb-2">
            <Seating className="mr-2 inline-block h-4 w-4" />
            Seating
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
