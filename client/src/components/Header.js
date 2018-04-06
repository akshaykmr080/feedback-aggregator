import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

    

    render() {
        
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to = {this.props.auth ? '/surveys' : '/'} 
                        className="left brand-logo">
                    
                        Feedback-Agg
                    
                    </Link>
                    
                    <ul className="right hide-on-med-and-down">

                        {this.renderContent()}

                    </ul>
                </div>
            </nav>
        )
    }

    renderContent() {
        switch(this.props.auth){
            case null:
                return 
            case false:
                return <li><a href="/auth/google"> Login with Google </a></li>
            default:
                return [
                <li key="1"><Payments /></li>,
                <li key="3" style={{margin: '0 10px'}}>
                    Credits: {this.props.auth.credits}
                </li>,
                <li key="2"><a href="/auth/logout">Logout</a></li>
            ]

        }
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Header);