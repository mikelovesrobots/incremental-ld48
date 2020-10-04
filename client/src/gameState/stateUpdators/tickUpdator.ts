import { GameState } from '../types';

const tickUpdator = (state: GameState) => ({
  ...state,
  power: state.power + (state.influxPerSecond * state.tickSpeed) / 1000,
});

export default tickUpdator;
