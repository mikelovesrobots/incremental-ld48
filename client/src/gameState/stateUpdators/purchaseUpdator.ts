import { GameState, Purchasable } from '../types';
import incrementPurchasableQuantity from './purchaseUpdators/incrementPurchasableQuantity';
import lockPurchasableIfItNeedsIt from './purchaseUpdators/lockPurchasableIfItNeedsIt';
import spendPower from './purchaseUpdators/spendPower';
import { Payload, PayloadTransformer } from './purchaseUpdators/types';
import unlockOtherPurchasablesIfNecessary from './purchaseUpdators/unlockOtherPurchasablesIfNecessary';
import updatePurchasableOutfluxPerSecond from './purchaseUpdators/updatePurchasableOutfluxPerSecond';
import updatePurchasableNextCost from './purchaseUpdators/updatePurchasableNextCost';
import updateTotalInfluxPerSecond from './purchaseUpdators/updateTotalInfluxPerSecond';

const purchaseUpdator = (state: GameState, purchasable: Purchasable) => {
  const payload = {
    state,
    purchasable,
  };

  const fn = (lastPayload: Payload, transformer: PayloadTransformer) =>
    transformer(lastPayload);

  return [
    spendPower,
    lockPurchasableIfItNeedsIt,
    incrementPurchasableQuantity,
    updatePurchasableOutfluxPerSecond,
    updatePurchasableNextCost,
    unlockOtherPurchasablesIfNecessary,
    updateTotalInfluxPerSecond,
  ].reduce(fn, payload).state;
};

export default purchaseUpdator;
