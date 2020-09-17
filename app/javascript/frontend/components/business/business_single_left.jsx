import React from 'react';
import MiddleLine from '../ui/middle_line';
import BusinessLong from './business_long';
import BusinessOperatingHours from './business_operating_hours';
import RatingSection from '../rate/rate_section';
import UserComment from '../comment/user_comment';
import CommentList from '../comment/comment_list';
import PageLine from '../ui/page_line';

class BusinessSingleLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      limit: 2
    }
    this.queryBusiness = this.queryBusiness.bind(this);
    this.updateBusinessSingleLeftState = this.updateBusinessSingleLeftState.bind(this);
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

  updateBusinessSingleLeftState(name, value) {
    // query bisiness when state changed
    this.setState({ [name]: value }, () => this.queryBusiness());
  }

  queryBusiness() {
    this.props.fetchBusiness(
      this.props.businessId,
      { limit: this.state.limit, page: this.state.currentPage }
    );
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
        <PageLine
          updateParentState={this.updateBusinessSingleLeftState}
          currentPage={this.state.currentPage}
          limit={this.state.limit}
          totalItem={this.props.business.commentIds.length}
        />
      </div>
    )
  };
}

export default BusinessSingleLeft;