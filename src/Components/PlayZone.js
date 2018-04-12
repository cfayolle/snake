import React, {Component} from 'react';
import '../App.css';
import BoardCreate from './BoardCreate';
import { score } from '../sketch';

class PlayZone extends Component {
  render() {
    return (
      <div id='zone'>
        <BoardCreate />
        <h1> Score: {score} </h1>
      </div>
    );
  }
}

export default PlayZone;
