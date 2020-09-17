import React from 'react';
import NavBarLeft from './nav_bar_left';
import NavBarRightContainer from './nav_bar_right_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className='nav-bar'>
        <NavBarLeft />
        <NavBarRightContainer />
      </nav>
    )
  }
}

export default NavBar;