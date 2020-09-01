import React from 'react';
import './App.css';

import Menu from './components/header/Header'
//import PageHome from './components/pages/home/pageHome'
import Routes from './components/routes/routes'
import Form from './components/form/Form'


function App() {
  return (
    <>
      <div className="App">
        <Menu />
        <Routes />
        <Form />
      </div>
    </>
  );
}

export default App;
