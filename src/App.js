import React, { Component } from 'react';
import './App.css';
import PlayZone from './Components/PlayZone';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PlayZone />
      </div>
    );
  }
}

export default App;
