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
  }

  componentDidUpdate(prevProps) {
    const newPath = this.props.location.pathname.match(/\/\w+$/)[0];
    const oldPath = prevProps.location.pathname.match(/\/\w+$/)[0];
    if (newPath !== oldPath) {
      this.setState({ active: newPath})
    }
  }

  render() {
    const { currentUser } = this.props;
    let username = (currentUser) ? currentUser.username : "";
    const { userId } = this.props.match.params;
    return(
      <>
        <nav className='profile-nav-bar'>
          <ul>
            <li
              className={this.state.active === '/index' ? 'active' : ''}
            ><Link to={`/user/${userId}/index`}>Index</Link>
            </li>
            <li
              className={this.state.active === '/rates' ? 'active' : ''}
            ><Link to={`/user/${userId}/rates`}>Rates Record</Link>
            </li>
            <li
              className={this.state.active === '/comments' ? 'active' : ''}
            ><Link to={`/user/${userId}/comments`}>Comments Record</Link>
            </li>
            <li
              className={this.state.active === '/votes' ? 'active' : ''}
            ><Link to={`/user/${userId}/votes`}>Votes Record</Link>
            </li>
          </ul>
        </nav>
        <div className='profile-container'>
          <h3>
            {username}
          </h3>
          <Route path='/user/:userId/index' component={ProfileIndexContainer} />
          <Route path='/user/:userId/rates' component={ProfileRateContainer} />
          <Route path='/user/:userId/comments' component={ProfileCommentContainer} />
          <Route path='/user/:userId/votes' component={ProfileVoteContainer} />
        </div>
      </>
    )
  }
}

export default ProfileShow;