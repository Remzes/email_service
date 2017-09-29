import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions';
import {connect} from 'react-redux';

class Payments extends Component {
    render(){

        return (
            <StripeCheckout
                name="Email Service"
                description="$5 for 5 email credits"
                className="stripe_checkout"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn deep-purple lighten-2">
                    Add Credits
                </button>
            </StripeCheckout>
        )
    }
};

export default connect(null, actions)(Payments);
