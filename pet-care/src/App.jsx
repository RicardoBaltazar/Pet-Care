import React from 'react';
import './App.css';

import Menu from './components/header/Header'
import PageHome from './components/pages/home/pageHome'
import Routes from './components/routes/routes'

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes />
    </div>
  );
}

export default App;
