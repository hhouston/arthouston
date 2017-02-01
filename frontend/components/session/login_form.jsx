import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-bootstrap/lib/Modal';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            showLoginModal: false,
            first_name: "",
            last_name: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.openLoginModal = this.openLoginModal.bind(this);
        this.closeLoginModal = this.closeLoginModal.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    componentDidMount() {}

    componentDidUpdate() {
        // this.redirectIfLoggedIn();
    }

    demoLogin() {
        this.props.login({
            user: {
                email: "guest@email.com",
                password: "password"
            }
        });
    }

    closeLoginModal() {
        this.setState({showLoginModal: false});
    }

    openLoginModal() {
        this.props.receiveErrors(null);
        this.setState({showLoginModal: true});
    }

    redirectIfLoggedIn() {
        if (this.props.loggedIn) {
            this.props.router.push("/");
        }
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveErrors(null);

        const user = this.state;
        this.props.login({user});
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
        const loginLink = <a href="#" onClick={this.openLoginModal}>Login</a>;
        let modal;

        if (this.state.showLoginModal === true) {
            modal = <Modal className="modal" show={this.state.showLoginModal} onHide={this.closeLoginModal}>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-title">
                        <h2>Login</h2>
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
                        <br/>
                      </div>

                        <input type="submit" value="Submit"/>
                </form>
            </Modal>;
        }

        return (
            <div>
                {loginLink}

                {modal}
            </div>

        );
    }
}

export default SessionForm;
