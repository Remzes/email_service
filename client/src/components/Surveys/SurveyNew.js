//Review of the inputted form
import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview'

class SurveyNew extends Component {
    state = {
        showFormReview: false
    };

    renderContent(){
        return (this.state.showFormReview) ? <SurveyFormReview onCancel={() => this.setState({showFormReview: false})}/> : <SurveyForm onSurveySubmit={() => this.setState({showFormReview: true})}/>;
    }

    render(){
        return (
            <main>
                {this.renderContent()}
            </main>
        );
    }
}

export default reduxForm({
    form: 'reduxForm'
})(SurveyNew);