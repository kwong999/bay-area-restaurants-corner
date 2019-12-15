import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from '../comment/comment_form_container';
import RateSelectorContainer from '../rate/rate_selector_container';
import VoteLineContainer from '../vote/vote_line_container';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBusiness(this.props.businessId);
  }

  componentDidUpdate(nextProps) {
    let currentbusinessId = nextProps.match.params.businessId;
    let nextbusinessId = nextProps.match.params.businessId;
    if (currentbusinessId !== nextbusinessId) {
      this.props.fetchBusiness(nextbusinessId);
    }
  }

  renderBusinessList() {
    if (!!this.props.business) {
      console.log(this.props);
      const { business, comments, rates, currentUserId, users } = this.props;
      const address = (business.address.address_first) ? `
          ${business.address.address_first} ${business.address.address_second},
          ${business.address.street},
          ${business.address.city}, 
          ${business.address.state} ${business.address.zip}` : 'Not Provided';
      let rating = '-';
      if (business.rating.rating_avg !== '-') {
        rating = `${business.rating.rating_avg} by ${business.rating.rating_counts} user`;
        if (business.rating.rating_counts > 1) {
          rating = rating + 's';
        }
      }
      return (
        <div className='business-single'>
          <h3>{business.name}</h3>
          <ul className='business-long-detail'>
            <li>Description: {business.description}</li>
            <li>Phone: {business.phone}</li>
            <li>Address: {address}</li>
            <li>Rating: {rating}</li>
          </ul>
          <h4>Operating Hours</h4>
          <ul className='business-operating-hours'>
            {this.renderOperatingHours(business.hour)}
          </ul>
          <div className='current-user-rate-comment'>
            <div>
              <h4>Rate it!</h4>
              {this.renderRatingSection(currentUserId, rates[currentUserId], business.id)}
            </div>
            <div>
            <h4>Reviews</h4>
            {this.renderCurrentUserReview(currentUserId, comments, users, business.id)}
            </div>
          </div>
          <ul className='business-comments'>
            {this.renderComments(business.commentIds, comments)}
          </ul>
        </div>
      )
    } else {
      return null;
    };
  }

  renderRatingSection(currentUserId, currentUserRates, businessId) {
    if (!currentUserId) return null;
    if (!currentUserRates) {
      return (
        <div className='rating-section'>
          <RateSelectorContainer
            action='Create'
            user_id={currentUserId}
            business_id={businessId}
            rating='select one'
          />
        </div>
      );
    } else {
      return (
        <div className='rating-section'>
          <RateSelectorContainer
            action='View'
            user_id={currentUserId}
            business_id={businessId}
            rating={currentUserRates.rating}
            rate_id={currentUserRates.id}
          />
        </div>
      )
    }
  }

  renderOperatingHours(hour) {
    const days = ["hours_mon", "hours_tue", "hours_wed", "hours_thu", "hours_fri", "hours_sat", "hours_sun"]
    return days.map((day, idx) => (
      <li key={idx}><p>{day.charAt(6).toUpperCase() + day.slice(7)}: </p><p>{(hour[day]) ? hour[day] : '-'}</p></li>
    ))
  }

  renderCurrentUserReview(currentUserId, comments, users, businessId) {
    if (!currentUserId) {
      return null;
    }
    const currentUser = users[currentUserId];
    const currentUserComment = Object.keys(comments).filter(commentId => currentUser.commentIds.includes(parseInt(commentId)));
    if (currentUserComment.length > 0) {
      return (
        <div className='user-comment'>
          <CommentFormContainer
            action='View'
            currentComment={comments[currentUserComment[0]].body}
            user_id={currentUserId}
            business_id={businessId}
            comment_id={currentUserComment[0]}
          />
        </div>
      )
    } else {
      return (
        <div>
          <CommentFormContainer 
            action='Create'
            currentComment=''
            user_id={currentUserId}
            business_id={businessId}
          />
        </div>
      )
    }
  }

  renderComments(commentIds, comments) {
    if (!commentIds || !comments) return null;
    return commentIds.map((id, idx) => {
      const comment = comments[parseInt(id)];
      const votingResult = comment.voting.voting_result;
      const votingCounts = comment.voting.voting_counts;
      let voteLine;
      if (votingCounts === 0) {
        voteLine = 'No votes';
      } else {
        if (votingResult === 0) {
          voteLine = `Even by ${votingCounts} votes`
        } else if ( votingResult > 0 ) {
          voteLine = `Net ${votingResult} upvotes by ${votingCounts} votes`
        } else {
          voteLine = `Net ${votingResult} downvotes by ${votingCounts} votes`
        }
      }
      return (
        <li key={idx}>  
          <p>{comment.body}</p>
          <p className='comment-author'>by {comment.username}</p>
          <p className='vote-detail'>{voteLine}</p>
          {this.renderVoteOptions(parseInt(id))}
        </li>
      );
    })
  }

  renderVoteOptions(commentId){
    if (!this.props.currentUserId) return null;
    const vote = this.props.votes[this.props.currentUserId][commentId]
    let action;
    if (!vote) {
      action = 'Vote';
    } else {
      if (vote.voting === 1) {
        action = 'Upvoted';
      } else {
        action = 'Downoted';
      }
    }
    return (
      <VoteLineContainer
        vote={vote}
        user_id={this.props.currentUserId}
        business_id={this.props.business.id}
        comment_id={commentId}
        action={action}
      />
    )
  }
  render() {
    if (this.props.ui.loadingBusiness) return null;
    if (!this.props.business) return null;
    if (!this.props.business.address) return null;
    return (
      <div>
        {this.renderBusinessList()}
      </div>
      )
  };
}

export default BusinessShow;