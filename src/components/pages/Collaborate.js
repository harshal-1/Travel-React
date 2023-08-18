import React from 'react';
import '../../App.css';
import Cards3 from '../Cards3';
import HeroSection3 from '../HeroSection3';
import Cards4 from '../Cards4';

export default function Collaborate() {
  return (
  <>
  <HeroSection3 />
  <Cards3 />
  <div className='collaborate'><h1>Tag us on Social Media along with our Merch to avail extra offers</h1></div>
  <Cards4 />  
  </>
  );
}