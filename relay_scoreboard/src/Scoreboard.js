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
    const TOTAL_COL = 'D'
    const NIGHT_COL = 'C'


    async function getSheetData(tab_id, col_id) {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${tab_id}!A1:${col_id}100?key=${API_KEY}`;
        const response = await fetch(url);
        const json = await response.json();
        const rows = json.values;
        const data = [];
        for (let i = 1; i < rows.length; i++) {
          console.log(rows[i]);
          const team = rows[i][0];
          const amount = rows[i][rows[i].length - 1];
          data.push({ team, amount });
        }
        return data;
}

    useEffect(() => {
      const fetchData = async () => {
        var data = await getSheetData('Highest Total',TOTAL_COL);
        setTotalFundraisingData(data);
        data = await getSheetData('Highest Relay Only',NIGHT_COL);
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
              <NightOfFundraisingTable data={nightOfFundraisingData} />
              <TotalFundraisingTable data={totalFundraisingData} />
            </div>
        </div>
    );
};

export default Scoreboard;
