import React from 'react';
import BusinessSingleLeftContainer from './business_single_left_container';
import BusinessSingleRightContainer from './business_single_right_container';

class BusinessShow extends React.Component {
  render() {
    return (
      <div className='business-single'>
        <div className='boundary-1-10'></div>
        <BusinessSingleLeftContainer businessId={this.props.match.params.businessId}/>
        <BusinessSingleRightContainer businessId={this.props.match.params.businessId} />
        <div className='boundary-1-10'></div>
      </div>
    )
  };
}

export default BusinessShow;