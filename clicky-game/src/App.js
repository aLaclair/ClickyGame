import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Jumbo from './components/Jumbotron/Jumbo';
import Image from './components/Images/Images'

class App extends Component {
  state = {
    navMessage: 'Click an image to get started',
    score: 0,
    topScore: 0,
    data: [
      {
        id: 1,
        img: './assets/image1.jpeg'
      },{
        id: 2,
        img: './assets/image2.jpeg'
      },{
        id: 3,
        img: './assets/image3.jpeg'
      },{
        id: 4,
        img: './assets/image4.jpeg'
      },{
        id: 5,
        img: './assets/image5.jpeg'
      },{
        id: 6,
        img: './assets/image6.jpeg'
      },{
        id: 7,
        img: './assets/image7.jpeg'
      },{
        id: 8,
        img: './assets/image8.jpeg'
      },{
        id: 9,
        img: './assets/image9.jpeg'
      },{
        id: 10,
        img: './assets/image10.jpeg'
      },{
        id: 11,
        img: './assets/image11.jpeg'
      },{
        id: 12,
        img: './assets/image12.jpeg'
      },
    ]
  }
  
  render() {
    return (
        <div className='container'>
          <Navbar message={this.state.navMessage} score={this.state.score} topScore={this.state.topScore}/>
          <Jumbo />
          <div className='image-container'>
            {
              this.state.data.map(r => {
                return <Image id={r.id} img={r.img} />
              })
            }
          </div>
        </div>
      );
    }
}

export default App;
