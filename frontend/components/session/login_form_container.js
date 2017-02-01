import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (user) => dispatch(login(user)),
    receiveErrors: () => dispatch(receiveErrors([]))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
