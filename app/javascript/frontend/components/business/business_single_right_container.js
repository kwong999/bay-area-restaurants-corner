import { connect } from 'react-redux';
import BusinessSingleRight from './business_single_right';

const mapStateToProps = ({ entities }, { businessId }) => {
  return {
    businessId: businessId,
    business: entities.businesses[businessId]
  }
};

export default connect(
  mapStateToProps,
  null
)(BusinessSingleRight);