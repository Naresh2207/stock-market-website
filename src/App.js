import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import your components
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Portfolio from "./components/Portfolio";
import TradingPage from "./components/TradingPage";

function App() {
  return (
    <Router>
      <div>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/TradingPage" element={<TradingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
