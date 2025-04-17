
import { Button } from "@/components/ui/button";
import { Map, Truck } from "lucide-react";

interface ExternalLinksProps {
  links: {
    googleMaps: string;
    deliveryApp: string;
  };
}

export const ExternalLinks: React.FC<ExternalLinksProps> = ({ links }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <Button asChild>
        <a href={links.googleMaps} target="_blank" rel="noopener noreferrer" className="flex items-center">
          <Map className="mr-2 h-4 w-4" /> View on Google Maps
        </a>
      </Button>
      <Button asChild>
        <a href={links.deliveryApp} target="_blank" rel="noopener noreferrer" className="flex items-center">
          <Truck className="mr-2 h-4 w-4" /> Order Delivery
        </a>
      </Button>
    </div>
  );
};
