import React from 'react';
import '../App.css';
import { Button } from "./Button";
import { Button4 } from "./Button4";
import './HeroSection3.css';
import vid from "../videos/video-2.mp4";

function HeroSection3() {
  return (
    <div className='hero-container'>
      <video src={vid} autoPlay loop muted />
      <h1>Collaborate with TRVL</h1>
      <p>To make sure your trip is Amazing</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Explore Packages
        </Button>
        <Button4
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
           Connect Now {/*<i className='far fa-play-circle' /> */}
        </Button4>
      </div>
    </div>
  );
}

export default HeroSection3;