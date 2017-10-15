import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise-middleware'

const middleware = applyMiddleware(promise(), reduxThunk);
const store = createStore(reducers, {}, middleware);

//Just have access to the store from the window - temporary declaration
window.store = store;
// ------

export default store;