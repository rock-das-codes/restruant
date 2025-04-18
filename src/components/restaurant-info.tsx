
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock } from "lucide-react";

interface RestaurantInfoProps {
  restaurant: {
    name: string;
    address: string;
    phone: string;
    hours: string;
  };
}

export const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ restaurant }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>About Us</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span>{restaurant.address}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span>{restaurant.phone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span>{restaurant.hours}</span>
        </div>
      </CardContent>
    </Card>
  );
};
