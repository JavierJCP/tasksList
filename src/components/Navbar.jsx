import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="home_icon">
        <Link to="/">
          <h1>🏠</h1>
        </Link>
      </div>
      <div className="list_icon">
        <Link to="/create">
          <h1>📃</h1>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
