import React from 'react';
import Button from '../ui/button';

class NavBarLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='nav-bar-left'>
        <Button
          link={"/"}
          onClick={() => null}
          text={"Home Page"}
          title={"Home Page"}
        />
      </div>
    )
  }
}

export default NavBarLeft;