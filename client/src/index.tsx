import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import './index.css';
import 'bootswatch/dist/cyborg/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Infinitely Worse</title>
      <link
        rel="canonical"
        href="https://mikelovesrobots.github.io/incremental-ld48/"
      />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
