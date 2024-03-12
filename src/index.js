import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Board from './Board';
import './Board.css'

const cellMatrix = Array.from({ length: 42 }, () =>
  Array.from({ length: 42 }, () => 0)
);

const colorMatrix = [
  ['red', 'blue', 'green', 'yellow', 'purple'],
  ['blue', 'green', 'yellow', 'purple', 'red'],
  ['green', 'yellow', 'purple', 'red', 'blue'],
  ['yellow', 'purple', 'red', 'blue', 'green'],
  ['purple', 'red', 'blue', 'green', 'yellow']
];

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Board matrix={cellMatrix} colorMatrix={colorMatrix} />
  </StrictMode>
);

