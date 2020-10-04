import { nextCostSelector } from './selectors';
import { GameState, GameStateAction } from './types';

export const updateStateForPurchase = (
  state: GameState,
  action: GameStateAction
) => {
  const purchasables = state.purchasables.map((purchasable) => {
    if (purchasable.id !== action.id) {
      return { ...purchasable };
    }

    const quantity = purchasable.quantity + 1;
    const multiplier = Math.floor(quantity / 25); // every 25 get a new one
    const outfluxPerSecond =
      purchasable.baseProductivityPerSecond * quantity * (1 + multiplier);
    const nextCost =
      purchasable.baseCost * purchasable.costCoefficient ** quantity;
    return {
      ...purchasable,
      quantity,
      outfluxPerSecond,
      nextCost,
      purchased: true,
    };
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
