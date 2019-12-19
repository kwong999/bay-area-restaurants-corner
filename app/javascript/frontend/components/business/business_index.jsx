import React from 'react';
import BusinessShort from './business_short';

class BusinessIndex extends React.Component {
  componentDidMount() {
    if (this.props.search) {
      this.props.fetchBusinesses({ search: this.props.search});
    } else {
      this.props.fetchBusinesses();
    }
  }

  renderBusinessList() {
    const businessList = Object.keys(this.props.businesses)
      .filter(key => key != 'count')
      .map( key => this.props.businesses[key]);
    if (Object.keys(this.props.businesses).length > 0) {
      return businessList.map( (business) => 
        <BusinessShort business={business} key={business.id}/>
      )
    } else {
      return null;
    }
  }
  
  render() {
    if (this.props.ui.loadingBusiness) return null;
    return(
      <div className='business'>
        <h3>Restaurants you might interested in:</h3>
        <ul className='business-list'>
          {this.renderBusinessList()}
        </ul>
      </div>
    )
  };
}

export default BusinessIndex;