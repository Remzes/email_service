import {FETCH_CONFIG_PENDING, FETCH_CONFIG_REJECTED, FETCH_CONFIG_FULFILLED} from '../actions/types';

const initialState = {
    fetching: false,
    fetched: false,
    data: [],
    error: null
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case FETCH_CONFIG_PENDING:
            return {...state, fetching: true};
            break;
        case FETCH_CONFIG_REJECTED:
            return {...state, fetching: false, error: payload};
            break;
        case FETCH_CONFIG_FULFILLED:
            return {...state, fetching: false, fetched: true, data: payload};
            break;
    }
    return state;
}