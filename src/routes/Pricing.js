import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from '../components/Image'
import PriceCard from '../components/PriceCard'

const Pricing = () => {
  return (
    <div>
        <Navbar />
        <Image heading='PRICING' text='Choose your Plan' />
        <PriceCard />
        <Footer />
    </div>
  )
}

export default Pricing