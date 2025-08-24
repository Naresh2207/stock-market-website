import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation

import "../styles/Home.css"; // Import your CSS

const Home = () => {
  return (
    <>
      {/* Image Section */}
      <div className="background"></div>

      {/* Content Section */}
      <div className="content1">
        <h1>WELCOME TO OUR WEBSITE 📈</h1>
        <h2>🏦 </h2>
      </div>

      {/* Sidebar Section */}
      <div className="sidebar">
        <h3>DASHBOARD STOCK MARKET</h3>
        <ul>
          <li>
            <Link to="/Dashboard">➤ DASHBOARD</Link>
          </li>
          <li>
            <Link to="/Portfolio">➤ PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/TradingPage">➤ TRADING PAGE</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
