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
            showSignUpModal: false,
            fname: "",
            lname: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.openLoginModal = this.openLoginModal.bind(this);
        this.closeLoginModal = this.closeLoginModal.bind(this);
        this.openSignUpModal = this.openSignUpModal.bind(this);
        this.closeSignUpModal = this.closeSignUpModal.bind(this);
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

        if (this.state.showSignUpModal === true) {
            this.setState({showSignUpModal: false});
        }

        this.setState({showLoginModal: true});
    }

    closeSignUpModal() {
        this.setState({showSignUpModal: false});
    }

    openSignUpModal() {
        this.props.receiveErrors(null);

        if (this.state.showLoginModal === true) {
            this.setState({showLoginModal: false});
        }

        this.setState({showSignUpModal: true});
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
        if (this.state.showLoginModal === true) {
            this.props.login({user});
        } else {
            this.props.signup({user});
        }
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
      let page;
      if (this.props.loggedIn) {
        page = <h2>LoggedIn</h2>;
      } else {
        page = <h1>Not LoggedIn</h1>;
      }
      debugger;
        return (
            <div style={{backgroundColor: 'red'}}>
              {page}
              profile page
            </div>
        );
    }
}

export default SessionForm;
