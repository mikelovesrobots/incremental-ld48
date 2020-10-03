import React from 'react';
import './App.css';
import Container from 'react-bootstrap/esm/Container';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import Navbar from 'react-bootstrap/esm/Navbar';
import Card from 'react-bootstrap/esm/Card';
import CardColumns from 'react-bootstrap/esm/CardColumns';
import Button from 'react-bootstrap/esm/Button';
import Spinner from 'react-bootstrap/esm/Spinner';

const App: React.FunctionComponent = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Infinitely Worse - A Lich Adventure</h1>
    </Jumbotron>
    <Navbar variant="dark" bg="info" sticky="top">
      <Navbar.Text className="pr-4">
        <span className="text-uppercase font-weight-bold">Power:</span> ♅100
      </Navbar.Text>
      <Navbar.Text>
        <span className="text-uppercase font-weight-bold">Influx:</span> ♅100/s
      </Navbar.Text>
    </Navbar>
    <CardColumns className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Zombie</Card.Title>
          <Card.Text>A speechless revenant. Provides ♅100/s</Card.Text>
          <Button variant="success">Raise a Corpse: ♅50</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Evil Library</Card.Title>
          <Card.Subtitle className="mb-2 text-dark">
            Knowledge is dangerous. The people who control that knowledge are
            even more dangerous.
          </Card.Subtitle>
          <Card.Text>
            <span className="text-uppercase font-weight-bold">Quantity:</span>
            &nbsp;1
            <br />
            <span className="text-uppercase font-weight-bold">Outflux:</span>
            &nbsp;♅100/s
          </Card.Text>
          <Button variant="success">Assemble a Library: ♅500</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Dungeon</Card.Title>
          <Card.Text>A stronghold for your evil works.</Card.Text>
          <Card.Text>Provides 100/s</Card.Text>
          <Button variant="success">Dig a Dungeon: ♅2000</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>City of the Dead</Card.Title>
          <Button variant="success">Conquer a City: ♅20000</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Army of the Dead</Card.Title>
          <Button variant="success">Raise an Army: ♅200000</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Be Reborn</Card.Title>
          <Card.Text>
            You&apos;re wearing out. You can give up all your progress and
            transfer your consciousness to a new host for an x2 multiplier
            bonus.
          </Card.Text>
          <Button variant="success">Transfer Consciousness: ♅10000</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Conquer World</Card.Title>
          <Button variant="success">End Everything: ♅20000</Button>
        </Card.Body>
      </Card>
    </CardColumns>
  </Container>
);

export default App;
