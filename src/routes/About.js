import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../components/Image'
import Footer from '../components/Footer'
import AboutEasyGov from '../components/About'

const About = () => {
  return (
    <div>
        <Navbar />
        <Image heading='About' text='EasyGovs Story' />
        <AboutEasyGov />
        <Footer />
    </div>
  )
}

export default About