import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchSearchResult } from '../../actions/search_actions'

const mapStateToProps = state => ({
  search: state.entities.search
});

const mapDispatchToProps = dispatch => ({
  fetchSearchResult: search => dispatch(fetchSearchResult(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);