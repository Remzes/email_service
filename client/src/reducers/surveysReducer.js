import {FETCH_SURVEYS} from '../actions/types';

export default (state = [], action) => {
    const {type, payload} = action;
    switch(type){
        case FETCH_SURVEYS:
            return action.payload;
            break;
        default:
            return state;
    }
}