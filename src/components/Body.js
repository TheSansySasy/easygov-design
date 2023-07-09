import React from 'react'
import './BodyStyles.css'
import { Link } from 'react-router-dom'
import Video from '../assets/mixkit-animation-of-futuristic-devices-99786-medium.mp4'

const Body = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={Video} type='video/mp4' />
        </video>
        <div className='content'>
                <h1>EasyGov</h1>
                <p>Providing Government Solution to the needy.</p>
            
            <div>
                <Link to='/about' className='btn'>Learn More</Link>
            </div>
        </div>
    </div>
  )
}

export default Body