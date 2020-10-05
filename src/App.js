import React from 'react';
import './application.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Main from './components/main';

function App() {
  return (
    <BrowserRouter basename={window.PUBLIC_URL || null}>
      <div className="application">
        <Header />
        <Main />
      </div>
    </BrowserRouter >
  );
}

export default App;
