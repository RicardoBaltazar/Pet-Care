import React from 'react';
import './App.css';

import Menu from './components/header/Header'
import PageHome from './components/pages/home/pageHome'

function App() {
  return (
    <div className="App">
      <Menu />
      <PageHome />
    </div>
  );
}

export default App;
