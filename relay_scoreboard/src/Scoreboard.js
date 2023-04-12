import React, { useState, useEffect } from 'react';
import TotalFundraisingTable from './TotalFundraisingTable';
import NightOfFundraisingTable from './NightFundraisingTable';
import './Scoreboard.css';
import creds from './creds.json'


const Scoreboard = () => {
    const [totalFundraisingData, setTotalFundraisingData] = useState([]);
    const [nightOfFundraisingData, setNightOfFundraisingData] = useState([]);
    const SHEET_ID = creds.sheet_id;
    const API_KEY = creds.api_key;


    async function getSheetData(tab_id) {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${tab_id}!A1:B10?key=${API_KEY}`;
        const response = await fetch(url);
        const json = await response.json();
        const rows = json.values;
        const data = [];
        for (let i = 1; i < rows.length; i++) {
          const [team, amount] = rows[i];
          data.push({ team, amount });
        }
        return data;
}

    const testData = [
        { name: 'Team A', total: 1000 },
        { name: 'Team B', total: 2500 },
        { name: 'Team C', total: 500 },
        { name: 'Team D', total: 1750 },
    ];

    useEffect(() => {
      const fetchData = async () => {
        var data = await getSheetData('Highest Total');
        setTotalFundraisingData(data);
        console.log(data)
        var data = await getSheetData('Highest Relay Only');
        setNightOfFundraisingData(data);
      };
      fetchData();
    }, []);

    return (
        <div className="scoreboard-container">
            <h1 className="event-title">Relay for Life</h1>
            <div className="tables-container">
                <TotalFundraisingTable data={totalFundraisingData} />
                <NightOfFundraisingTable data={nightOfFundraisingData} />
            </div>
        </div>
    );
};

export default Scoreboard;
