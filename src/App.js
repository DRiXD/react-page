import React from 'react';
import './App.css';
import ButtonPane from './Buttons/ButtonPane.js';
import References from './references/References.js';
import InfoPane from './infoPane/InfoPane.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InfoPane></InfoPane>
        <ButtonPane></ButtonPane>
        <References></References>
      </header>
    </div>
  );
}

export default App;
