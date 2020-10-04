import { GameState, Purchasable } from '../../types';

export interface Payload {
  state: GameState;
  purchasable: Purchasable;
}

export type PayloadTransformer = (payload: Payload) => Payload;
