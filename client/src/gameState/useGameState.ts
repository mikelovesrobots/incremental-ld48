import React, { useReducer } from 'react';
import { useInterval } from 'beautiful-react-hooks';
import { GameState, GameStateAction } from './types';
import reducer from './reducer';

type GameStateResults = [GameState, React.Dispatch<GameStateAction>];

const useGameState = (initialGameState: GameState) => {
  const [gameState, dispatch] = useReducer(reducer, initialGameState);

  useInterval(() => {
    dispatch({ type: 'tick' });
  }, gameState.tickSpeed);

  return [gameState, dispatch] as GameStateResults;
};

export default useGameState;
