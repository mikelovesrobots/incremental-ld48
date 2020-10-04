import { GameState, GameStateAction } from './types';
import { nextCostSelector } from './selectors';

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
        power: state.power + (state.influxPerSecond * state.tickSpeed) / 1000,
      };
    default:
      throw new Error('Unexpected action');
  }
};

export default reducer;
