
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart } from 'lucide-react';

export const Atmosphere: React.FC = () => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Atmosphere</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="mb-2">
            <Users className="mr-2 inline-block h-4 w-4" />
            Casual
          </li>
          <li className="mb-2">
            <Heart className="mr-2 inline-block h-4 w-4" />
            Cozy
          </li>
          <li className="mb-2">
            <Users className="mr-2 inline-block h-4 w-4" />
            Trendy
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
