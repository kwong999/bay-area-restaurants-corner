import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness } from '../../actions/business_actions'

const mapStateToProps = ({ entities, session, ui }, { match }) => {
  const businessId = parseInt(match.params.businessId);
  return {
    businessId: businessId,
    // business: (!!entities.businesses[businessId]) ? entities.businesses[businessId] : false,
    business: entities.businesses[businessId],
    comments: (Object.keys(entities.comments).length > 0) ? entities.comments : false,
    currentUserId: session.currentUserId,
    users: entities.users,
    ui
  }
};

const mapDispatchToProps = dispatch => ({
  fetchBusiness: id => dispatch(fetchBusiness(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);