import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import formFields from '../../assets/FormFieldsInfo';
import {withRouter} from 'react-router-dom';
import * as actions from '../../../../actions/index';

//Survey Form Review Component
const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {

    //Review Fields
    const reviewFields = _.map(formFields, ({name, label}) => {
        return (
            <section key={name} className="form_section--form-review__container__fields__field">
                <label>{label}</label>
                <p>{formValues[name]}</p>
            </section>
        );
    });

    return (
        <section className="form_section--form-review__container">
            <h5 className="form_section--form-review__container__header">
                Please, confirm your entries
            </h5>
            <section className="form_section--form-review--inner">
                <section className="form_section--form-review__container__fields">
                    {reviewFields}
                </section>
                <section className="form_section--form-review__container__buttons">
                    <button
                        className="yellow darken-3 white-text btn-flat"
                        onClick={onCancel}
                    >
                        Back
                    </button>
                    <button
                        onClick={() => submitSurvey(formValues, history)}
                        className="green btn-flat right white-text">
                        Send Survey
                        <i className="material-icons right">email</i>
                    </button>
                </section>
            </section>
        </section>
    )
};

//Redux store data
function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));