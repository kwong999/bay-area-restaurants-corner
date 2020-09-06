import React from 'react';
import NavBarLeft from './nav_bar_left';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className='nav-bar'>
        <NavBarLeft />
        <NavBarRight />
      </nav>
    )
  }
}

export default NavBar;