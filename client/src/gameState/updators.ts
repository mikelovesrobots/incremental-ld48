import { nextCostSelector, purchasableByIdSelector } from './selectors';
import { GameState, GameStateAction } from './types';

export const updateStateForPurchase = (
  state: GameState,
  action: GameStateAction
) => {
  const originalPurchasedPurchasable = purchasableByIdSelector(
    state,
    action.id ?? 'zombie'
  );

  const quantity = originalPurchasedPurchasable.quantity + 1;
  const multiplier = Math.floor(quantity / 25); // every 25 get a new one
  const outfluxPerSecond =
    originalPurchasedPurchasable.baseProductivityPerSecond *
    quantity *
    (1 + multiplier);
  const nextCost =
    originalPurchasedPurchasable.baseCost *
    originalPurchasedPurchasable.costCoefficient **
      originalPurchasedPurchasable.quantity;

  const newPurchasedPurchasable = {
    ...originalPurchasedPurchasable,
    quantity,
    outfluxPerSecond,
    nextCost,
    purchased: true,
  };

  const purchasables = state.purchasables.map((purchasable) => {
    if (purchasable.id !== action.id) {
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
    power: state.power - nextCostSelector(state, action.id),
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
