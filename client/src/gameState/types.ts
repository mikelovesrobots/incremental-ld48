export interface Purchasable {
  id: string;
  name: string;
  description: string;
  purchased: boolean;
  quantity: number;
  outfluxPerSecond: number;
  ctaText: string;
  nextCost: number;
  baseCost: number;
  costCoefficient: number;
  baseProductivityPerSecond: number;
}

export interface GameState {
  power: number;
  tickSpeed: number;
  influxPerSecond: number;
  purchasables: Purchasable[];
}

export type GameStateAction = {
  type: string;
  id?: string;
};
