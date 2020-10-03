import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';

export interface Purchasable {
  id: string;
  name: string;
  description: string;
  purchased: boolean;
  quantity: number;
  outfluxPerSecond: number;
  ctaText: string;
  nextCost: number;
}

interface PurchasableCardProps {
  purchasable: Purchasable;
  onPurchase: (purchasable: Purchasable) => void;
  disableButton?: boolean;
}

const PurchasableCard: React.FunctionComponent<PurchasableCardProps> = ({
  purchasable,
  onPurchase,
  disableButton,
}) => (
  <Card>
    <Card.Body>
      <Card.Title>{purchasable.name}</Card.Title>
      <Card.Subtitle
        className={`${purchasable.purchased ? 'mb-2' : 'mb-4'} text-dark`}
      >
        {purchasable.description}
      </Card.Subtitle>
      {purchasable.purchased && (
        <Card.Text>
          <ul>
            {purchasable.quantity && (
              <li>
                <span className="text-uppercase font-weight-bold">
                  Quantity:
                </span>
                &nbsp;{purchasable.quantity}
              </li>
            )}
            {purchasable.outfluxPerSecond && (
              <li>
                <span className="text-uppercase font-weight-bold">
                  Outflux:
                </span>
                &nbsp;♅{purchasable.outfluxPerSecond}/s
              </li>
            )}
          </ul>
        </Card.Text>
      )}
      <Button
        variant="success"
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        onClick={() => onPurchase(purchasable)}
        disabled={disableButton}
      >
        {purchasable.ctaText}: ♅{purchasable.nextCost}
      </Button>
    </Card.Body>
  </Card>
);

export default PurchasableCard;
