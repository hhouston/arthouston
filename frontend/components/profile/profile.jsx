import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {withRouter} from 'react-router';
import PlacesAutocomplete from 'react-places-autocomplete';
import {createProfile} from '../../actions/session_actions';
import Modal from 'react-bootstrap/lib/Modal';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            address: '',
            billing_zip: '',
            showProfileModal: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.openProfileModal = this.openProfileModal.bind(this);
        this.closeProfileModal = this.closeProfileModal.bind(this);
        this.updateAddress = (address) => this.setState({address});
    }

    onToken(token) {
        console.log(token);
        token.amount = 500;
        fetch('charges', {
            method: 'POST',
            body: JSON.stringify(token),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With'
            }
        }).then(innerToken => {
            alert(`Purchase complete, we will email you a receipt shortly!`);
        });
    }

    closeProfileModal() {
        this.setState({showProfileModal: false});
    }

    openProfileModal() {
      this.props.receiveErrors(null);
      this.setState({ showProfileModal: true });
    }

    handleSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            address: this.state.address,
            billing_zip: this.state.billing_zip,
            admin: false
        };

        this.props.login(user).then(data => {});
    }

    update(property) {
        return e => this.setState({[property]: e.target.value});
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

        const purchaseButton = <button className="purchase-btn" onClick={this.openProfileModal}>Purchase</button>;

        let profileModal;
        if (this.state.showProfileModal === true) {
            profileModal = <Modal className="modal" show={this.state.showProfileModal} onHide={this.closeProfileModal}>
                <form className="create-form-box">
                    <div className="profile-container">
                        {this.renderErrors()}
                        <br/>
                        <h2>Create Profile</h2>
                        <div className="email-form">
                            <input type="text" value={this.state.email} placeholder="email" onChange={this.update('email')}/>
                        </div>

                        <div className="name-form">
                            <input type="text" value={this.state.first_name} placeholder="first name" onChange={this.update('first_name')}/>

                            <input type="text" value={this.state.last_name} placeholder="last name" onChange={this.update('last_name')}/>
                        </div>

                        <div className="address-form">
                              <PlacesAutocomplete value={this.state.address} onChange={this.updateAddress}/>
                              <input type="text" value={this.state.billing_zip} placeholder="zip-code" onChange={this.update('billing_zip')}/>
                        </div>

                        <StripeCheckout token={this.onToken} name="Katherine Houston Art" description="Blue Trey" image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" ComponentClass="div" panelLabel="Give Money" amount={1000} currency="USD" stripeKey="pk_test_dbdeGQDD17bcEdpzDqIVDfEJ" email="house_toncoogs@yahoo.com"/>
                    </div>
                </form>
            </Modal>;
        }

        return (
            <div>
                {purchaseButton}
                {profileModal}
            </div>
        );
    }
}

export default Profile;
