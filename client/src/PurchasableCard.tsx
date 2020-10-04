import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { Purchasable } from './useGameState';

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
            {purchasable.quantity > 0 && (
              <li>
                <span className="text-uppercase font-weight-bold">
                  Quantity:
                </span>
                &nbsp;{purchasable.quantity}
              </li>
            )}
            {purchasable.outfluxPerSecond > 0 && (
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
