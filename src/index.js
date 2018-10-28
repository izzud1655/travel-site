import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './container/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots } from './reducer';
import 'tachyons';

const store = createStore(searchRobots)

ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();
