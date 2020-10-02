import React from 'react';
import './application.scss';
import Header from './components/header';
import Main from './components/main';

function App() {
  return (
    <div className="application">
      <Header />
      <Main />
    </div>
  );
}

export default App;
