import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from '../components/Image'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <Image heading='Contact' text='Get in touch with us' />
        <Form />
        <Footer />
    </div>
  )
}

export default Contact