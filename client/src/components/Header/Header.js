import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Payments from '../Payments';
import $ from 'jquery';
import 'materialize-css/dist/js/materialize.min';

class Header extends Component {
    renderLandingPageHeaderContent() {
        return [
            <li key="1"><a href="#">Home</a></li>,
            <li key="2"><a href="#">Features</a></li>,
            <li key="3"><a href="#">Pricing</a></li>,
            <li key="4"><a href="#">Reviews</a></li>,
            <li key="5"><a href="#">Contact</a></li>
        ];
    };

    renderAppPageHeaderContent() {
        //To prevent error
        if (this.props.auth) {
            return [
                <li key="1"><Payments/></li>,
                <li key="2" style={{margin: '0 10px'}}>
                    Credits: {this.props.auth.credits}
                </li>,
                <li key="3"><a href="/api/logout">Log out</a></li>
            ];
        } else {
            return <li><a href="/api/login">Login with google</a></li>
        }
    };

    componentDidMount() {
        $(".button-collapse").sideNav();
    };

    render() {
        console.log(window.location.pathname);
        return (
            <header className="container__header">
                <nav className="container__header__navigation">
                    <div className="nav-wrapper blue">
                        <Link
                            to='/'
                            onClick={() => {
                                this.props.history.push('/')
                            }}
                            className="brand-logo left container__header__navigation__logo" style={{margin: '0 10px'}}>
                            <span>Email Service</span>
                        </Link>
                        <a href="#" data-activates="mobile-demo" className="button-collapse right">
                            <i className="material-icons">menu</i>
                        </a>
                        {/*Render main menu*/}
                        <ul className="right hide-on-med-and-down container__header_navigation__links--list_comp">
                            {
                                (window.location.pathname === "/")
                                    ? this.renderLandingPageHeaderContent()
                                    : this.renderAppPageHeaderContent()
                            }
                        </ul>

                        {/*{Render sidenav menu}*/}
                        <ul className="side-nav container__header__navigation__links_list--mobile" id="mobile-demo">
                            {
                                (window.location.pathname === "/")
                                    ? this.renderLandingPageHeaderContent()
                                    : this.renderAppPageHeaderContent()
                            }
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

export default withRouter(connect(mapStateToProps)(Header));