import React from "react";
import "../styles/Dashboard.css"; // Import your CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>📈 Stock Market Dashboard</h1>

      {/* Search Bar */}
      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search stock (e.g. TESLA, AMAZON )"
        />
        <button>Search</button>
      </div>

      {/* Graph Section */}
      <div className="graph">
        <h2>Market Trends</h2>
        <img src="/graph.png" alt="Stock Market Graph" className="graph-img" />
      </div>

      {/* Stock Table */}
      <div className="stock-list">
        <h2>Popular Stocks</h2>
        <table className="table-dash">
          <thead>
            <tr className="rowss">
              <th>Stock</th>
              <th>Price</th>
              <th>% Change</th>
            </tr>
          </thead>
          <tbody>
            <tr className="rowss">
              <td>TESLA</td>
              <td>$730</td>
              <td className="loss1">-0.8%</td>
            </tr>
            <tr className="rowss">
              <td>AMAZON</td>
              <td>$3200</td>
              <td className="profit1">+0.5%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
