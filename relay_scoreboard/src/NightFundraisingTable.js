import React from 'react';
import './FundraisingTable.css';

const NightFundraisingTable = ({ data }) => {
  return (
    <div className="fundraising-table">
      <h2 className="table-title">Total Fundraising</h2>
      <table>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Fundraising Tonight</th>
          </tr>
        </thead>
        <tbody>
          {data.map((team) => (
            <tr key={team.name}>
              <td>{team.name}</td>
              <td>{team.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NightFundraisingTable;
