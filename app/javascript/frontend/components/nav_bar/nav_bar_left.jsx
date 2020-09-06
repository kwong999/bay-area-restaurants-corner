import React from 'react';
import { Link } from 'react-router-dom';

class NavBarLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='nav-bar-left'>
        <button title={'Home Page'}><Link to='/'>Home Page</Link></button>
      </div>
    )
  }
}

export default NavBarLeft;