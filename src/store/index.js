import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { initialState, errors, charts, user, listView, viewIcon, chart } from './reducers';

const logger = createLogger();

const rootReducer = combineReducers({ errors, charts, user, viewIcon, listView, chart });

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), applyMiddleware(logger)));

export default store;
