import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { LOGIN_SUCCESS, FETCH_CHARTS_SUCCESS } from './types';

const initialState = {
	user: {},
	charts: [],
	errors: {}
};

const logger = createLogger();

function errors(state = initialState.errors, action) {
	return state;
}

function user(state = initialState.user, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				user: action.payload
			};
		default:
			return state;
	}
}

function charts(state = initialState.charts, action) {
	switch (action.type) {
		case FETCH_CHARTS_SUCCESS:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
}

const reducers = combineReducers({ user, charts, errors });

const store = createStore(reducers, initialState, compose(applyMiddleware(thunk), applyMiddleware(logger)));

export default store;
