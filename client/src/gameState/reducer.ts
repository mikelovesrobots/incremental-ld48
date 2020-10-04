import purchaseUpdator from './stateUpdators/purchaseUpdator';
import tickUpdator from './stateUpdators/tickUpdator';
import { GameState, GameStateAction } from './types';

const reducer = (state: GameState, action: GameStateAction) => {
  switch (action.type) {
    case 'purchase':
      if (!action.purchasable) {
        throw new Error("expected purchasable for 'purchase' action type");
      }

      return purchaseUpdator(state, action.purchasable);
    case 'tick':
      return tickUpdator(state);
    default:
      throw new Error('Unexpected action');
  }
};

export default reducer;
