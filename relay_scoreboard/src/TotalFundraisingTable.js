import React from 'react';
import './FundraisingTable.css';

const TotalFundraisingTable = ({ data }) => {
  return (
    <div className="fundraising-table">
      <h2 className="table-title">Total Fundraising</h2>
      <table className="fundraising-table-actual">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.filter(function (row){
            if (row.team === "")
              return false;
            return true;
          })
          .map((team) => (
            <tr key={team.team}>
              <td>{team.team}</td>
              <td>${Math.floor(team.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TotalFundraisingTable;
