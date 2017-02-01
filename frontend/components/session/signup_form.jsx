import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-bootstrap/lib/Modal';
import LoginFormContainer from './login_form_container';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            showSignUpModal: false,
            first_name: "",
            last_name: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.openSignUpModal = this.openSignUpModal.bind(this);
        this.closeSignUpModal = this.closeSignUpModal.bind(this);
    }

    closeSignUpModal() {
        this.setState({showSignUpModal: false});
    }

    openSignUpModal() {
        this.props.receiveErrors(null);
        this.setState({showSignUpModal: true});
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveErrors(null);

        const user = this.state;
        this.props.signup({user});
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const signUpLink = <div onClick={this.openSignUpModal}>Sign Up</div>;

        let modal = <Modal className="modal" show={this.state.showSignUpModal} onHide={this.closeSignUpModal}>
              <form onSubmit={this.handleSubmit} className="login-form-box">
                  <div className="login-title">
                      <h2>Sign Up</h2>
                  </div>

                  {this.renderErrors()}
                  <div className="login-form row">
                      <span className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <label>
                              Email:
                              <input type="text" value={this.state.email} onChange={this.update("email")} className="login-input"/>
                          </label>
                      </span>
                      <span className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <label>
                              Password:
                              <input type="password" value={this.state.password} onChange={this.update("password")} className="login-input"/>
                          </label>
                      </span>
                      <span className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <label>
                              First Name:
                              <input type="text" value={this.state.first_name} onChange={this.update("first_name")} className="login-input"/>
                          </label>
                      </span>
                      <span className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <label>
                              Last Name:
                              <input type="password" value={this.state.last_name} onChange={this.update("last_name")} className="login-input"/>
                          </label>
                      </span>
                      <br/>
                    </div>

                      <input type="submit" value="Submit"/>
              </form>
            </Modal>;

        return (
          <div>
            {signUpLink}
            {modal}
          </div>

        );
    }
}

export default SessionForm;
