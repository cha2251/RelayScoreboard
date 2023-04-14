import React, { useState, useEffect } from 'react';
import TotalFundraisingTable from './TotalFundraisingTable';
import NightOfFundraisingTable from './NightFundraisingTable';
import './Scoreboard.css';
import creds from './creds.json'
import Header from './Header';


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

    useEffect(() => {
      const fetchData = async () => {
        var data = await getSheetData('Highest Total');
        setTotalFundraisingData(data);
        data = await getSheetData('Highest Relay Only');
        setNightOfFundraisingData(data);
      };
      fetchData();
    }, []);

    return (
        <div className="scoreboard-container">
            <div className="header">
              <Header />
            </div>
            <div className="tables-container">
              <div className = "table">
                <TotalFundraisingTable data={totalFundraisingData} />
              </div>
              <div className = "table">
                <NightOfFundraisingTable data={nightOfFundraisingData} />
              </div>
            </div>
        </div>
    );
};

export default Scoreboard;
