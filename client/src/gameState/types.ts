export enum PurchasableType {
  Oneshot,
  Generator,
}

export interface UnlockConditions {
  purchasableId: string;
  quantity: number;
}

export interface Purchasable {
  id: string;
  name: string;
  type: PurchasableType;
  description: string;
  isUnlocked: boolean;
  unlockConditions?: UnlockConditions;
  isPurchased: boolean;
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

export interface GameStateAction {
  type: string;
  purchasable?: Purchasable;
}

export interface PurchasableGameStateAction extends GameStateAction {
  purchasable: Purchasable;
}
