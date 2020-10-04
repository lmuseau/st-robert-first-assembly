import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>We love to have you here!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Learn more about us!'
              label='Hello'
              path='/about'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Learn more about our ministries!'
              label='Teach'
              path='/ministries'
            />
            <CardItem
              src='images/img-3.jpg'
              text='We would love for you to get involved!'
              label='Join'
              path='/involvement'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Tell us about yourself!'
              label='Connect'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;