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
    rebirthCount: state.rebirthCount + 1,
    purchasables: state.purchasables.map((p, index) => ({
      ...p,
      isUnlocked: index === 0,
      isPurchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      baseCost: p.baseCost * p.baseCostRebirthMultiplier,
      nextCost: p.baseCost * p.baseCostRebirthMultiplier,
    })),
  }));
};

export default handleRebirthIfNecessary;
