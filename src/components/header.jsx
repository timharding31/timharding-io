import React from 'react';
import { Link } from 'react-scroll';
const gg = require('../images/gg_bridge.png');
const uss = require('../images/uss_constitution.png');

export default () => (
  <header className="application-header">
    <div id="gg-overlay" style={{ backgroundImage: `url("${gg}")` }} />
    <div className="header-wordmark">
      <h1><Link to="about" containerId="application-body" smooth={true} duration={500}>Tim Harding</Link></h1>
      <p>Software Engineer</p>
    </div>
    <div id="header-buttons">
      {/* <i><Link to="/resume"></Link></i>
      <i><Link to="/linkedin"></Link></i> */}
      {/* <i><a href="https://www.linkedin.com/in/timharding31/" target="_blank"></a></i> */}
      {/* <i><a href="https://github.com/timharding31" target="_blank"></a></i> */}
    </div>
    <div id="header-menu-trigger">
      <i></i>
      <ul id="nav-dropdown">
        <li><i><a href="https://www.linkedin.com/in/timharding31/" target="_blank"></a></i></li>
        <li><i><a href="https://github.com/timharding31" target="_blank"></a></i></li>
        {/* <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">My Work</Link></li>
        <li><Link to="/contact">Contact</Link></li> */}
      </ul>
    </div>
    <div id="uss-overlay" style={{ backgroundImage: `url("${uss}")` }} />
  </header>
)