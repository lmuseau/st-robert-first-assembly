import React from 'react'
import '../../App.css'
import './About.css'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='about'>
      <section className='about-section'>
        <div className='image'>
          {/* img here */}
        </div>
        <div className='content'>
          <h2>Our Mission & Vision</h2>
          <span>
            {/* line here */}
          </span>
          <p>
            Thank you for visiting our website! At First Assembly, we are focusing on F5: 
            Faith, Family, Friends, Finance and Freedom.  It is our goal to create an exciting
            atmosphere of worship, prayer, teaching, outreach, and community.  It is our desire 
            not to just “do church” but to be the church as we do life together.  We want to 
            connect with you and your family as we all connect to God.  We welcome anyone 
            and everyone with open arms.  
          </p>
          <ul className='links'>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <div className='vertical-line'></div>
            <li>
              <Link to='/our-team'>
                Our Team
              </Link>
            </li>
          </ul>
          <ul className='icons'>
            <li>
              <Link
              to='//facebook.com/strobertassembly'
              target='_blank'
              aria-label='Facebook'>
                <i className='fab fa-facebook-f'></i>
              </Link>
            </li>
            <li>
              <Link
              to='//youtube.com/watch?v=uYdN10xxek4'
              target='_blank'
              aria-label='YouTube'>
                <i className='fab fa-youtube'></i>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}