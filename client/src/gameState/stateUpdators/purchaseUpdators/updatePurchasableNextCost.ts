import { Payload, PayloadTransformer } from './types';
import { updatePurchasableInPayload } from './utils';

const updatePurchasableNextCost: PayloadTransformer = (payload: Payload) =>
  updatePurchasableInPayload(payload, (purchasable) => ({
    nextCost:
      purchasable.baseCost *
      purchasable.costCoefficient ** purchasable.quantity,
  }));

export default updatePurchasableNextCost;
