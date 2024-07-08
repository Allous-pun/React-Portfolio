// src/components/Topbar/Topbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Topbar.css';

function Topbar() {
  return (
    <div className="Topbar">
      <nav>
        <ul className="menu">
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
          <li><NavLink to="/resume" className={({ isActive }) => isActive ? "active" : ""}>Resume</NavLink></li>
          <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""}>Portfolio</NavLink></li>
          <li><NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Topbar;

