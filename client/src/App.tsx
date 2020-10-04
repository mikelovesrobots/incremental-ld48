import React from 'react';
import './App.css';
import Container from 'react-bootstrap/esm/Container';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import Navbar from 'react-bootstrap/esm/Navbar';
import Card from 'react-bootstrap/esm/Card';
import CardColumns from 'react-bootstrap/esm/CardColumns';
import Button from 'react-bootstrap/esm/Button';
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
      <Navbar variant="dark" bg="info" sticky="top">
        <Navbar.Text className="pr-4">
          <span className="text-uppercase font-weight-bold">Power:</span> ♅
          {Math.floor(gameState.power)}
        </Navbar.Text>
        {gameState.influxPerSecond > 0 && (
          <Navbar.Text>
            <span className="text-uppercase font-weight-bold">Influx:</span> ♅+
            {Math.floor(gameState.influxPerSecond)}/s
          </Navbar.Text>
        )}
      </Navbar>
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
