import React from "react";
import "../styles/Portfolio.css"; // Import your CSS file

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1>📊 My Portfolio</h1>

      {/* Portfolio performance graph */}
      <div className="performance">
        <h2>Portfolio Performance</h2>
        <img src="/circle.png" alt="Portfolio img" className="circle-img" />
      </div>

      {/* Table Stocks */}
      <div className="stocks">
        <h2>Owned Stocks</h2>
        <table className="tbl">
          {/* Table Head */}
          <thead className="tbl-head">
            <tr>
              <th>Stock</th>
              <th>Shares</th>
              <th>Buying Price</th>
              <th>Current Price</th>
              <th>Profit/Loss</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="tbl-body">
            <tr>
              <td>AAPL</td>
              <td>10</td>
              <td>$145</td>
              <td>$150</td>
              <td className="profit">+ $50</td>
            </tr>
            <tr>
              <td>TSLA</td>
              <td>5</td>
              <td>$700</td>
              <td>$690</td>
              <td className="loss">- $50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;
