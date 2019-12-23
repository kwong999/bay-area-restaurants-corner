import React from 'react';
import { Route, Link } from 'react-router-dom';
import ProfileIndexContainer from './profile_index_container';
import ProfileRateContainer from './profile_rate_container';
import ProfileCommentContainer from './profile_comment_container';
import ProfileVoteContainer from './profile_vote_container';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.location.pathname.match(/\/\w+$/)[0]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    return e => {
      e.preventDefault();
      this.setState({ active: type })
    }
  }
  render() {
    console.log(this.constructor.name);
    console.log(this.props);
    const { currentUser } = this.props;
    let username = (currentUser) ? currentUser.username : "";
    const { userId } = this.props.match.params;
    return(
      <div className='profile-container'>
        <h3>
          {username}
        </h3>
        <nav className='profile-nav-bar'>
          <ul>
            <li
              className={this.state.active === '/index' ? 'active' : ''}
              onClick={this.handleClick('/index')}
            ><Link to={`/user/${userId}/index`}>Index</Link>
            </li>
            <li
              className={this.state.active === '/rates' ? 'active' : ''}
              onClick={this.handleClick('/rates')}
            ><Link to={`/user/${userId}/rates`}>Rates Record</Link>
            </li>
            <li
              className={this.state.active === '/comments' ? 'active' : ''}
              onClick={this.handleClick('/comments')}
              ><Link to={`/user/${userId}/comments`}>Comments Record</Link>
            </li>
            <li
              className={this.state.active === '/votes' ? 'active' : ''}
              onClick={this.handleClick('/votes')}
              ><Link to={`/user/${userId}/votes`}>Votes Record</Link>
            </li>
          </ul>
        </nav>
        <Route path='/user/:userId/index' component={ProfileIndexContainer} />
        <Route path='/user/:userId/rates' component={ProfileRateContainer} />
        <Route path='/user/:userId/comments' component={ProfileCommentContainer} />
        <Route path='/user/:userId/votes' component={ProfileVoteContainer} />
      </div>
    )
  }
}

export default ProfileShow;