
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Moon, User } from 'lucide-react';

export const PopularFor: React.FC = () => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Popular For</CardTitle>
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
            <User className="mr-2 inline-block h-4 w-4" />
            Solo dining
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
