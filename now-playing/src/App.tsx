import React from 'react';
import logo from './Tarja-Act-1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div>
              <p className="track">Side <strong>F</strong></p>
              <p className="artist">Tarja</p>
              <p className="album">Act I (Ear Music - 0209638ERE)</p>
          </div>
      </header>
    </div>

  );
}

export default App;
