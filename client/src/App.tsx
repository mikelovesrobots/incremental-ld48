import React, { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/esm/Container';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import Navbar from 'react-bootstrap/esm/Navbar';
import Card from 'react-bootstrap/esm/Card';
import CardColumns from 'react-bootstrap/esm/CardColumns';
import Button from 'react-bootstrap/esm/Button';
import PurchasableCard from './PurchasableCard';
import useGameState, { Purchasable } from './useGameState';

const initialGameState = {
  power: 100,
  purchasables: [
    {
      id: 'zombie',
      name: 'Zombie',
      description: 'A speechless revenant.',
      purchased: true,
      quantity: 1,
      outfluxPerSecond: 50,
      ctaText: 'Raise a Zombie',
      nextCost: 50,
    },
    {
      id: 'library',
      name: 'Evil Library',
      description:
        'Knowledge is dangerous. The people who control that knowledge are even more dangerous.',
      purchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      ctaText: 'Assemble a Library',
      nextCost: 500,
    },
    {
      id: 'dungeon',
      name: 'Dungeons',
      description: 'A quiet place to do dark business.',
      purchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      ctaText: 'Craft a Dungeon',
      nextCost: 1000,
    },
    {
      id: 'city',
      name: 'City of the Dead',
      description: 'Where once was life and movement, all is dark and waiting.',
      purchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      ctaText: 'Convert a city',
      nextCost: 5000,
    },
    {
      id: 'army',
      name: 'Armies of the Dead',
      description: 'A wall of undead as far as the eye can see.',
      purchased: false,
      quantity: 0,
      outfluxPerSecond: 0,
      ctaText: 'Raise an Army',
      nextCost: 10000,
    },
  ],
};

const App: React.FunctionComponent = () => {
  const [gameState, dispatch] = useGameState(initialGameState);

  const onPurchase = (purchasable: Purchasable) => {
    dispatch({ type: 'purchase', id: purchasable.id });
  };

  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Infinitely Worse - A Lich Adventure</h1>
      </Jumbotron>
      <Navbar variant="dark" bg="info" sticky="top">
        <Navbar.Text className="pr-4">
          <span className="text-uppercase font-weight-bold">Power:</span> ♅
          {gameState.power}
        </Navbar.Text>
        <Navbar.Text>
          <span className="text-uppercase font-weight-bold">Influx:</span>{' '}
          ♅100/s
        </Navbar.Text>
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
