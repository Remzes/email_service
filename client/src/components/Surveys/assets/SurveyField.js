//SurveyField.js - one input component
import React, {Component} from 'react';

//Survey Field component
const SurveyField = ({input, label, meta}) => {
    const id = `${input.name}__error`;
    //Function to fade in error
    const toggleError = (isTouched, isError) => {
        const el = document.getElementById(id);
        if (el !== null) {
            if (meta.touched && meta.error) {
                (el.classList.contains("fadeOut")) ? el.classList.remove("fadeOut") : "";
                el.classList.add("fadeIn");
            } else {
                el.classList.remove("fadeIn");
                el.classList.add("fadeOut");
            }
        }
        return isTouched && isError;
    };

    return (
        <section className="form_section__container__form__input-container">
            <label>{label}</label>
            <input {...input} className="form_section__container__form__container__input-container__input-field" />
            <div className="error_text" id={id} >
                {
                    toggleError(meta.touched, meta.error)
                }
            </div>
        </section>
    );
};

export default SurveyField;