import { connect } from 'react-redux';
import ProfileShow from './profile_show';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, { match }) => ({
  currentUser: state.entities.users[match.params.userId]
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (id, args) => dispatch(fetchUser(id, args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileShow);