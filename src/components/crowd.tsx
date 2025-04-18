
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, User } from 'lucide-react';

export const Crowd: React.FC = () => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Crowd</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="mb-2">
            <Users className="mr-2 inline-block h-4 w-4" />
            Groups
          </li>
          <li className="mb-2">
            <User className="mr-2 inline-block h-4 w-4" />
            Tourists
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
