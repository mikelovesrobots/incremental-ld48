import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { Purchasable, PurchasableType } from './gameState/types';

interface PurchasableCardProps {
  purchasable: Purchasable;
  onPurchase: (purchasable: Purchasable) => void;
  disableButton?: boolean;
}

const PurchasableCard: React.FunctionComponent<PurchasableCardProps> = ({
  purchasable,
  onPurchase,
  disableButton,
}) => {
  const buttonColor =
    purchasable.type === PurchasableType.Generator ? 'success' : 'info';

  return (
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
                  &nbsp;♅+{Math.floor(purchasable.outfluxPerSecond)}/s
                </li>
              )}
            </ul>
          </Card.Text>
        )}
        <Button
          variant={disableButton ? 'dark' : buttonColor}
          onClick={() => onPurchase(purchasable)}
          disabled={disableButton}
        >
          {purchasable.ctaText}: ♅{Math.floor(purchasable.nextCost)}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PurchasableCard;
