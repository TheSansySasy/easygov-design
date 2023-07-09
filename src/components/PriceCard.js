import React from 'react'
import './PriceCardStyles.css'
import { Link } from 'react-router-dom'

const PriceCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='money'>₹ 499</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum dolor</p>
                <Link to='/contact' className='btn'>Get Started</Link>
            </div>
            <div className='card'>
                <h3>- Standard -</h3>
                <span className='bar'></span>
                <p className='money'>₹ 799</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum dolor</p>
                <Link to='/contact' className='btn'>Get Started</Link>
            </div>
            <div className='card'>
                <h3>- Premium -</h3>
                <span className='bar'></span>
                <p className='money'>₹ 999</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum dolor</p>
                <Link to='/contact' className='btn'>Get Started</Link>
            </div>
        </div>
    </div>
  )
}

export default PriceCard