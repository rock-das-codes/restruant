
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Chair } from 'lucide-react';

export const Children: React.FC = () => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Children</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="mb-2">
            <Baby className="mr-2 inline-block h-4 w-4" />
            Good for kids
          </li>
          <li className="mb-2">
            <Chair className="mr-2 inline-block h-4 w-4" />
            High chairs
          </li>
          <li className="mb-2">
            <Baby className="mr-2 inline-block h-4 w-4" />
            Kids' menu
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
