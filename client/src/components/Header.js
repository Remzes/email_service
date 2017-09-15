import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        console.log("auth", this.props.auth);
        switch (this.props.auth) {
            case null:
                return;

            case false:
                return (
                    <li><a href="/auth/google">Login with google</a></li>
                );

            default:
                return [
                    <li key="1"><Payments/></li>,
                    <li key="2" style={{margin: '0 10px'}}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="3"><a href="/api/logout">Log out</a></li>
                ];

        }
    }

    render() {
        console.log(this.props);
        return (
            <header>
                <nav>
                    <div className="nav-wrapper blue-grey">
                        <Link
                            to={
                                this.props.auth ? '/surveys' : '/'
                            }
                            className="brand-logo" style={{margin: '0 10px'}}>
                            Email Service
                        </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.renderContent()}
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

function mapStateToProps({auth}) {
    return {
        auth
    };
}

export default connect(mapStateToProps)(Header);