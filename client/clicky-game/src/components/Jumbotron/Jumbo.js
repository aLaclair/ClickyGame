import React from 'react'
import './style.css'

const Jumbo = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="jumbo-container">
                <h1 className="display-4">Clicky Game!</h1>
                <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
    )
}

export default Jumbo