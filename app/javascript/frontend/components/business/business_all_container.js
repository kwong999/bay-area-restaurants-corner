import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions'
import BusinessAll from './business_all';

const mapStateToProps = ({ entities, ui }) => ({
  businesses: entities.businesses,
  ui
});

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: data => dispatch(fetchBusinesses(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessAll);