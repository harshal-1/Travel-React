import React from 'react';
import '../App.css';
import { Button2 } from './Button2';
import { Button3 } from './Button3';
import './HeroSection2.css';
import vid from "../videos/video-1.mp4";

function HeroSection2() {
  return (
    <div className='hero-container'>
      <video src={vid} autoPlay loop muted />
      <h1>EXPLORE PACKAGES</h1>
      <p>Select from the variety of options</p>
      <div className='hero-btns'>
        <Button2
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Collaborate
        </Button2>
        <Button3
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Weather <i className='far fa-play-circle' />
        </Button3>
      </div>
    </div>
  );
}

export default HeroSection2;