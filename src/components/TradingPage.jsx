import React from "react";
import "../styles/TradingPage.css"; // Import your CSS

const TradingPage = () => {
  return (
    <>
      {/* Trading form */}
      <div className="trade-container">
        <h2>Trading Simulation</h2>

        <form className="form">
          <label htmlFor="stock" className="label">
            Choose Stock:
          </label>
          <select id="stock" name="stock" className="select">
            <option value="amazon">Amazon</option>
            <option value="tesla">Tesla</option>
            <option value="apple">Apple</option>
          </select>

          <label htmlFor="action" className="label">
            Action:
          </label>
          <select id="action" name="action" className="select">
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>

          <label htmlFor="quantity" className="label">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            className="input"
            name="quantity"
            placeholder="Enter number of shares"
          />

          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>

      {/* Transaction History */}
      <div className="history">
        <h2>Transaction History</h2>
        <table>
          <thead>
            <tr className="row">
              <th>Stock</th>
              <th>Action</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row">
              <td>Amazon</td>
              <td>Buy</td>
              <td>10</td>
              <td>Completed</td>
            </tr>
            <tr className="row">
              <td>Tesla</td>
              <td>Sell</td>
              <td>5</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TradingPage;
