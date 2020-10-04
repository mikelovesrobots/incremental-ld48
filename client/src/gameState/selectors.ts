import { GameState, Purchasable } from './types';

export const purchasableByIdSelector = (state: GameState, id: string) => {
  const found = state.purchasables.find((purchasable: Purchasable) => {
    return purchasable.id === id;
  });

  if (!found) {
    throw new Error(`Unable to find id in purchasables: ${id}`);
  }

  return found;
};

export const nextCostSelector = (state: GameState, id?: string) => {
  return purchasableByIdSelector(state, id ?? 'zombie').nextCost;
};
