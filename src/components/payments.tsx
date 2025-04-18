
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, IdCard as DebitCard, Nfc } from 'lucide-react';

export const Payments: React.FC = () => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Payments</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="mb-2">
            <CreditCard className="mr-2 inline-block h-4 w-4" />
            Credit cards
          </li>
          <li className="mb-2">
            <DebitCard className="mr-2 inline-block h-4 w-4" />
            Debit cards
          </li>
          <li className="mb-2">
            <Nfc className="mr-2 inline-block h-4 w-4" />
            NFC mobile payments
          </li>
           <li className="mb-2">
            <CreditCard className="mr-2 inline-block h-4 w-4" />
            Credit cards
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
