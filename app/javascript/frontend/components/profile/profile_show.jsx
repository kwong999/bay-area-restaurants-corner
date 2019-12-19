import React from 'react';
import { Route, Link } from 'react-router-dom';
import ProfileIndexContainer from './profile_index_container';
import ProfileRateContainer from './profile_rate_container';
import ProfileCommentContainer from './profile_comment_container';
import ProfileVoteContainer from './profile_vote_container';

class ProfileShow extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  render() {
    console.log(this.constructor.name);
    console.log(this.props);
    if (!this.props.currentUser) {
      console.log('No currentUser'); 
      return null;
    }
    const { currentUser } = this.props;
    return(
      <>
        <h3>
          {currentUser.username}
        </h3>
        <ul>
          <Link to={`/user/${currentUser.id}/index`}>Index</Link>
          <Link to={`/user/${currentUser.id}/rates`}>Rates Record</Link>
          <Link to={`/user/${currentUser.id}/comments`}>Comments Record</Link>
          <Link to={`/user/${currentUser.id}/votes`}>Votes Record</Link>
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