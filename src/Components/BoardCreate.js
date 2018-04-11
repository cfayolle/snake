import React, {Component} from 'react';
import '../App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketch';

class BoardCreate extends Component {
  render() {
    return (
      <div className='container'>
        <P5Wrapper sketch={sketch}/>
      </div>
    );
  }
}

export default BoardCreate;
