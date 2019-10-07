import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import * as reducers from './reducers';

const middlewares = [ thunk ];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(createLogger());
}

export default createStore(combineReducers(reducers), reducers.initialState, compose(applyMiddleware(...middlewares)));
