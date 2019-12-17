import React from 'react';
import { Link } from 'react-router-dom';

class ProfileVote extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId, { show: 'votes' });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId, { show: 'votes' });
    }
  }

  renderVotes() {
    const { votes } = this.props.currentUser;
    const vote_line = (votes.voting === 1) ? "Upvoted ↑" : "Downvoted ↓";
    return votes.map ( vote => (
      <li key={`vote-${vote.id}`}>
        <ul className='vote'>
          <li>Business Name: <Link to={`/business/${vote.business_id}`}>{vote.business_name}</Link></li>
          <li>Comment: {vote.comment_body}</li>
          <li>Author: {vote.comment_author}</li>
          <li>Vote: {vote_line}</li>
        </ul>
      </li>
    ));
  }

  render() {
    console.log(this.constructor.name);
    console.log(this.props);
    if (!this.props.currentUser) return null;
    if (!this.props.currentUser.votes) return null;
    return (
      <div className='votes-history'>
        <h3>Votes History</h3>
        <ul>
          {this.renderVotes()}
        </ul>
      </div>
    )
  }
}

export default ProfileVote;