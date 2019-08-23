import React, { Fragment } from 'react';

// Para ignorar warnings
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

import Routes from './routes';

// Quando utilizar estado, componentDidMount e etc -> Usar classe
// Para os outros casos -> Usar função

export default function App() {
  return (
    <Routes />
  );
}