import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  render() {
    const { currentUser, logout } = this.props;
    const welcomeMessage = () => (
      <div>
        <h2>Welcome, {currentUser.username} </h2>
        <button onClick={logout}>Log Out</button>
      </div>
    );
    const sessionLinks = () => (
      <div>
        <nav>
          <Link to='/login'>Login</Link>
          {' or '}
          <Link to='/signup'>Sign Up!</Link>
        </nav>
      </div>
    );
    return currentUser ? welcomeMessage() : sessionLinks();
  }
}

export default Greeting;