import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    window.onkeydown = console.log('YAS', 1);
    return (
      <div className="Header">
          <h1 > Welcome to Snizzake</h1>
      </div>
    );
  }
}

export default Header;
