
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, browserHistory } from 'react-router';
var routes = require('./config/routes');
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './reducers'

let store = createStore(appReducer)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
)