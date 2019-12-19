import React from 'react';
import { Link } from 'react-router-dom';

class BusinessShort extends React.Component {
  render() {
    const { business } = this.props;
    let rating = '-';
    if (business.rating.rating_avg !== '-') {
      rating = `${business.rating.rating_avg} by ${business.rating.rating_counts} user`;
      if (business.rating.rating_counts > 1) {
        rating = rating + 's';
      }
    }
    return(
      <li>
        <ul className='business-short-detail'>
          <li>Name:<Link to={`/business/${business.id}`} > {business.name}</Link></li>
          <li>Description: {business.description}</li>
          <li>Phone: {business.phone}</li>
          <li>Rating: {rating}</li>
          <li>{business.commentIds.length} {(business.commentIds.length > 1) ? 'reviews' : 'review'}</li>
        </ul>
      </li>
    )
  };
}

export default BusinessShort;