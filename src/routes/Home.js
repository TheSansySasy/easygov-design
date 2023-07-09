import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Pricing from './Pricing'
import Image from '../components/Image'
import AboutEasyGov from '../components/About'
import PriceCard from '../components/PriceCard'
import Form from '../components/Form'
import Info from '../components/info'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Body />
        <Image heading='About' text='EasyGovs Story' />
        <AboutEasyGov />
        {/* <Info /> */}
        <Image heading='Pricing' text='Choose your plan' />
        <PriceCard />
        <Image heading='Contact' text='Get in touch' />
        <Form />
        <Footer />
        
    </div>
  )
}

export default Home