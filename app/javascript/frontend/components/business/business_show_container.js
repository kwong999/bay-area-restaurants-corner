import { connect } from 'react-redux';
import BusinessShow from './business_show';

const mapStateToProps = ({ entities }, { match }) => {
  const businessId = parseInt(match.params.businessId);
  return {
    businessId: businessId,
    business: (!!entities.businesses[businessId]) ? entities.businesses[businessId] : false
  }
};

const mapDispatchToProps = dispatch => ({
  fetchBusiness: id => dispatch(fetchBusiness(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);