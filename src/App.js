import React from 'react';
import './application.scss';
const gg = require('./images/gg_bridge.png');

function App() {
  return (
    <div className="application">
      <header className="application-header">
        <div className="header-wordmark">
          <h1>Tim Harding</h1>
          <p>Software Engineer</p>
        </div>
        <div id="gg-overlay" style={{backgroundImage: `url("${gg}")`}}></div>
      </header>
    </div>
  );
}

export default App;
