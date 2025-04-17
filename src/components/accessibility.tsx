
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accessibility as AccessibilityIcon } from 'lucide-react';

export const Accessibility: React.FC = () => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Accessibility</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="mb-2">
            <AccessibilityIcon className="mr-2 inline-block h-4 w-4" />
            Wheelchair-accessible car park
          </li>
          <li className="mb-2">
            <AccessibilityIcon className="mr-2 inline-block h-4 w-4" />
            Wheelchair-accessible entrance
          </li>
          <li className="mb-2">
            <AccessibilityIcon className="mr-2 inline-block h-4 w-4" />
            Wheelchair-accessible seating
          </li>
          <li className="mb-2">
            <AccessibilityIcon className="mr-2 inline-block h-4 w-4" />
            Wheelchair-accessible toilet
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
