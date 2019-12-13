import { connect } from 'react-redux';
import RateSelector from './rate_selector';
import { createRate, updateRate, destroyRate } from '../../actions/rate_actions'
import { fetchBusiness } from '../../actions/business_actions'
import { fetchUser } from '../../actions/user_actions';

const mapDispatchToProps = dispatch => ({
  createRate: rate => dispatch(createRate(rate)),
  updateRate: (rate, id) => dispatch(updateRate(rate, id)),
  destroyRate: id => dispatch(destroyRate(id)),
  fetchBusiness: id => dispatch(fetchBusiness(id)),
  fetchUser: id => dispatch(fetchUser(id))
})

export default connect(
  null,
  mapDispatchToProps
)(RateSelector);