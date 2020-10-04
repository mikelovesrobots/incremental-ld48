import { GameState, Purchasable } from '../../types';
import { Payload } from './types';

// eslint-disable-next-line import/prefer-default-export
export const updateStateInPayload = (
  payload: Payload,
  updator: (state: GameState) => Partial<GameState>
) => ({
  ...payload,
  state: {
    ...payload.state,
    ...updator(payload.state),
  },
});

export const updatePurchasableInPayload = (
  payload: Payload,
  updator: (purchasable: Purchasable) => Partial<Purchasable>
) =>
  updateStateInPayload(payload, (state) => ({
    ...state,
    purchasables: state.purchasables.map((p) =>
      p.id === payload.purchasable.id ? { ...p, ...updator(p) } : p
    ),
  }));

export const updateOtherPurchasablesInPayload = (
  payload: Payload,
  updator: (purchasable: Purchasable) => Partial<Purchasable>
) =>
  updateStateInPayload(payload, (state) => ({
    ...state,
    purchasables: state.purchasables.map((p) =>
      p.id !== payload.purchasable.id ? { ...p, ...updator(p) } : p
    ),
  }));
