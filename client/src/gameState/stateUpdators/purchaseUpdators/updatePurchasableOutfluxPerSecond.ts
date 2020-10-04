import { Payload, PayloadTransformer } from './types';
import { updatePurchasableInPayload } from './utils';

const updatePurchasableOutfluxPerSecond: PayloadTransformer = (
  payload: Payload
) =>
  updatePurchasableInPayload(payload, (purchasable) => {
    const { quantity } = purchasable;
    const multiplier = Math.floor(quantity / 25); // every 25 get a new one
    const outfluxPerSecond =
      purchasable.baseProductivityPerSecond * quantity * (1 + multiplier);

    return {
      outfluxPerSecond,
    };
  });

export default updatePurchasableOutfluxPerSecond;
