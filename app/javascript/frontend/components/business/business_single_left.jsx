import React from 'react';
import MiddleLine from '../ui/middle_line';
import BusinessLong from './business_long';
import BusinessOperatingHours from './business_operating_hours';
import RatingSection from '../rate/rate_section';
import UserComment from '../comment/user_comment';
import CommentList from '../comment/comment_list';

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

  render() {
    if (this.props.ui.loading.loadingBusiness) return (
      <div className='business'>
        <div className='boundary-1-10'></div>
        <div className='business-left'>
          <h3>Loading...</h3>
          <div className="loader"></div>
        </div>
        <div className='boundary-1-10'></div>
      </div>
    );
    if (!this.props.business) return null;
    if (!this.props.business.address) return null;
    if (this.props.currentUserId) {
      if (!this.props.users[this.props.currentUserId].commentIds) return null;
    }
    const { business, comments, rates, currentUserId, users, votes} = this.props;
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
            {RatingSection(currentUserId, rates[currentUserId], business.id)}
          </div>
          <div>
            <h4>Reviews</h4>
            {UserComment(currentUserId, comments.current_user, business.id)}
          </div>
        </div>
        <MiddleLine />
        <h4>Reviews</h4>
        <ul className='business-comments'>
          {CommentList(comments[business.id], currentUserId, votes, business.id)}
        </ul>
        <div id='page-line'>
          {this.renderPageLine()}
        </div>
      </div>
    )
  };
}

export default BusinessSingleLeft;