import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import SurveyList from '../Surveys/SurveyList';

class Dashboard extends Component {
    render(){
        let fullName;
       (this.props.auth) ? {fullName} = this.props.auth : "";

        return (
            <main>
                <div>
                    <h4>Welcome to Email Service application, {fullName}</h4>
                    <h6>This is a great platform to send small surveys to any emails which you like</h6>
                </div>
                <SurveyList />
                <div className="button_div">
                    <Link to="/surveys/new"
                          className="btn btn-large waves-effect red"
                          >
                        <i className="material-icons left">add</i>
                        Add New Survey
                    </Link>
                </div>
            </main>
        )
    }
}


//envelop the whole component to prevent updates from being blocked by shouldComponentUpdate
export default compose(
    withRouter,
    connect(({auth}) => ({auth}))
)(Dashboard);
