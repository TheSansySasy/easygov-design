import React from 'react';
import Kasol from '../assets/Screenshot 2023-05-10 215927.png';
import { Link } from 'react-router-dom';
import './infoStyles.css';

const Info = () => {
  return (
    <div className='info-card'>
      <div className='infocard'>
        <div className='card'>
          <img src={Kasol} className='image' />
          <span className='bar'></span>
          <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut auctor tellus. Morbi est mi, blandit ut massa vel, mollis suscipit dui. Donec blandit metus ut nisl auctor tempus. Morbi vitae sem lacinia, lobortis mi sed, faucibus erat.</p>
          <Link to='/contact' className='btn'>Learn More</Link>
        </div>
        <div className='card'>
          <img src={Kasol} className='image' />
          <span className='bar'></span>
          <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut auctor tellus. Morbi est mi, blandit ut massa vel, mollis suscipit dui. Donec blandit metus ut nisl auctor tempus. Morbi vitae sem lacinia, lobortis mi sed, faucibus erat.</p>
          <Link to='/contact' className='btn'>Learn More</Link>
        </div>
        <div className='card'>
          <img src={Kasol} className='image' />
          <span className='bar'></span>
          <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut auctor tellus. Morbi est mi, blandit ut massa vel, mollis suscipit dui. Donec blandit metus ut nisl auctor tempus. Morbi vitae sem lacinia, lobortis mi sed, faucibus erat.</p>
          <Link to='/contact' className='btn'>Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
