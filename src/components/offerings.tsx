
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wine, Beer, Martini, Coffee, Pizza, Menu, Smile, Milk, Carrot, Zap } from 'lucide-react';

export const Offerings: React.FC = () => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Offerings</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="mb-2">
            <Wine className="mr-2 inline-block h-4 w-4" />
            Alcohol
          </li>
          <li className="mb-2">
            <Beer className="mr-2 inline-block h-4 w-4" />
            Beer
          </li>
          <li className="mb-2">
            <Martini className="mr-2 inline-block h-4 w-4" />
            Cocktails
          </li>
          <li className="mb-2">
            <Coffee className="mr-2 inline-block h-4 w-4" />
            Coffee
          </li>
          <li className="mb-2">
            <Menu className="mr-2 inline-block h-4 w-4" />
            Comfort food
          </li>
          <li className="mb-2">
            <Pizza className="mr-2 inline-block h-4 w-4" />
            Food
          </li>
          <li className="mb-2">
            <Smile className="mr-2 inline-block h-4 w-4" />
            Happy-hour drinks
          </li>
          <li className="mb-2">
            <Smile className="mr-2 inline-block h-4 w-4" />
            Happy-hour food
          </li>
          <li className="mb-2">
            <Zap className="mr-2 inline-block h-4 w-4" />
            Quick bite
          </li>
          <li className="mb-2">
            <Pizza className="mr-2 inline-block h-4 w-4" />
            Small plates
          </li>
          <li className="mb-2">
            <Milk className="mr-2 inline-block h-4 w-4" />
            Spirits
          </li>
          <li className="mb-2">
            <Carrot className="mr-2 inline-block h-4 w-4" />
            Vegetarian options
          </li>
          <li className="mb-2">
            <Wine className="mr-2 inline-block h-4 w-4" />
            Wine
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
