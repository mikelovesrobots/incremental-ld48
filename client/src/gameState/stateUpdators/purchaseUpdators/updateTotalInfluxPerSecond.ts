import { Payload, PayloadTransformer } from './types';
import { updateStateInPayload } from './utils';

const updateTotalInfluxPerSecond: PayloadTransformer = (payload: Payload) => {
  const sumReducer = (accumulator: number, next: number) => accumulator + next;

  return updateStateInPayload(payload, (state) => ({
    influxPerSecond: state.purchasables
      .map((purchasable) => purchasable.outfluxPerSecond)
      .reduce(sumReducer),
  }));
};

export default updateTotalInfluxPerSecond;
