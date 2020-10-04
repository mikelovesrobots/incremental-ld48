import {
  GameState,
  GameStateAction,
  PurchasableGameStateAction,
} from './types';
import { updateStateForPurchase, updateStateForTick } from './updators';

const reducer = (state: GameState, action: GameStateAction) => {
  switch (action.type) {
    case 'purchase':
      if (!action.purchasable) {
        throw new Error("expected purchasable for 'purchase' action type");
      }

      return updateStateForPurchase(
        state,
        action as PurchasableGameStateAction
      );
    case 'tick':
      return updateStateForTick(state);
    default:
      throw new Error('Unexpected action');
  }
};

export default reducer;
