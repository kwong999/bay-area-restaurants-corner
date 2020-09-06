import React from 'react';

import mainImg from '../../../../assets/images/main-pasta-1920.jpg';
import GreetingContainer from '../session/greeting_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // h1 contain app name
      h1: "Bay Area Restaurants Corner",
      // h2 app name short info
      h2: "Find a place for your meal"
    }
  }

  render() {
    return (
      <header>
        <figure className='main-img'>
          <img src={mainImg} alt="mainImg" />
        </figure>
        <GreetingContainer />
        <h1>{this.state.h1}</h1>
        <h2>{this.state.h2}</h2>
      </header>
    )
  }
}

export default Header;