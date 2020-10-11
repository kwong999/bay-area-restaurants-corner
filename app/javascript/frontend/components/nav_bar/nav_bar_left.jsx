import React from 'react';
import Cookies from 'universal-cookie';
import Button from '../ui/button';
import DarkModeButton from './dark_mode_button';

class NavBarLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // display Home Page button
    return (
      <div className='nav-bar-left'>
        <Button
          link={"/"}
          onClick={() => null}
          text={"Home Page"}
          title={"Home Page"}
        />
        <DarkModeButton />
      </div>
    )
  }
}

export default NavBarLeft;