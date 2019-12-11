import React from 'react';
import { Link } from 'react-router-dom'

class BusinessShow extends React.Component {
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
      console.log(this.props.business);
      const { business } = this.props;
      const address = (business.address.address_first) ? `
          ${business.address.address_first} ${business.address.address_second},
          ${business.address.street},
          ${business.address.city}, 
          ${business.address.state} ${business.address.zip}` : 'Not Provided';
      return (
        <div className='business-single'>
          <Link to=''>Go Back</Link>
          <h3>{business.name}</h3>
          <ul className='business-long-detail'>
            <li key='description'>Description: {business.description}</li>
            <li key='phone'>Phone: {business.phone}</li>
            <li key='address'>Address: {address}</li>
          </ul>
          <h4>Operating Hours</h4>
          <ul>
            {this.renderOperatingHours(business.hour)}
          </ul>
        </div>
      )
    } else {
      return null;
    };
  }
  

  renderOperatingHours(hour) {
    const days = ["hours_mon", "hours_tue", "hours_wed", "hours_thu", "hours_fri", "hours_sat", "hours_sun"]
    return days.map((day, idx) => (
      <li key={idx}>{day.charAt(6).toUpperCase() + day.slice(7)}: {(hour[day]) ? hour[day] : '-'}</li>
    ))
  }
  render() {
    return (this.renderBusinessList())
  };
}

export default BusinessShow;