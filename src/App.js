import React, { Component } from 'react';
import raspNodeLogo from './rasp-node-logo.svg';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo-left" alt="logo" />
          <img src={raspNodeLogo} className="App-logo-right" alt="Raspberry Pi and node JS logo" />
        </div>
      </div>
    );
  }
}

export default App;
