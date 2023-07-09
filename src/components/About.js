import React from 'react'
import './AboutStyles.css'
import Chip from '../assets/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg'
import Code from '../assets/luca-bravo-XJXWbfSo2f0-unsplash.jpg'
import Info from '../components/info'

const About = () => {
  return (
    <div>
    <div className='about'>
        <div className='left'>
            <h1>EasyGovs Story</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut auctor tellus. Morbi est mi, blandit ut massa vel, mollis suscipit dui. Donec blandit metus ut nisl auctor tempus. Morbi vitae sem lacinia, lobortis mi sed, faucibus erat. Quisque massa odio, blandit non accumsan id, congue nec nunc. Donec dapibus eros sed justo ornare faucibus. Maecenas ac lobortis odio. Quisque non sem in diam condimentum dignissim rutrum ut dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget arcu vitae lacus venenatis interdum nec fermentum mi. Morbi luctus nibh in nisl placerat, a tincidunt lacus sodales. Suspendisse eget augue et enim vestib</p>
        </div>
        <div className='right'>
            <div className='image-container'>
                <div className='image-top'>
                    <img src={Chip} className='image' />
                </div>
                <div className='image-bottom'>
                <img src={Code} className='image' />
                </div>
            </div>
        </div>
        
    </div>
    <Info />
    </div>
  )
}

export default About