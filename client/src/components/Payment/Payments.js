import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../../actions/index';
import {connect} from 'react-redux';

class Payments extends Component {
    render(){

        return (
            <StripeCheckout
                name="Email Service"
                description="$4.99 for 5 email credits"
                className="stripe_checkout"
                amount={499}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <a className="btn deep-purple lighten-2 add_credits">
                    <i className="material-icons left">attach_money</i>
                    Add Credits
                </a>
            </StripeCheckout>
        )
    }
};

export default connect(null, actions)(Payments);
