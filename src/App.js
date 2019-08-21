import React from 'react';
import logo from './logo.svg';
import './App.css';
import HoverButton from './Buttons/HoverButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Hello World! </p>
        <HoverButton></HoverButton>
      </header>
    </div>
  );
}

export default App;
