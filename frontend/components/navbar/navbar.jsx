import React from 'react';
import {Link} from 'react-router';
import LoginFormContainer from '../session/login_form_container';
import SignUpFormContainer from '../session/signup_form_container';

const loggedOut = () => (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">
                    <p>ArtHouston</p>
                </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse">
                <form className="navbar-form navbar-left"></form>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <LoginFormContainer>Login</LoginFormContainer>
                    </li>
                    <li>
                        <SignUpFormContainer>Sign Up</SignUpFormContainer>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

const loggedIn = (currentUser, logout) => (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">
                    <p>ArtHouston</p>
                </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse">
                <form className="navbar-form navbar-left"></form>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="/#/cart">Cart</a>
                    </li>
                    <li>
                        <a href="#" onClick={logout}>Sign Out</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

const Navbar = ({currentUser, logout}) => {
    const navbar = currentUser? loggedIn(currentUser, logout) : loggedOut();
    return (
        <div>
            {navbar}
        </div>
    );
};

export default Navbar;
