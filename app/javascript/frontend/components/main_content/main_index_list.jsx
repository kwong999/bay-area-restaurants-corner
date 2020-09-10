import React from 'react';
import BusinessShort from '../business/business_short';

class MainIndexList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { businesses } = this.props;
    
    // return null if businesses is undefine
    if (typeof businesses === "undefined") return null;

    // transform businesses to array format
    const businessList = Object.keys(businesses)
      .filter(key => key != "count")
      .map(key => businesses[key]);

    // return null if the list is empty
    if (businessList.length === 0) return null;

    // return list
    return (
      <ul className='business-list'>
        {businessList.map((business) =>
          <BusinessShort business={business} key={business.id} />
        )}
      </ul>
    )
  }
}

export default MainIndexList;