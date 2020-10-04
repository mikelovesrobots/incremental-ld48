import { Payload, PayloadTransformer } from './types';
import { updatePurchasableInPayload } from './utils';

const incrementPurchasableQuantity: PayloadTransformer = (payload: Payload) => {
  return updatePurchasableInPayload(payload, (purchasable) => ({
    isPurchased: true,
    quantity: purchasable.quantity + 1,
  }));
};

export default incrementPurchasableQuantity;
