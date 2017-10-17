import React, {Component} from 'react';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import fusioncharts from 'fusioncharts';
import _ from 'lodash';

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
            .sortBy(["yes", "no", "dateSent"])
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
                            <section className="dashboard__container__survey-list__survey__container__body">
                                <p>
                                    Survey body: <span className="bold-text">{survey.body}</span>
                                </p>
                                <p className="right">
                                    Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                                </p>
                            </section>
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