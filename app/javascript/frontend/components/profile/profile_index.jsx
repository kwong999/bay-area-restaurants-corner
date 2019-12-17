import React from 'react';
import { Link } from 'react-router-dom';

class ProfileIndex extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId, { show: 'index' });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId, { show: 'index' });
    }
  }

  renderRates() {
    const { rates } = this.props.currentUser;
    return rates.map( rate => (
      <li key={`rate-${rate.id}`}>
        <ul className='recent-rate'>
          <li>Business Name: <Link to={`/business/${rate.business_id}`}>{rate.business_name}</Link></li>
          <li>Rating: {rate.rating}</li>
        </ul>
      </li>
    ));
  }

  renderComments() {
    const { comments } = this.props.currentUser;
    return comments.map( comment => (
      <li key={`comment-${comment.id}`}>
        <ul className='recent-comment'>
          <li>Business Name: <Link to={`/business/${comment.business_id}`}>{comment.business_name}</Link></li>
          <li>Comment: {comment.body}</li>
        </ul>
      </li>
    ));
  }
 
  render() {
    console.log(this.constructor.name);
    console.log(this.props);
    if (!this.props.currentUser) return null;
    if (!this.props.currentUser.rates) return null;
    return (
      <>
        <div className='recent-rates'>
          <h3>Recent Rates</h3>
          <ul>
            {this.renderRates()}
          </ul>
        </div>
        <div className='recent-comments'>
          <h3>Recent Comments</h3>
          <ul>
            {this.renderComments()}
          </ul>
        </div>
      </>
    )
  }
}

export default ProfileIndex;