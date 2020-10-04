import { Payload, PayloadTransformer } from './types';
import { updateStateInPayload } from './utils';

const spendPower: PayloadTransformer = (payload: Payload) => {
  const { purchasable } = payload;

  return updateStateInPayload(payload, (state) => ({
    ...state,
    power: state.power - purchasable.nextCost,
  }));
};

export default spendPower;
