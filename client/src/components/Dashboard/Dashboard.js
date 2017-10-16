import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {fetchSurveys} from '../../actions';
import SurveyList from '../Surveys/SurveyList';

class Dashboard extends Component {
    componentDidMount(){
        this.props.fetchSurveys();
    }


    render() {
        let {fullName} = this.props.auth;
        let {surveys} = this.props;
        return (
            <section className="dashboard">
                <main className="dashboard__container">
                    <section className="dashboard__container__header">
                        <h4>Welcome to Email Service application, <span className="bold-text">{fullName}</span></h4>
                        <h6>
                            {
                                (surveys)
                                    ? `You have ${surveys.length} surveys. Click 'Add Survey' button to create new one`
                                    : `You don't have surveys. Click 'Add Survey button to create new one`
                            }
                        </h6>
                        <div className="dashboard__container__header__button_div">
                            <Link to="/surveys/new"
                                  className="btn waves-effect red"
                            >
                                <i className="material-icons left">add</i>
                                Add New Survey
                            </Link>
                        </div>
                    </section>
                    <SurveyList surveys={surveys}/>

                </main>
            </section>
        )
    }
}


//envelop the whole component to prevent updates from being blocked by shouldComponentUpdate
export default compose(
    withRouter,
    connect(({auth, surveys}) => ({auth, surveys}), {fetchSurveys})
)(Dashboard);
