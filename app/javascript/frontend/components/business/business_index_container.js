import { connect } from 'react-redux';
import BusinessIndex from './business_index';

const mapStateToProps = ({ entities }) => ({
  businesses: entities.businesses
});

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);