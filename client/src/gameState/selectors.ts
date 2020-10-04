import { GameState, Purchasable } from './types';

// eslint-disable-next-line import/prefer-default-export
export const nextCostSelector = (state: GameState, id?: string) => {
  const found = state.purchasables.find((purchasable: Purchasable) => {
    return purchasable.id === id;
  });

  return found?.nextCost ?? 0;
};
