import React, {Component} from 'react';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import fusioncharts from 'fusioncharts';
import _ from 'lodash';
import * as moment from 'moment';

charts(fusioncharts);

class SurveyList extends Component {

    renderChart(survey) {
        const DATA_SOURCE = {
            chart: {
                caption: survey.title,
                subcaption: "Statistics on the survey",
                startingangle: "100",
                showlabels: "1",
                showlegend: "1",
                enablemultislicing: "0",
                slicingdistance: "15",
                showpercentvalues: "1",
                plottooltext: `$datavalue user(s) answered '$label'`,
                theme: "carbon"
            },
            data: [
                {
                    label: "Yes",
                    value: `${survey.yes}`
                },
                {
                    label: "No",
                    value: `${survey.no}`
                }
            ]
        };
        return {
            id: `survey_statistics_chart_${survey._id}`,
            type: "pie3d",
            width: '100%',
            height: 400,
            className: "survey_chart",
            dataFormat: "json",
            dataSource: DATA_SOURCE
        };
    }

    renderSurveys() {
        const {surveys} = this.props;
        return _.chain(surveys)
            .sortBy(["dateSent", "yes", "no"])
            .reverse()
            .map(survey => {
                return (
                    <section className="dashboard__container__survey-list__survey" key={survey._id}>
                        <section className="dashboard__container__survey-list__survey__container">
                            {
                                (survey.yes || survey.no)
                                    ?
                                    <ReactFC {...this.renderChart(survey)}/>
                                    :
                                    <section className="dashboard__container__survey-list__survey__container__no-answer">
                                        <section className="dashboard__container__survey-list__survey__container__title">
                                            <span>{survey.title}</span>
                                            <span>Nobody has answered this survey yet!</span>
                                        </section>
                                    </section>
                            }
                            <h3>Survey Details</h3>
                            <ul className="dashboard__container__survey-list__survey__container__body">
                                <li>
                                    Survey subject <br/>
                                    <span className="bold-text">{survey.subject}</span>
                                </li>
                                <li>
                                    Survey body <br/>
                                    <span className="bold-text">{survey.body}</span>
                                </li>
                                <li>
                                    Total Votes <br/>
                                    <span className="bold-text">{(survey.yes || survey.no) ? survey.yes + survey.no : "Attention! Nobody has answered"}</span>
                                </li>
                                <li>
                                    The ratio of 'Yes' to 'No' <br/>
                                    <span className="bold-text">{(survey.yes || survey.no) ? (survey.yes / survey.no).toPrecision(5) : "Attention! Nobody has answered"}</span>
                                </li>
                                <li>
                                    The ratio of 'No' to 'Yes' <br/>
                                    <span className="bold-text">{(survey.yes || survey.no) ? (survey.no / survey.yes).toPrecision(5) : "Attention! Nobody has answered"}</span>
                                </li>
                                <li>
                                    Last Responded <br/>
                                    <span className="bold-text">
                                        {
                                            (survey.lastResponded) ? moment(survey.lastResponded).format("dddd, MMMM Do YYYY, h:mm:ss a") : "Attention! Nobody has answered"
                                        }
                                    </span>
                                </li>
                            </ul>
                            <p className="right">
                                Sent On: {moment(survey.dateSent).format("dddd, MMMM Do YYYY")}
                            </p>
                        </section>
                    </section>
                )
            })
            .value();
    }

    render() {
        return (
            <div className="dashboard__container__survey-list">{this.renderSurveys()}</div>
        );
    }
}

export default (SurveyList);