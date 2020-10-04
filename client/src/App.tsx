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
    dispatch({ type: 'purchase', id: purchasable.id });
  };

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
            <span className="text-uppercase font-weight-bold">Influx:</span> +♅
            {Math.floor(gameState.influxPerSecond)}/s
          </Navbar.Text>
        )}
      </Navbar>
      <CardColumns className="mt-4">
        {gameState.purchasables.map((purchasable) => (
          <PurchasableCard
            purchasable={purchasable}
            key={purchasable.id}
            onPurchase={onPurchase}
            disableButton={purchasable.nextCost > gameState.power}
          />
        ))}
        <Card>
          <Card.Body>
            <Card.Title>Be Reborn</Card.Title>
            <Card.Text>
              Your vessel is wearing out. You can give up all your progress and
              transfer your consciousness to a new host for an ×2 multiplier
              bonus.
            </Card.Text>
            <Button variant="info">Transfer Consciousness: ♅10000</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Conquer World</Card.Title>
            <Card.Text>
              Eventually, all that is left is to snuff out the flame.
            </Card.Text>
            <Button variant="info">Crush Everything: ♅20000</Button>
          </Card.Body>
        </Card>
      </CardColumns>
    </Container>
  );
};

export default App;
