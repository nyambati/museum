import { configureStore } from '@reduxjs/redux-toolkit';
import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import * as reducers from './reducers';

const middlewares = [ thunk ];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(createLogger());
}

export const history = createBrowserHistory();

export default configureStore({
	reducer: combineReducers(reducers),
	preloadedState: reducers.state,
	middleware: middlewares
});
