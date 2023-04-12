import React, { useState, useEffect } from 'react';
import TotalFundraisingTable from './TotalFundraisingTable';
import NightOfFundraisingTable from './NightFundraisingTable';
import './Scoreboard.css';

const Scoreboard = () => {
  const [totalFundraisingData, setTotalFundraisingData] = useState([]);
  const [nightOfFundraisingData, setNightOfFundraisingData] = useState([]);

  const testData = [
    { name: 'Team A', total: 1000 },
    { name: 'Team B', total: 2500 },
    { name: 'Team C', total: 500 },
    { name: 'Team D', total: 1750 },
  ];
  

  useEffect(() => {
    // code to fetch data and set state
  }, []);

  return (
    <div className="scoreboard-container">
      <h1 className="event-title">Relay for Life</h1>
      <div className="tables-container">
        <TotalFundraisingTable data={testData} />
        <NightOfFundraisingTable data={testData} />
      </div>
    </div>
  );
};

export default Scoreboard;
