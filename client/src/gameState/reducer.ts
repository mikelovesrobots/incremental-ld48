import { GameState, GameStateAction } from './types';
import { updateStateForPurchase, updateStateForTick } from './updators';

const reducer = (state: GameState, action: GameStateAction) => {
  switch (action.type) {
    case 'purchase':
      return updateStateForPurchase(state, action);
    case 'tick':
      return updateStateForTick(state);
    default:
      throw new Error('Unexpected action');
  }
};

export default reducer;
