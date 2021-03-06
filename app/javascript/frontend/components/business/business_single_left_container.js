import { connect } from 'react-redux';
import BusinessSingleLeft from './business_single_left';
import { fetchBusiness } from '../../actions/business_actions'
import { fetchUser } from '../../actions/user_actions';
import { stateUpdated } from '../../actions/update_actions';

const mapStateToProps = ({ entities, session, ui }, { businessId }) => {
  return {
    businessId: businessId,
    business: entities.businesses[businessId],
    comments: (Object.keys(entities.comments).length > 0) ? entities.comments : false,
    rates: entities.rates,
    votes: entities.votes,
    currentUserId: session.currentUserId,
    users: entities.users,
    ui
  }
};

const mapDispatchToProps = dispatch => ({
  fetchBusiness: (id, data) => dispatch(fetchBusiness(id, data)),
  fetchUser: id => dispatch(fetchUser(id)),
  stateUpdated: () => dispatch(stateUpdated())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessSingleLeft);