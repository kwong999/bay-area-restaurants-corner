import React from 'react';

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