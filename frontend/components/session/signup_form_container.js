import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { signup, login, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    receiveErrors: () => dispatch(receiveErrors([]))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
