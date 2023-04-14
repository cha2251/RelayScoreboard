import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Scoreboard from './Scoreboard';
import Schedule from './Schedule';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Scoreboard />} />
          <Route path="schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);