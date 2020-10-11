import React from 'react'
import { Link } from 'react-router-dom'
// import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thank you for joining St. Robert First Assembly of God
        </p>
        {/* <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input type='email' name='email' placeholder='Your Email' className='footer-input' />
            <Button buttonType='subscribe' buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              First Assembly St. Robert <i className='fas fa-church' />
            </Link>
          </div>
          <small className='website-rights'>First Assembly St. Robert &copy; 2020</small>
          <div className='social-icons'>
            <Link className='social-icon-link facebook'
            to='/'
            target='_blank'
            aria-label='Facebook'>
              <i className='fab fa-facebook-f'></i>
            </Link>
            <Link className='social-icon-link youtube'
            to='//https://www.youtube.com/watch?v=uYdN10xxek4'
            target='_blank'
            aria-label='YouTube'>
              <i className='fab fa-youtube'></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
