import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
const TYPE = ['recent-sermon', 'getting-started', 'subscribe'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize, buttonType}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonType = TYPE.includes(buttonType) ? buttonType : TYPE[1];
  let url = '/'
  let target = ''
  if (checkButtonType === 'recent-sermon') {
    // in the future make this change more dynamic
    url = '//facebook.com/167839826572873/videos/1746584945499275'
    target = '_blank'
  } else if (checkButtonType === 'getting-started') {
    url = '/sign-up'
  } else if (checkButtonType === 'subscribe') {
    url = '/'
  }
  return (
    <Link to={url} target={target} className='btn-mobile'>
      <button 
        className={`btn ${checkButtonSize} ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
};