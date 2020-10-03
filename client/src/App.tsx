import React from 'react';
import './App.css';
import Container from 'react-bootstrap/esm/Container';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';

const App: React.FunctionComponent = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Infinitely Worse - A Lich Adventure</h1>
    </Jumbotron>
  </Container>
);

export default App;
