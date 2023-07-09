import React from 'react'
import './FooterStyles.css'
import { FaFacebookF, FaLinkedin, FaTwitter, FaMailBulk, FaPhone, FaSearchLocation } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-container-left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color:' #ffffff', marginRight: '2rem'}} />
                    <div>
                        <p>Saket, Delhi</p>
                        <h4>Saket, Delhi</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:' #ffffff', marginRight: '2rem'}} /> +91-1234567890</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:' #ffffff', marginRight: '2rem'}} /> contact@easygov.co.in</h4>
                </div>
            </div>
            <div className='footer-container-right'>
                <h4>About</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt non nibh sed tristique. In non urna nec diam elementum pulvinar. Etiam sit amet sapien nec nulla rutrum gravida ac aliquet turpis. Cras fermentum mi quis nulla facilisis, eu pharetra urna ultricies. Etiam eu nisl sapien. Nam risus sem, consequat ac bibendum id, lobortis ac erat.</p>
                <div className='social'>
                    <FaFacebookF size={20} style={{color:' #ffffff', marginRight: '2rem'}}/>
                    <FaLinkedin size={20} style={{color:' #ffffff', marginRight: '2rem'}}/>
                    <FaTwitter size={20} style={{color:' #ffffff', marginRight: '2rem'}}/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer