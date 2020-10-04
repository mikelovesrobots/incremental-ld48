import { GameState, PurchasableGameStateAction } from './types';

export const updateStateForPurchase = (
  state: GameState,
  action: PurchasableGameStateAction
) => {
  const quantity = action.purchasable.quantity + 1;
  const multiplier = Math.floor(quantity / 25); // every 25 get a new one
  const outfluxPerSecond =
    action.purchasable.baseProductivityPerSecond * quantity * (1 + multiplier);
  const nextCost =
    action.purchasable.baseCost *
    action.purchasable.costCoefficient ** action.purchasable.quantity;

  const newPurchasedPurchasable = {
    ...action.purchasable,
    quantity,
    outfluxPerSecond,
    nextCost,
    purchased: true,
  };

  const purchasables = state.purchasables.map((purchasable) => {
    if (purchasable.id !== action.purchasable?.id) {
      const isUnlocked =
        purchasable.isUnlocked ||
        (purchasable.unlockConditions &&
          newPurchasedPurchasable.id ===
            purchasable.unlockConditions.purchasableId &&
          newPurchasedPurchasable.quantity >=
            purchasable.unlockConditions.quantity);
      return {
        ...purchasable,
        isUnlocked,
      };
    }

    return newPurchasedPurchasable;
  });

  return {
    ...state,
    power: state.power - action.purchasable.nextCost,
    influxPerSecond: purchasables
      .map((purchasable) => purchasable.outfluxPerSecond)
      .reduce((accumulator, next) => accumulator + next),
    purchasables,
  } as GameState;
};

export const updateStateForTick = (state: GameState) => ({
  ...state,
  power: state.power + (state.influxPerSecond * state.tickSpeed) / 1000,
});
