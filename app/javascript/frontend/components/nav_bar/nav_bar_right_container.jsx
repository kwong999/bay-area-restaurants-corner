import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import NavBarRight from './nav_bar_right';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarRight);