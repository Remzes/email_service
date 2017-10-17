import {FETCH_SURVEYS_PENDING, FETCH_SURVEYS_REJECTED, FETCH_SURVEYS_FULFILLED} from '../actions/types';

const initialState = {
    fetching: false,
    fetched: false,
    data: [],
    error: null
};

//Reducer to return surveys to the page
export default (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case FETCH_SURVEYS_PENDING:
            return {...state, fetching: true};
            break;
        case FETCH_SURVEYS_REJECTED:
            return {...state, fetching: false, error: payload};
            break;
        case FETCH_SURVEYS_FULFILLED:
            return {...state, fetching: false, fetched: true, data: payload};
            break;
    }
    return state;
}