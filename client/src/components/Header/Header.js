import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Payments from '../Payment/Payments';
import {compose} from 'recompose';
//jQuury to initialize materialize
import $ from 'jquery';
//Materialize CSS lib
import 'materialize-css/dist/js/materialize.min';
//Classnames lib
import classNames from 'classnames';
//Decorator
import appDesign from '../../decorators/scroll_resize_decorator';

//Header class component
class Header extends Component {

    //Render the header for landing page
    renderLandingPageHeaderContent() {

        return [
            <li key="1"><a href="" className="black-text">Home</a></li>,
            <li key="2"><a href="" className="black-text">Features</a></li>,
            <li key="3"><a href="" className="black-text">Gallery</a></li>,
            <li key="4"><a href="" className="black-text">Reviews</a></li>,
            <li key="5"><a href="" className="black-text">Contact</a></li>
        ];
    };

    //Render the header for app page
    renderAppPageHeaderContent() {
        //To prevent error
        if (this.props.auth) {
            return [
                <li key="1"><Payments/></li>,
                <li key="2">
                    <Link to="/surveys/new" className="btn red">
                        <i className="material-icons left add_new_survey_btn">add</i>
                        Add New Survey
                    </Link>
                </li>,
                <li key="3" style={{margin: '0 10px'}} className="credits">
                    Credits: {this.props.auth.credits}
                </li>,
                <li key="4"><a href="/api/logout" className="logout_btn">Log out</a></li>
            ];
        } else {
            return <li><a href="/api/login">Login with google</a></li>
        }
    };

    render() {

        //Activate side navigation
        $(".button-collapse").sideNav();

        let nav_class_object = classNames({
            "header__navigation": true,
            "is-scrolled": this.props.scroll > 1
        });
        let header_class_object = classNames({
            "header": true,
            "fixed_navbar": true
        });
        let brand_logo_class_object = classNames({
            "brand-logo": true,
            "left": true,
            "header__navigation__logo": true
        });

        let {pathname} = this.props.history.location;

        return (
            <header className={header_class_object} ref="app_header">
                <nav className={nav_class_object}>
                    <div className="nav-wrapper header__navigation--inner">
                        <Link
                            to='/'
                            className={brand_logo_class_object}>
                            <span className="header__navigation__logo__img"></span>
                            <span className="black-text">Email Service</span>
                        </Link>
                        <a href="#" data-activates="mobile-demo" className="button-collapse right">
                            <i className="material-icons">menu</i>
                        </a>
                        {/*Render main menu*/}
                        <ul className="right hide-on-med-and-down header_navigation__links--list_comp">
                            {
                                (pathname === "/")
                                    ? this.renderLandingPageHeaderContent()
                                    : this.renderAppPageHeaderContent()
                            }
                        </ul>

                        {/*{Render sidenav menu}*/}
                        <ul className="side-nav header__navigation__links_list--mobile" id="mobile-demo">
                            {
                                (pathname === "/")
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



const enhance = compose(
    withRouter,
    connect(({auth}) => ({auth})),
    appDesign
);

export default enhance(Header);
