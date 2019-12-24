import { connect } from 'react-redux';
import ProfileShow from './profile_show';
import { fetchUser, userAccessDeniedRedirected } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.entities.users[ownProps.match.params.userId],
    errors: state.errors.access
})};

const mapDispatchToProps = dispatch => ({
  fetchUser: (id, args) => dispatch(fetchUser(id, args)),
  userAccessDeniedRedirected: () => dispatch(userAccessDeniedRedirected())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileShow);