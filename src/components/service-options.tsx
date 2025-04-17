
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Utensils } from 'lucide-react';

export const ServiceOptions: React.FC = () => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Service Options</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="mb-2">
            <Truck className="mr-2 inline-block h-4 w-4" />
            Delivery
          </li>
          <li className="mb-2">
            <Package className="mr-2 inline-block h-4 w-4" />
            Takeaway
          </li>
          <li className="mb-2">
            <Utensils className="mr-2 inline-block h-4 w-4" />
            Dine-in
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
