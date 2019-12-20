import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness } from '../../actions/business_actions';

const mapStateToProps = ({ entities }, { match }) => {
  const businessId = parseInt(match.params.businessId);
  return {
    businessId: businessId
  }
};

const mapDispatchToProps = dispatch => ({
  fetchBusiness: (id, data) => dispatch(fetchBusiness(id, data))
});

export default connect(
  mapStateToProps,
  null
)(BusinessShow);