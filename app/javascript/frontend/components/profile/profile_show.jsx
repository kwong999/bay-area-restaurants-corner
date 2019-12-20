import React from 'react';
import { Route, Link } from 'react-router-dom';
import ProfileIndexContainer from './profile_index_container';
import ProfileRateContainer from './profile_rate_container';
import ProfileCommentContainer from './profile_comment_container';
import ProfileVoteContainer from './profile_vote_container';

class ProfileShow extends React.Component {
  render() {
    console.log(this.constructor.name);
    console.log(this.props);
    const { currentUser } = this.props;
    let username = (currentUser) ? currentUser.username : "";
    const { userId } = this.props.match.params;
    return(
      <>
        <h3>
          {username}
        </h3>
        <ul>
          <Link to={`/user/${userId}/index`}>Index</Link>
          <Link to={`/user/${userId}/rates`}>Rates Record</Link>
          <Link to={`/user/${userId}/comments`}>Comments Record</Link>
          <Link to={`/user/${userId}/votes`}>Votes Record</Link>
        </ul>
        <Route path='/user/:userId/index' component={ProfileIndexContainer} />
        <Route path='/user/:userId/rates' component={ProfileRateContainer} />
        <Route path='/user/:userId/comments' component={ProfileCommentContainer} />
        <Route path='/user/:userId/votes' component={ProfileVoteContainer} />
      </>
    )
  }
}

export default ProfileShow;