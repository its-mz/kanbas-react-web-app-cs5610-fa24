import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Labs from './Labs';
import Kanbas from './Kanbas';
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <Kanbas />
        <Labs />
      </HashRouter>
      
    </div>
  );
}

export default App;
