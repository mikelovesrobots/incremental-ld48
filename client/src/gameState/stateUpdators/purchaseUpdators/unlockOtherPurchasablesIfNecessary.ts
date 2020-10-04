import { Payload, PayloadTransformer } from './types';
import { updateOtherPurchasablesInPayload } from './utils';

const unlockOtherPurchasablesIfNecessary: PayloadTransformer = (
  payload: Payload
) =>
  updateOtherPurchasablesInPayload(payload, (purchasable) => {
    if (purchasable.isUnlocked || !purchasable.unlockConditions) {
      return {};
    }

    return {
      isUnlocked:
        purchasable.unlockConditions.purchasableId === payload.purchasable.id &&
        payload.purchasable.quantity + 1 >=
          purchasable.unlockConditions.quantity,
    };
  });

export default unlockOtherPurchasablesIfNecessary;
