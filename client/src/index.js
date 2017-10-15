import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import Perf from 'react-addons-perf';

import App from './components/App';

Perf.start();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root')
);
setTimeout(() => {
    Perf.stop();
    Perf.printWasted();
}, 2000);