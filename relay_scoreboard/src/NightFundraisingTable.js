import React from 'react';
import './FundraisingTable.css';

const NightFundraisingTable = ({ data }) => {
  return (
    <div className="fundraising-table">
      <h2 className="table-title">Tonight's Fundraising</h2>
      <table>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Fundraising Tonight</th>
          </tr>
        </thead>
        <tbody>
        {data.filter(function (row){
            if (row.team === "")
              return false;
            return true;
          }).map((team) => (
            <tr key={team.team}>
              <td>{team.team}</td>
              <td>{team.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NightFundraisingTable;
