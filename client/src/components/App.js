import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import "../assets/Styles/App.css";

import Header from './Header/Header';
import Landing from './Landing/index';
import Dashboard from './Dashboard/Dashboard';
import SurveyNew from './Surveys/SurveyNew';
import Footer from './Footer/Footer';
import {Scrollbars} from 'react-custom-scrollbars';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
        this.props.loadConfigs();
    }

    render() {
        return (
            <Scrollbars
                ref="scrollbars"
                className="scroll-content"
                id="scroll-content"
            >
                <div className="container" id="container">
                    <BrowserRouter>
                        <div className="content" id="content">
                            <Header />
                            <Route exact path="/" component={Landing}/>
                            <Route exact path="/surveys" component={Dashboard}/>
                            <Route path="/surveys/new" component={SurveyNew}/>
                            <Footer />
                        </div>
                    </BrowserRouter>
                </div>
            </Scrollbars>
        );
    }
}

export default connect(null, actions)(App);