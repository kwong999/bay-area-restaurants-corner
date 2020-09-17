import React from 'react';

import mainImg from '../../../../assets/images/main-pasta-1920.jpg';
import Figure from '../ui/figure';
import NavBar from '../nav_bar/nav_bar';
import MainTitle from '../main_title/main_title';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <Figure 
          className={"main-img"}
          img={mainImg}
          alt={"mainImg"}
        />
        <NavBar />
        <MainTitle />
      </header>
    )
  }
}

export default Header;