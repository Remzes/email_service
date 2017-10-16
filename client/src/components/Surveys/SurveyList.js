import React, {Component} from 'react';
import {connect} from 'react-redux';

class SurveyList extends Component {
    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <section className="dashboard__container__survey-list__survey" key={survey._id}>
                    <section className="dashboard__container__survey-list__survey__container">
                        <span className="dashboard__container__survey-list__survey__container__title">{survey.title}</span>
                        <p>
                            Survey body: <span className="bold-text">{survey.body}</span>
                        </p>
                        <p>
                            Statistics:
                        </p>
                        <p>
                            Yes: {survey.yes}
                        </p>
                        <p>
                            No: {survey.no}
                        </p>
                        <p className="right">
                            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </section>
                </section>
            );
        });
    }

    render(){
        return (
          <div className="dashboard__container__survey-list">{this.renderSurveys()}</div>
        );
    }
}

export default (SurveyList);