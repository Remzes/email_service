//Survey Form - form to input fields
import _ from 'lodash';

import React, {Component} from 'react';
import {reduxForm, Field, reset} from 'redux-form';
import SurveyField from '../../assets/SurveyField';
import {Link} from 'react-router-dom';
import validateEmails from '../../../../utils/validateEmails';
import formFields from '../../assets/FormFieldsInfo';

class SurveyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTouched: false
        }
    }

    renderFields() {
        return (
            _.map(formFields, ({label, name}) => {
                return <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
            })
        );
    };

    render() {
        return (
            <div className="form_section__container">
                <h3 className="form_section__container__header">Field a Form to Create a New Survey</h3>
                <form className="form_section__container__form"
                      onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <section className="form_section__container__form__buttons">
                        <section className="form_section__container__form__buttons--left">
                            <Link to="/surveys" className="red btn-flat white-text">
                                Cancel
                            </Link>
                            <button className="btn reset_btn" onClick={() => this.props.reset()} disabled={this.props.pristine}>
                                Clear Fields
                            </button>
                        </section>
                        <section className="form_section__container__form__buttons--right">
                            <button type="submit" className="teal btn-flat right white-text">
                                Submit
                                <i className="material-icons right">done</i>
                            </button>
                        </section>
                    </section>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({name}) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);