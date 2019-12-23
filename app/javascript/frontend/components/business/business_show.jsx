import React from 'react';
import BusinessSingleLeftContainer from './business_single_left_container';
import BusinessSingleRightContainer from './business_single_right_container';

class BusinessShow extends React.Component {
  render() {
    console.log(this.constructor.name);
    console.log(this.props);
    return (
      <div className='business-single'>
        <BusinessSingleLeftContainer businessId={this.props.match.params.businessId}/>
        <BusinessSingleRightContainer businessId={this.props.match.params.businessId} />
      </div>
    )
  };
}

export default BusinessShow;