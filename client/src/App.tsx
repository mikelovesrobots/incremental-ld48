import React from 'react';
import './App.css';
import Container from 'react-bootstrap/esm/Container';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import Navbar from 'react-bootstrap/esm/Navbar';
import CardColumns from 'react-bootstrap/esm/CardColumns';
import PurchasableCard from './PurchasableCard';
import useGameState from './gameState/useGameState';
import { Purchasable } from './gameState/types';
import initialGameState from './gameState/initialGameState';

const App: React.FunctionComponent = () => {
  const [gameState, dispatch] = useGameState(initialGameState);

  const onPurchase = (purchasable: Purchasable) => {
    dispatch({ type: 'purchase', purchasable });
  };

  const unlockedPurchasables = gameState.purchasables.filter(
    (purchasable) => purchasable.isUnlocked
  );

  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Infinitely Worse - A Necromantic Adventure</h1>
      </Jumbotron>
      {gameState.isGameOver === false && (
        <Navbar variant="dark" bg="info" sticky="top">
          <Navbar.Text className="pr-4 text-white">
            <span className="text-uppercase font-weight-bold">Power:</span>{' '}
            <span className="stat">
              ♅{Math.floor(gameState.power).toLocaleString()}
            </span>
          </Navbar.Text>
          {gameState.influxPerSecond > 0 && (
            <Navbar.Text className="pr-4 text-white">
              <span className="text-uppercase font-weight-bold">Influx:</span>{' '}
              <span className="stat">
                ♅+
                {Math.floor(gameState.influxPerSecond).toLocaleString()}/s
              </span>
            </Navbar.Text>
          )}
          {gameState.powerRebirthMultiplier > 1 && (
            <Navbar.Text className="text-white">
              <span className="text-uppercase font-weight-bold">
                Multiplier:
              </span>{' '}
              <span className="stat">
                ×{gameState.powerRebirthMultiplier.toLocaleString()}
              </span>
            </Navbar.Text>
          )}
        </Navbar>
      )}
      <CardColumns className="mt-4">
        {unlockedPurchasables.map((purchasable) => (
          <PurchasableCard
            purchasable={purchasable}
            key={purchasable.id}
            onPurchase={onPurchase}
            disableButton={purchasable.nextCost > gameState.power}
          />
        ))}
      </CardColumns>
    </Container>
  );
};

export default App;
