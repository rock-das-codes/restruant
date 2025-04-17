
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightning, Beer, Cocktail, Trophy } from 'lucide-react';

export const Highlights: React.FC = () => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Highlights</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="mb-2">
            <Lightning className="mr-2 inline-block h-4 w-4" />
            Fast service
          </li>
          <li className="mb-2">
            <Beer className="mr-2 inline-block h-4 w-4" />
            Great beer selection
          </li>
          <li className="mb-2">
            <Cocktail className="mr-2 inline-block h-4 w-4" />
            Great cocktails
          </li>
          <li className="mb-2">
            <Trophy className="mr-2 inline-block h-4 w-4" />
            Sport
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
