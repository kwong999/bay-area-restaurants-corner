import React from 'react';
import MiddleLine from '../ui/middle_line';
import Map from '../map/map';

class BusinessSingleRight extends React.Component {
  renderMap() {
    return <Map pos={this.props.business.pos} />
  }
  render() {
    if (!this.props.business) return null;
    if (!this.props.business.pos) return null;
    return (
      <div className='business-single-right'>
        <h4>Location</h4>
        {this.renderMap()}
        <MiddleLine />
      </div>
    )
  };
}

export default BusinessSingleRight;