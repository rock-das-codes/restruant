
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  Bath as Restroom } from 'lucide-react';
import { Icons } from '@/components/icons';

export const Amenities: React.FC = () => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Amenities</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="mb-2">
            <Icons.bar className="mr-2 inline-block h-4 w-4" />
            Bar on site
          </li>
          <li className="mb-2">
            <Restroom className="mr-2 inline-block h-4 w-4" />
            Restroom
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

