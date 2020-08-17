import React, { Component } from 'react'
import './style.css'

class Image extends Component {
    render() {
        return(
                <div className="image">
                    <img src={this.props.img} alt={this.props.id}/>
                </div>
        )
    }
}
export default Image