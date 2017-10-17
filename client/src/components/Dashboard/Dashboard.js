import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {fetchSurveys} from '../../actions';
import SurveyList from './SurveyList/SurveyList';
import Loader from '../Loader/Loader';

//Dashboard component
class Dashboard extends Component {
    componentWillMount(){
        this.props.fetchSurveys();
    }

    render() {
        //Render the whole component when surveys are fetched
        if (this.props.surveys.fetched){
            let {fullName} = this.props.auth;
            let surveys = this.props.surveys.data;
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

        return <Loader/>
    }
}

export default compose(
    withRouter,
    connect(({auth, surveys}) => ({auth, surveys}), {fetchSurveys})
)(Dashboard);
