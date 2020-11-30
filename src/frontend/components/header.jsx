import React from 'react';
import { Link } from 'react-scroll';
const gg = require('../../images/gg_bridge.png');
const uss = require('../../images/uss_constitution.png');
const metal = require('../../images/metal_texture.png');

const headerColorOverlayStyle = {
    opacity: '0.4',
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
    backgroundRepeat: 'repeat',
    backgroundSize: '15%',
    backgroundColor: '#c0362c',
    backgroundImage: `url("${metal}")`,
};

export default () => (
  <header className="application-header" >
        <div id="header-color" style={headerColorOverlayStyle} ></div>
    <div id="gg-overlay" style={{ backgroundImage: `url("${gg}")` }} />
    <div className="header-wordmark">
      <Link to="about" containerId="application-body" smooth={true} duration={500}>Tim Harding</Link>
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