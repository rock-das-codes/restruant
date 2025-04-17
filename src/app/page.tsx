
import { RestaurantInfo } from '@/components/restaurant-info';
import { ImageGallery } from '@/components/image-gallery';
import { AIDishRecommendation } from '@/components/ai-dish-recommendation';
import { ExternalLinks } from '@/components/external-links';
import { OnlineFoodOrdering } from '@/components/online-food-ordering';
import { MenuDisplay } from '@/components/menu-display';
import { Accessibility } from '@/components/accessibility';
import { ServiceOptions } from '@/components/service-options';
import { Highlights } from '@/components/highlights';
import { PopularFor } from '@/components/popular-for';
import { Offerings } from '@/components/offerings';
import { DiningOptions } from '@/components/dining-options';
import { Amenities } from '@/components/amenities';
import { Atmosphere } from '@/components/atmosphere';
import { Crowd } from '@/components/crowd';
import { Payments } from '@/components/payments';
import { Children } from '@/components/children';
import { Parking } from '@/components/parking';

export default function Home() {
  const restaurantDetails = {
    name: "La Gran Fiesta Mexican Restaurant",
    address: "123 Main St, Anytown USA",
    phone: "555-123-4567",
    hours: "11:00 AM - 10:00 PM Daily",
  };

  const images = [
    "https://picsum.photos/id/10/800/600",
    "https://picsum.photos/id/20/800/600",
    "https://picsum.photos/id/30/800/600",
  ];

  const menuItems = [
    { name: "Tacos", description: "Delicious tacos with your choice of meat.", price: 8.99 },
    { name: "Enchiladas", description: "Savory enchiladas with cheese and sauce.", price: 9.99 },
    { name: "Burritos", description: "Giant burritos stuffed with goodness.", price: 10.99 },
  ];

  const externalLinks = {
    googleMaps: "https://maps.google.com",
    deliveryApp: "https://www.doordash.com",
  };

  const aiEndpoint = "/api/ai/recommendDish";

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-primary">La Gran Fiesta Mexican Restaurant</h1>

      <RestaurantInfo restaurant={restaurantDetails} />

      <ImageGallery images={images} />

      <MenuDisplay menuItems={menuItems} />

      <AIDishRecommendation aiEndpoint={aiEndpoint} />

      <OnlineFoodOrdering />

      <ExternalLinks links={externalLinks} />

      <Accessibility />

      <ServiceOptions />

      <Highlights />

      <PopularFor />

      <Offerings />

      <DiningOptions />

      <Amenities />

      <Atmosphere />

      <Crowd />

      <Payments />

      <Children />

      <Parking />
    </div>
  );
}
