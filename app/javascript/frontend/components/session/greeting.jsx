import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  render() {
    const { currentUser, logout } = this.props;
    const welcomeMessage = () => (
      <div className='greeting logged-in'>
        <nav>
          <div>
            <button><Link to='/'>Home Page</Link></button>
          </div>
          <div>
            <p>Welcome, <span>{currentUser.username}</span></p>
            <button onClick={logout}>Log Out</button>
          </div>
        </nav>
      </div>
    );
    const sessionLinks = () => (
      <div className='greeting logged-out'>
        <nav>
          <div>
            <button><Link to='/'>Home Page</Link></button>
          </div>
          <div>
            <button><Link to='/login'>Log In</Link></button>
            <button ><Link to='/signup'>Sign Up</Link></button>
          </div>
        </nav>
      </div>
    );
    return currentUser ? welcomeMessage() : sessionLinks();
  }
}

export default Greeting;