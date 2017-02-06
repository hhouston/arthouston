import { connect } from 'react-redux';
import { signup, login, logout, receiveErrors } from '../../actions/session_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  receiveErrors: () => dispatch(receiveErrors([])),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
