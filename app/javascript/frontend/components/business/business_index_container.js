import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses } from '../../actions/business_actions'

const mapStateToProps = ({ entities, ui }) => ({
  businesses: entities.businesses,
  search: entities.search,
  ui
});

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: search => dispatch(fetchBusinesses(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);