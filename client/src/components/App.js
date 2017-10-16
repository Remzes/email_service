import React, {Component} from 'react';
import {BrowserRouter, Route, applyRouterMiddleware, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import "../assets/Styles/App.css";
import ScrollToTop from './ScrollToTop';
import "babel-polyfill";

import Header from './Header/Header';
import Landing from './Landing/index';
import Dashboard from './Dashboard/Dashboard';
import SurveyNew from './Surveys/SurveyNew';
import Footer from './Footer/Footer';

class App extends Component {
    constructor(){
        super();
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.props.fetchUser();
        this.props.loadConfigs();
        setTimeout(() => {
            this.setState({loading: false});
        }, 1500);
    }

    render() {
        const {loading} = this.state;
        if (loading) {
            return null;
        }

        return (
            <BrowserRouter>
                <ScrollToTop>
                        <div className="container" id="container" ref="container">
                            <div className="content" id="content">
                                <Header />
                                <Route exact path="/" component={Landing}/>
                                <Route exact path="/surveys" component={Dashboard}/>
                                <Route path="/surveys/new" component={SurveyNew}/>
                                <Footer />
                            </div>
                        </div>
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}

export default connect(null, actions)(App);