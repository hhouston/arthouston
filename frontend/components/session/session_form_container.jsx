import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login, logout, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
    loggedIn: session.currentUser ? true : false,
    errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    receiveErrors: () => dispatch(receiveErrors([]))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
