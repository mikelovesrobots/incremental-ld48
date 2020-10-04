import { nextCostSelector } from './selectors';
import { GameState, GameStateAction } from './types';

export const updateStateForPurchase = (
  state: GameState,
  action: GameStateAction
) => {
  const purchasables = state.purchasables.map((purchasable) => ({
    ...purchasable,
    purchased: true,
    quantity: purchasable.quantity + (purchasable.id === action.id ? 1 : 0),
    outfluxPerSecond:
      purchasable.outfluxPerSecond + (purchasable.id === action.id ? 1 : 0),
  }));

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
