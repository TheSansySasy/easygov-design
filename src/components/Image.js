import React, { Component } from 'react'
import './ImageStyles.css'

class Image extends Component {
  render() {
    return (
      <div className='img'>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default Image