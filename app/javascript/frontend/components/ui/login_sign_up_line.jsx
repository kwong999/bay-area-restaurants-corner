import React from 'react';
import { Link } from 'react-router-dom';

const LoginSignUpLine = text => {
  return (
    <p className='login-sign-up-line'>
      <Link to='/login'>Login</Link> / <Link to='/signup'>Sign up</Link> to {text}
    </p>
  )
}

export default LoginSignUpLine;