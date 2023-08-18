import React from 'react';
import './Cards3.css';
import CardItem3 from './CardItem3';

function Cards3() {
  return (
    <div className='cards' id='offers'>
      <h1>Checkout these Incredible Deals!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem3
              src={require('../images/img-14.jpg')}
              text='Manali HOTEL'
              duration='Duration: 4-5 Days'
              price1='Price: $800'
              price2='Discounted Price: $560'
              label='2 Days Left'
              path='https://www.goibibo.com/hotels/hotels-in-manali-ct/'
            />
            <CardItem3
              src={require('../images/img-13.jpg')}
              text='Goa  WATERSPORTS'
              duration='Duration: 3-4 Days'
              price1='Price: $200'
              price2='Discounted Price: $160'
              label='1 Day Left'
              path='https://www.thrillophilia.com/water-sports-in-goa'
            />
            <CardItem3
              src={require('../images/img-12.jpg')}
              text='Munnar CAMPING'
              duration='Duration: 5-6 Days'
              price1='Price: $360'
              price2='Discounted Price: $190'
              label='5 Days Left'
              path='https://www.thrillophilia.com/cities/munnar/tags/camping'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards3;