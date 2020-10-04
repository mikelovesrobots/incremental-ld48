import { PurchasableType } from './types';

const initialGameState = {
  power: 5,
  powerRebirthMultiplier: 5000,
  isGameOver: false,
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
      baseCost: 1,
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
      baseCost: 10000,
      costCoefficient: 0,
      baseProductivityPerSecond: 0,
    },
    {
      id: 'end1',
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
      nextCost: 1000000,
      baseCost: 1000000,
      costCoefficient: 0,
      baseProductivityPerSecond: 0,
    },
    {
      id: 'end2',
      type: PurchasableType.Oneshot,
      name: 'Still the Wind',
      description:
        'With the humans gone, it is time to bring upon the land a great calm.',
      isUnlocked: false,
      unlockConditions: {
        purchasableId: 'end1',
        quantity: 1,
      },
      isPurchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      ctaText: 'Rebuke the Wind',
      nextCost: 0,
      baseCost: 0,
      costCoefficient: 0,
      baseProductivityPerSecond: 0,
    },
    {
      id: 'end3',
      type: PurchasableType.Oneshot,
      name: 'Dry the Oceans',
      description:
        'And as the sky stills, it is time for the sea creatures and the crashing of the waves to cease.',
      isUnlocked: false,
      unlockConditions: {
        purchasableId: 'end2',
        quantity: 1,
      },
      isPurchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      ctaText: 'Rebuke the Oceans',
      nextCost: 0,
      baseCost: 0,
      costCoefficient: 0,
      baseProductivityPerSecond: 0,
    },
    {
      id: 'end4',
      type: PurchasableType.Oneshot,
      name: 'Reduce the Land to Ash',
      description:
        'And as the oceans lie empty and cratered, it is time for the infinite forms of life to quiet and still.',
      isUnlocked: false,
      unlockConditions: {
        purchasableId: 'end3',
        quantity: 1,
      },
      isPurchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      ctaText: 'Rebuke the Land',
      nextCost: 0,
      baseCost: 0,
      costCoefficient: 0,
      baseProductivityPerSecond: 0,
    },
    {
      id: 'end5',
      type: PurchasableType.Oneshot,
      name: 'Extinguish the Light',
      description:
        'And with everything a cold husk, finally, let there be darkness.',
      isUnlocked: false,
      unlockConditions: {
        purchasableId: 'end4',
        quantity: 1,
      },
      isPurchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      ctaText: 'Rebuke the Light',
      nextCost: 0,
      baseCost: 0,
      costCoefficient: 0,
      baseProductivityPerSecond: 0,
    },
    {
      id: 'end6',
      type: PurchasableType.Oneshot,
      name: 'The End',
      description:
        'And in the cold silence of the void, the great work has come to an end.',
      isUnlocked: false,
      unlockConditions: {
        purchasableId: 'end5',
        quantity: 1,
      },
      isPurchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      isPurchasable: false,
      hidePurchaseButton: true,
      ctaText: '',
      nextCost: 0,
      baseCost: 0,
      costCoefficient: 0,
      baseProductivityPerSecond: 0,
    },
  ],
};

export default initialGameState;
