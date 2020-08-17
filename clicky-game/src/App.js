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
        img: './assets/image1.jpeg',
        clicked: false
      },{
        id: 2,
        img: './assets/image2.jpeg',
        clicked: false
      },{
        id: 3,
        img: './assets/image3.jpeg',
        clicked: false
      },{
        id: 4,
        img: './assets/image4.jpeg',
        clicked: false
      },{
        id: 5,
        img: './assets/image5.jpeg',
        clicked: false
      },{
        id: 6,
        img: './assets/image6.jpeg',
        clicked: false
      },{
        id: 7,
        img: './assets/image7.jpeg',
        clicked: false
      },{
        id: 8,
        img: './assets/image8.jpeg',
        clicked: false
      },{
        id: 9,
        img: './assets/image9.jpeg',
        clicked: false
      },{
        id: 10,
        img: './assets/image10.jpeg',
        clicked: false
      },{
        id: 11,
        img: './assets/image11.jpeg',
        clicked: false
      },{
        id: 12,
        img: './assets/image12.jpeg',
        clicked: false
      },
    ]
  }

  handleImageClick = (e) => {
    let id = e.target.id || e.target.alt
    id -= 1
    let isClicked = e.target.dataset.clicked
    console.log(this.state.data[id])
    if (isClicked === 'false') {
      this.setState()
    }
  }
  
  render() {
    return (
        <div className='container'> 
          <Navbar message={this.state.navMessage} score={this.state.score} topScore={this.state.topScore}/>
          <Jumbo />
          <div className='image-container'>
            {
              this.state.data.map(r => {
                return <Image id={r.id} img={r.img} clicked={r.clicked} handleImageClick={this.handleImageClick}/>
              })
            }
          </div>
        </div>
      );
    }
}

export default App;
