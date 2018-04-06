import React,{ Component } from 'react';
import StripeComponent from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

class Payments extends Component {
    render() {
        return (
            // pass in the amount in cents
            //callback function named token
            //and the stripeKey
            <StripeComponent
                name="Feedback-Agg"
                description="$5 for 5 survey credits"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >

                <button className="btn">Add Credits</button>
            </StripeComponent>
        );
    }
}

export default connect(null, actions)(Payments);