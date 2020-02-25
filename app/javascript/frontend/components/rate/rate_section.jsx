import React from 'react';
import RateSelectorContainer from './rate_selector_container';
import LoginSignUpLine from '../ui/login_sign_up_line';

const RatingSection = (currentUserId, currentUserRates, businessId) => {
  if (!currentUserId) {
    return LoginSignUpLine('rate');
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

export default RatingSection;