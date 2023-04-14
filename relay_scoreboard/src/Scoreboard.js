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
        // const fakeData = [];
        // for (let i = 1; i < 51; i++) {
        //   const team = "Team " + i;
        //   const amount = i * 100;
        //   fakeData.push({ team, amount });
        // }
        // return fakeData;
}

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
            <div class="row">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/54/American_Cancer_Society_Relay_For_Life_Logo.png/220px-American_Cancer_Society_Relay_For_Life_Logo.png" 
                alt="Relay for Life Logo" 
                class="event-icon" />
              <h1 className="event-title">RIT Relay for Life</h1>
            </div>
            <div className="tables-container">
                <TotalFundraisingTable data={totalFundraisingData} />
                <NightOfFundraisingTable data={nightOfFundraisingData} />
            </div>
        </div>
    );
};

export default Scoreboard;
