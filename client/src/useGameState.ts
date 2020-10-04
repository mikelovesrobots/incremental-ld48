import { useReducer } from 'react';

export interface Purchasable {
  id: string;
  name: string;
  description: string;
  purchased: boolean;
  quantity: number;
  outfluxPerSecond: number;
  ctaText: string;
  nextCost: number;
}

type GameStateAction = {
  type: string;
  id?: string;
};

export interface GameState {
  power: number;
  tickSpeed: number;
  purchasables: Purchasable[];
}

const nextCostSelector = (state: GameState, id?: string) => {
  const found = state.purchasables.find((purchasable: Purchasable) => {
    return purchasable.id === id;
  });

  if (found) {
    return found.nextCost;
  }
  return 0;
};

const totalOutfluxSelector = (state: GameState) => {
  return state.purchasables
    .map((next) => next.outfluxPerSecond)
    .reduce((accumulator, next) => accumulator + next);
};

const reducer = (state: GameState, action: GameStateAction) => {
  switch (action.type) {
    case 'purchase':
      return {
        ...state,
        power: state.power - nextCostSelector(state, action.id),
        purchasables: state.purchasables.map((purchasable) => ({
          ...purchasable,
          quantity:
            purchasable.id === action.id
              ? purchasable.quantity + 1
              : purchasable,
        })),
      } as GameState;
    case 'tick':
      return {
        ...state,
        power:
          state.power + (totalOutfluxSelector(state) * state.tickSpeed) / 1000,
      };
    default:
      throw new Error('Unexpected action');
  }
};

const useGameState = (initialGameState: GameState) => {
  return useReducer(reducer, initialGameState);
};

export default useGameState;
