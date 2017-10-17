//SurveyField.js - one input component
import React, {Component} from 'react';

const SurveyField = ({input, label, meta}) => {
    const id = `${input.name}__error`;
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
        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom: '5px'}}/>
            <div className="red-text" id={id} style={{marginBottom: '20px'}}>
                {
                    toggleError(meta.touched, meta.error)
                }
            </div>
        </div>
    );
};

export default SurveyField;