import {FETCH_USER} from '../actions/types';

//Reduced to return authenticated user
export default function (state = null, action) {
    switch(action.type) {
        case FETCH_USER:
            return action.payload || false;

        default:
            return state;
    }
}