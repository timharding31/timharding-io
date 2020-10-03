import React from 'react';
import './application.scss';
import Header from './components/header';
import Main from './components/main';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="application">
        <Header />
        <Main />
      </div>
    </HashRouter >
  );
}

export default App;
