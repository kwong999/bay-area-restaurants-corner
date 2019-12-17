import React from 'react';
import { Route, Link, withRoute } from 'react-router-dom';
import ProfileVoteContainer from './profile_vote_container';
import ProfileIndexContainer from './profile_index_container';

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
        {currentUser.username}
        <ul>
          <Link to={`/user/${currentUser.id}/index`}>Index</Link>
          <Link to={`/user/${currentUser.id}/votes`}>Votes Record</Link>
        </ul>
        <Route path='/user/:userId/index' component={ProfileIndexContainer} />
        <Route path='/user/:userId/votes' component={ProfileVoteContainer} />
      </>
    )
  }
}

export default ProfileShow;