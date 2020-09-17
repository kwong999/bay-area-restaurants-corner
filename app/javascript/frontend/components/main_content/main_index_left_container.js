import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions'
import MainIndexLeft from './main_index_left';

const mapStateToProps = ({ entities, ui }) => ({
  businesses: entities.businesses,
  search: entities.search,
  ui
});

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: data => dispatch(fetchBusinesses(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainIndexLeft);