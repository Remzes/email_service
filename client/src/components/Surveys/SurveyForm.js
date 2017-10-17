//Survey Form - form to input fields
import _ from 'lodash';

import React, {Component} from 'react';
import {reduxForm, Field, reset} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './assets/FormFieldsInfo';

class SurveyForm extends Component {
    constructor(props){
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
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button className="btn" onClick={() => this.props.reset()} disabled={this.props.pristine}>
                        Clear Fields
                    </button>
                    <button type="submit" className="teal btn-flat right white-text">
                        Submit
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({name}) => {
        if (!values[name]){
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