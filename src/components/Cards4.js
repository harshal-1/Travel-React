import React from 'react';
import './Cards4.css';
import CardItem4 from './CardItem4';

function Cards4() {
  return (
    <div className='cards'>
      <h1>Our Merchandise</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem4
              src={require('../images/img-16.jpg')}
              text='TRVL T-shirt'
              price='Price: $80'
              label='In Stock'
              path='/contact'
            />
            <CardItem4
              src={require('../images/img-17.webp')}
              text='TRVL Sipper'
              price='Price: $25'
              label='In Stock'
              path='/contact'
            />
            <CardItem4
              src={require('../images/img-18.webp')}
              text='TRVL Gloves'
              price='Price: $60'
              label='Out of Stock'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards4;