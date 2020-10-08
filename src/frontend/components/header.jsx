import React from 'react';
import { Link } from 'react-scroll';
const gg = require('../../images/gg_bridge.png');
const uss = require('../../images/uss_constitution.png');

export default () => (
  <header className="application-header">
    <div id="gg-overlay" style={{ backgroundImage: `url("${gg}")` }} />
    <div className="header-wordmark">
      <h1><Link to="about" containerId="application-body" smooth={true} duration={500}>Tim Harding</Link></h1>
      <p>Software Engineer</p>
    </div>
    <div id="header-menu-trigger">
      <h2>Links <i></i></h2>
      <ul id="nav-dropdown">
        <li><a href="https://www.linkedin.com/in/timharding31/" target="_blank" rel="noopener noreferrer"><i></i> LinkedIn</a></li>
        <li><a href="https://github.com/timharding31" target="_blank" rel="noopener noreferrer"><i></i> GitHub</a></li>
      </ul>
    </div>
    <div id="uss-overlay" style={{ backgroundImage: `url("${uss}")` }} />
  </header>
)