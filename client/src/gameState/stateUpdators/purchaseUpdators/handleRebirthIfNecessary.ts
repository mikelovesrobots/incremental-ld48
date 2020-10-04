import { Payload, PayloadTransformer } from './types';
import { updateStateInPayload } from './utils';

const handleRebirthIfNecessary: PayloadTransformer = (payload: Payload) => {
  if (payload.purchasable.id !== 'rebirth') {
    return payload;
  }

  return updateStateInPayload(payload, (state) => ({
    power: 5,
    powerRebirthMultiplier: state.powerRebirthMultiplier * 2,
    influxPerSecond: 0,
    purchasables: state.purchasables.map((p, index) => ({
      ...p,
      isUnlocked: index === 0,
      isPurchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      nextCost: p.baseCost,
    })),
  }));
};

export default handleRebirthIfNecessary;
