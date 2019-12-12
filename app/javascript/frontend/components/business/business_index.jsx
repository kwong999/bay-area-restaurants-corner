import React from 'react';
import { Link } from 'react-router-dom';

class BusinessIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBusinesses();
  }

  renderBusinessList() {
    const businessList = Object.keys(this.props.businesses).map( key => this.props.businesses[key]);
    if (businessList) {
      return businessList.map( (business, idx) => (
        <li key={`business-${business.id}`}>
          <ul className='business-short-detail'>
            <li>Name:<Link to={`/business/${business.id}`} > {business.name}</Link></li>
            <li>Description: {business.description}</li>
            <li>Phone: {business.phone}</li>
            <li>{business.commentIds.length} {(business.commentIds.length > 1) ? 'reviews' : 'review'}</li>
          </ul>
        </li>
      ))
    }
  }
  render() {
    if (this.props.ui.loadingBusiness) return null;
    return(
      <div className='business-index'>
        <h3>Restaurants you might interested in.</h3>
        <ul>
          {this.renderBusinessList()}
        </ul>
      </div>
    )
  };
}

export default BusinessIndex;