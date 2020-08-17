import React, { Component } from 'react'
import './style.css'

class Navbar extends Component {    
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li className="name">Clicky Game</li>
                    <li className="guess">{this.props.message}</li>
                    <li className='score'>Score: {this.props.score} | Top Score: {this.props.topScore}</li>
                </ul>
            </div>
        )
    }
}

export default Navbar