import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { initialState, errors, charts, user, listView, viewIcon, chart, upload } from './reducers';

const logger = createLogger();

const rootReducer = combineReducers({ errors, charts, user, viewIcon, listView, chart, upload });

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), applyMiddleware(logger)));

export default store;
