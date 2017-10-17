import {loadAllImages} from "../fixures/index";
import axios from 'axios';
import {FETCH_USER, FETCH_CONFIG, SELECT_CONFIG, FETCH_SURVEYS} from './types';

//Authenticate user to the system and get his info
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
};

//AC to interact with Stripe API - adding credits
export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe/', token);
    dispatch({type: FETCH_USER, payload: res.data});
};

//Submit survey to the system
export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({type: FETCH_USER, payload: res.data});
};

//Get surveys from the system
export const fetchSurveys = () => dispatch => {
    const request = axios.get('/api/surveys');
    dispatch({type: FETCH_SURVEYS, payload: request.then(result => result.data)})
};


//Load slider configs to the system
export const loadConfigs = () => dispatch => {
    dispatch({type: FETCH_CONFIG, payload: loadAllImages()});
};

//Select config for the slider
export const selectConfig = (id) => dispatch => {
    dispatch({type: SELECT_CONFIG, payload: id})
};

