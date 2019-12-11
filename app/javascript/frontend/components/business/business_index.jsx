import React from 'react';
import { Link } from 'react-router-dom'

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
          </ul>
        </li>
      ))
    }
  }
  render() {
    console.log(this.props.businesses);
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