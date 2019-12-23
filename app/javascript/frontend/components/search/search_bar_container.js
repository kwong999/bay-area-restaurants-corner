import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchSearchResult, fetchSearchReset } from '../../actions/search_actions'

const mapStateToProps = state => ({
  search: state.entities.search
});

const mapDispatchToProps = dispatch => ({
  fetchSearchResult: search => dispatch(fetchSearchResult(search)),
  fetchSearchReset: search => dispatch(fetchSearchReset(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);