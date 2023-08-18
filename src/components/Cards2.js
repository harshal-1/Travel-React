import React from 'react';
import './Cards2.css';
import CardItem2 from './CardItem2';

function Cards2() {
  return (
    <div className='cards'>
      <h1>Trending Currently!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem2
              src={require('../images/img-1.jpg')}
              text='Goa'
              duration='Duration: 4-5 Days'
              price='Price: $800'
              label='Vacations'
              path='https://www.thrillophilia.com/10-best-places-to-visit-in-goa'
            />
            <CardItem2
              src={require('../images/img-4.jpg')}
              text='Himalayas'
              duration='Duration: 3-4 Days'
              price='Price: $500'
              label='Nature'
              path='https://www.explorehimalayas.com/'
            />
            <CardItem2
              src={require('../images/img-3.jpg')}
              text='Pacific'
              duration='Duration: 5-6 Days'
              price='Price: $700'
              label='Ocean'
              path='https://www.pocruises.com.au/ships/pacific-explorer'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem2
              src={require('../images/img-2.jpg')}
              text='Maldives'
              duration='Duration: 2-3 Days'
              price='Price: $700'
              label='Beach'
              path='https://traveltriangle.com/blog/places-to-visit-in-maldives/'
            />
            <CardItem2
              src={require('../images/img-5.jpg')}
              text='New York'
              duration='Duration: 7-8 Days'
              price='Price: $1000'
              label='International'
              path='https://www.nycgo.com/'
            />
            <CardItem2
              src={require('../images/img-6.jpg')}
              text='Los Angeles'
              duration='Duration: 6-7 Days'
              price='Price: $900'
              label='International'
              path='https://www.discoverlosangeles.com/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem2
              src={require('../images/img-7.jpg')}
              text='Jaipur'
              duration='Duration: 2-3 Days'
              price='Price: $400'
              label='Culture'
              path='https://www.tourism.rajasthan.gov.in/jaipur.html'
            />
            <CardItem2
              src={require('../images/img-8.jpg')}
              text='Sahara Desert'
              duration='Duration: 1-2 Days'
              price='Price: $300'
              label='Desert'
              path='https://www.tripadvisor.in/Attraction_Review-g304017-d4027066-Reviews-Explore_Sahara_Tours-Merzouga_Draa_Tafilalet.html'
            />
            <CardItem2
              src={require('../images/img-9.jpg')}
              text='Rishikesh'
              duration='Duration: 3-4 Days'
              price='Price: $400'
              label='Nature'
              path='https://www.tripadvisor.in/Attractions-g580106-Activities-Rishikesh_Dehradun_District_Uttarakhand.html'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards2;