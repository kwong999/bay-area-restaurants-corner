import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from '../comment/comment_form_container';
import RateSelectorContainer from '../rate/rate_selector_container';
import VoteLineContainer from '../vote/vote_line_container';
import MiddleLine from '../ui/middle_line';
import BusinessLong from './business_long';
import BusinessOperatingHours from './business_operating_hours';

class BusinessSingleLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      limit: 2
    }
  }

  componentDidMount() {
    this.props.fetchBusiness(
      this.props.businessId,
      { limit: this.state.limit, page: this.state.currentPage }
    );
    if (this.props.currentUserId) {
      this.props.fetchUser(this.props.currentUserId);
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.props.ui.update.updated) {
      this.props.fetchBusiness(
        this.props.businessId, 
        { limit: this.state.limit, page: this.state.currentPage }
      );
      this.props.fetchUser(this.props.currentUserId);
      this.props.stateUpdated();
    }
  }

  handleChangePage(type, num) {
    let toPage;
    switch (type) {
      case 'prev':
        toPage = this.state.currentPage - 1;
        break;
      case 'next':
        toPage = this.state.currentPage + 1;
        break;
      case 'to':
        toPage = num;
        break;
    }
    return (e) => {
      e.preventDefault();
      this.setState({ currentPage: toPage }, () => (
        this.props.fetchBusiness(
          this.props.businessId,
          { limit: this.state.limit, page: this.state.currentPage }
        )
      ));
    }
  }

  renderPageLine() {
    if (!this.props.comments[this.props.business.id]) return null;
    const maxPage = Math.ceil(this.props.business.commentIds.length / this.state.limit);
    if (maxPage <= 1) return null;
    switch (this.state.currentPage) {
      case 1:
        return (
          <>
            <button id='hidden'>{'<'}</button>
            <p>{this.state.currentPage}/{maxPage}</p>
            <button onClick={this.handleChangePage('next')}>{'>'}</button>
          </>
        )
      case maxPage:
        return (
          <>
            <button onClick={this.handleChangePage('prev')}>{'<'}</button>
            <p>{this.state.currentPage}/{maxPage}</p>
            <button id='hidden'>{'>'}</button>
          </>
        )
      default:
        return (
          <>
            <button onClick={this.handleChangePage('prev')}>{'<'}</button>
            <p>{this.state.currentPage}/{maxPage}</p>
            <button onClick={this.handleChangePage('next')}>{'>'}</button>
          </>
        )
    }
  }

  renderBusinessLongDetail() {
    return <BusinessLong business={this.props.business} />
  }

  renderOperatingHours(hour) {
    const days = ["hours_mon", "hours_tue", "hours_wed", "hours_thu", "hours_fri", "hours_sat", "hours_sun"]
    return days.map((day, idx) => (
      <li key={idx}><p>{day.charAt(6).toUpperCase() + day.slice(7)}: </p><p>{(hour[day]) ? hour[day] : '-'}</p></li>
    ))
  }

  renderRatingSection(currentUserId, currentUserRates, businessId) {
    if (!currentUserId) {
      return this.renderLoginSignUpLine('rate');
    }
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

  renderCurrentUserReview(currentUserId, comment, businessId) {
    if (!currentUserId) {
      return this.renderLoginSignUpLine('comment');
    }
    if (comment.id) {
      return (
        <div className='user-comment'>
          <CommentFormContainer
            action='View'
            currentComment={comment.body}
            user_id={comment.user_id}
            business_id={comment.business_id}
            comment_id={comment.id}
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

  renderLoginSignUpLine(text) {
    return (
      <p className='login-sign-up-line'>
        <Link to='/login'>Login</Link> / <Link to='/signup'>Sign up</Link> to {text}
      </p>
    )
  }

  renderComments(comments) {
    if (!comments) return null;
    return comments.map( comment => {
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
        <li key={comment.id}>  
          <p>{comment.body}</p>
          <p className='comment-author'>
            by <Link to={`/user/${comment.user_id}/index`} props={comment.username}>{comment.username}</Link>
          </p>
          <p className='vote-detail'>{voteLine}</p>
          {this.renderVoteOptions(comment.id)}
        </li>
      );
    })
  }

  renderVoteOptions(commentId){
    if (!this.props.currentUserId) return null;
    if (!this.props.votes[this.props.currentUserId]) return null;
    const vote = this.props.votes[this.props.currentUserId][commentId];
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
    if (this.props.currentUserId) {
      if (!this.props.users[this.props.currentUserId].commentIds) return null;
    }
    const { business, comments, rates, currentUserId, users } = this.props;
    return (
      <div className='business-single-left'>
        <h3>{business.name}</h3>
        <BusinessLong business={this.props.business} />
        <MiddleLine />
        <h4>Operating Hours</h4>
        <BusinessOperatingHours hour={business.hour} />
        <MiddleLine />
        <div className='current-user-rate-comment'>
          <div>
            <h4>Rate it!</h4>
            {this.renderRatingSection(currentUserId, rates[currentUserId], business.id)}
          </div>
          <div>
            <h4>Reviews</h4>
            {this.renderCurrentUserReview(currentUserId, comments.current_user, business.id)}
          </div>
        </div>
        <MiddleLine />
        <h4>Reviews</h4>
        <ul className='business-comments'>
          {this.renderComments(comments[business.id])}
        </ul>
        <div id='page-line'>
          {this.renderPageLine()}
        </div>
      </div>
    )
  };
}

export default BusinessSingleLeft;