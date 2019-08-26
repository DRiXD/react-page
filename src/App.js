import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonPane from './Buttons/ButtonPane.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Hello World! </p>
        <ButtonPane></ButtonPane>
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
