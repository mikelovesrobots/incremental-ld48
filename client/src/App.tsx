import React from 'react';
import './App.css';
import Container from 'react-bootstrap/esm/Container';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import Navbar from 'react-bootstrap/esm/Navbar';

const App: React.FunctionComponent = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Infinitely Worse - A Lich Adventure</h1>
    </Jumbotron>
    <Navbar variant="dark" bg="info" sticky="top">
      <Navbar.Text>
        <span className="text-uppercase font-weight-bold">Power:</span> 100
      </Navbar.Text>
    </Navbar>
  </Container>
);

export default App;
