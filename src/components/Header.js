import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Xavier Merino Seuma</h1>
      <nav>
        <ul>
          <li><Link to="/">ABOUT</Link></li>
          <li><Link to="/projects">PORTFOLIO</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;