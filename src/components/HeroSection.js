import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Button2 } from './Button2';
import './HeroSection.css';
import vid from "../videos/video-3.mp4";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={vid} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Explore Packages
        </Button>
        <a href='https://harshal-1.github.io/Weather/'>
        <Button2
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Collaborate <i className='far fa-play-circle' />
        </Button2>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;