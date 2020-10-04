import { PurchasableType } from './types';

const initialGameState = {
  power: 5,
  tickSpeed: 100,
  influxPerSecond: 0,
  purchasables: [
    {
      id: 'emerge',
      type: PurchasableType.Oneshot,
      name: 'Awaken',
      description:
        'Emerge from your unmarked grave and wreck your vengence upon the living.',
      isUnlocked: true,
      isPurchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      ctaText: 'Emerge',
      nextCost: 1,
      baseCost: 0,
      costCoefficient: 0,
      baseProductivityPerSecond: 0,
    },
    {
      id: 'zombie',
      type: PurchasableType.Generator,
      name: 'Zombie',
      description: 'A speechless revenant.',
      isUnlocked: false,
      unlockConditions: {
        purchasableId: 'emerge',
        quantity: 1,
      },
      isPurchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      ctaText: 'Raise a Zombie',
      nextCost: 3,
      baseCost: 3.738,
      costCoefficient: 1.07,
      baseProductivityPerSecond: 1.67,
    },
    {
      id: 'library',
      type: PurchasableType.Generator,
      name: 'Evil Library',
      description:
        'Knowledge is dangerous. The people who control that knowledge are even more dangerous.',
      isUnlocked: false,
      unlockConditions: {
        purchasableId: 'zombie',
        quantity: 25,
      },
      isPurchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      ctaText: 'Assemble a Library',
      nextCost: 60,
      baseCost: 60,
      costCoefficient: 1.15,
      baseProductivityPerSecond: 20,
    },
    {
      id: 'dungeon',
      type: PurchasableType.Generator,
      name: 'Dungeons',
      description: 'A quiet place to do dark business.',
      isUnlocked: false,
      unlockConditions: {
        purchasableId: 'library',
        quantity: 25,
      },
      isPurchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      ctaText: 'Craft a Dungeon',
      nextCost: 720,
      baseCost: 720,
      costCoefficient: 1.14,
      baseProductivityPerSecond: 90,
    },
    {
      id: 'city',
      type: PurchasableType.Generator,
      name: 'City of the Dead',
      description: 'Where once was life and movement, all is dark and waiting.',
      isUnlocked: false,
      unlockConditions: {
        purchasableId: 'dungeon',
        quantity: 25,
      },
      isPurchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      ctaText: 'Convert a city',
      nextCost: 8640,
      baseCost: 8640,
      costCoefficient: 1.13,
      baseProductivityPerSecond: 360,
    },
    {
      id: 'army',
      type: PurchasableType.Generator,
      name: 'Armies of the Dead',
      description: 'A wall of undead as far as the eye can see.',
      isUnlocked: false,
      unlockConditions: {
        purchasableId: 'city',
        quantity: 25,
      },
      isPurchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      ctaText: 'Raise an Army',
      nextCost: 103680,
      baseCost: 103680,
      costCoefficient: 1.12,
      baseProductivityPerSecond: 2160,
    },
    {
      id: 'rebirth',
      type: PurchasableType.Oneshot,
      name: 'Be Reborn',
      description:
        'Your vessel is wearing out. You can give up all your progress and transfer your consciousness to a new host for an ×2 multiplier bonus.',
      isUnlocked: false,
      unlockConditions: {
        purchasableId: 'library',
        quantity: 25,
      },
      isPurchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      ctaText: 'Transfer Consciousness',
      nextCost: 10000,
      baseCost: 0,
      costCoefficient: 0,
      baseProductivityPerSecond: 0,
    },
    {
      id: 'conquer',
      type: PurchasableType.Oneshot,
      name: 'Conquer World',
      description: 'Eventually, all that is left is to snuff out the flame.',
      isUnlocked: false,
      unlockConditions: {
        purchasableId: 'army',
        quantity: 25,
      },
      isPurchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      ctaText: 'Crush Everything',
      nextCost: 100000,
      baseCost: 0,
      costCoefficient: 0,
      baseProductivityPerSecond: 0,
    },
  ],
};

export default initialGameState;
