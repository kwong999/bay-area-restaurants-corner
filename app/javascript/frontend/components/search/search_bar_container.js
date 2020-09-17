import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { receiveSearch } from '../../actions/search_actions'

const mapStateToProps = state => ({
  search: state.entities.search
});

const mapDispatchToProps = dispatch => ({
  receiveSearch: search => dispatch(receiveSearch(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);