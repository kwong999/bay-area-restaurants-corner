import React from 'react';

class BusinessLong extends React.Component {
  render() {
    const { business } = this.props;
    const address = (business.address.address_first) ? `
        ${business.address.address_first} ${business.address.address_second},
        ${business.address.street},
        ${business.address.city}, 
        ${business.address.state} ${business.address.zip}` : 'Not Provided';
    let rating = '-';
    if (business.rating.rating_avg !== '-') {
      rating = `${parseFloat(business.rating.rating_avg).toFixed(2)} by ${business.rating.rating_counts} user`;
      if (business.rating.rating_counts > 1) {
        rating = rating + 's';
      }
    }
    return (
      <ul className='business-long-detail'>
        <li>Rating: {rating}</li>
        <li>Description: {business.description}</li>
        <li>Phone: {business.phone}</li>
        <li>Address: {address}</li>
      </ul>
    )
  };
}

export default BusinessLong;