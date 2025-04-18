
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MenuItem {
  name: string;
  description: string;
  price: number;
}

interface MenuDisplayProps {
  menuItems: MenuItem[];
}

export const MenuDisplay: React.FC<MenuDisplayProps> = ({ menuItems }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Menu</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-2">
              <div className="font-bold">{item.name}</div>
              <div className="text-sm text-muted-foreground">{item.description}</div>
              <div className="text-primary">${item.price.toFixed(2)}</div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
