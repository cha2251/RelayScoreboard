import React from 'react';
import './FundraisingTable.css';

const TotalFundraisingTable = ({ data }) => {
  return (
    <div className="fundraising-table">
      <h2 className="table-title">Total Fundraising</h2>
      <table>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Total Fundraising</th>
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

export default TotalFundraisingTable;
