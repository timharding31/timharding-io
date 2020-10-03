import React from 'react';
import './application.scss';
import { HashRouter } from 'react-router-dom';
import Header from './components/header';
import Main from './components/main';

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
