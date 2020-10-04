import { Payload, PayloadTransformer } from './types';
import { updateStateInPayload } from './utils';

const handleEndIfNecessary: PayloadTransformer = (payload: Payload) => {
  if (payload.purchasable.id !== 'end1') {
    return payload;
  }

  return updateStateInPayload(payload, (state) => ({
    isGameOver: true,
    purchasables: state.purchasables.map((p) => ({
      ...p,
      isUnlocked: false,
    })),
  }));
};

export default handleEndIfNecessary;
