import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MainMap from './components/screens/MainMap';
import DungeonOne from './components/screens/DungeonOne';
import DungeonTwo from './components/screens/DungeonTwo';
import DungeonThree from './components/screens/DungeonThree';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <MainMap />
  </StrictMode>
);

