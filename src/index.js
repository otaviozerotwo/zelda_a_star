import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMap from './components/screens/MainMap';
import DungeonOne from './components/screens/DungeonOne';
import DungeonTwo from './components/screens/DungeonTwo';
import DungeonThree from './components/screens/DungeonThree';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<MainMap />} />
      <Route path="/dungeonOne" element={<DungeonOne />} />
      <Route path="/dungeonTwo" element={<DungeonTwo />} />
      <Route path="/dungeonThree" element={<DungeonThree />} />
    </Routes>
  </Router>
);

