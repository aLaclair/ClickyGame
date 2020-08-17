import React, { Component } from 'react'
import './style.css'

class Image extends Component {
    render() {
        return(
                <div className="image" id={this.props.id} data-clicked={this.props.clicked.toString()} onClick={this.props.handleImageClick}>
                    <img src={this.props.img} alt={this.props.id} data-clicked={this.props.clicked.toString()}/>
                </div>
        )
    }
}
export default Image