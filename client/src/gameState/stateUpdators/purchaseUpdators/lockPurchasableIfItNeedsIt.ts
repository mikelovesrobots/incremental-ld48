import { PurchasableType } from '../../types';
import { Payload, PayloadTransformer } from './types';
import { updatePurchasableInPayload } from './utils';

const lockPurchasableIfItNeedsIt: PayloadTransformer = (payload: Payload) => {
  return updatePurchasableInPayload(payload, (purchasable) => ({
    isUnlocked:
      purchasable.type === PurchasableType.Oneshot
        ? false
        : purchasable.isUnlocked,
  }));
};

export default lockPurchasableIfItNeedsIt;
