import React from 'react';
import Button from '../ui/button';

class NavBarRight extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSession(logged_in, logout, currentUser) {
    if (logged_in) {
      return (
        <>
          <p>Welcome, <span>{currentUser.username}</span></p>
          <Button
            link={`/user/${currentUser.id}/index`}
            onClick={() => null}
            text={"Profile"}
            title={"Profile"} />
          <Button
            link={"#"}
            onClick={logout}
            text={"Log Out"}
            title={"Log Out"} />
        </>
      )
    } else {
      return (
        <>
          <Button
            link={"/login"}
            onClick={() => null}
            text={"Log In"}
            title={"Log In"} />
          <Button
            link={"/signup"}
            onClick={() => null}
            text={"Sign Up"}
            title={"Sign Up"} />
        </>
      )
    }
  }

  render() {
    const { currentUser, logout } = this.props;
    const logged_in = currentUser ? true : false;
    return (
      <div className='nav-bar-right'>
        {this.renderSession(logged_in, logout, currentUser)}
      </div>
    )
  }
}

export default NavBarRight;