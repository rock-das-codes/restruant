
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleParking as ParkingIcon, TrafficCone } from 'lucide-react';

export const Parking: React.FC = () => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Parking</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="mb-2">
            <ParkingIcon className="mr-2 inline-block h-4 w-4" />
            Free parking lot
          </li>
          <li className="mb-2">
            <TrafficCone className="mr-2 inline-block h-4 w-4" />
            Free street parking
          </li>
          <li className="mb-2">
            <ParkingIcon className="mr-2 inline-block h-4 w-4" />
            Plenty of parking
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
