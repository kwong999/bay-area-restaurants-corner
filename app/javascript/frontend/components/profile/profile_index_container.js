import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import ProfileTab from './profile_tab';

const mapStateToProps = (state, { match }) => ({
  currentUser: state.entities.users[match.params.userId],
  type: 'index',
  ui: state.ui
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (id, args) => dispatch(fetchUser(id, args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileTab);