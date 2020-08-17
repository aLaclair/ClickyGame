import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  state = {
    navMessage: 'Click an image to get started',
    score: 0,
    topScore: 0
  }
  
  render() {
    return (
        <div className='container'>
          <Navbar message={this.state.navMessage} score={this.state.score} topScore={this.state.topScore}/>
        </div>
      );
    }
}

export default App;
