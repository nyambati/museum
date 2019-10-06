import {
	LOGIN_SUCCESS,
	FETCH_CHARTS_SUCCESS,
	FETCH_CHARTS_ERROR,
	CHANGE_VIEW_ICON,
	CHANGE_CHART_VIEW,
	FETCH_CHARTS_BY_VERSION_SUCCESS,
	FETCH_CHARTS_BY_VERSION_ERROR
} from './types';

export const initialState = {
	user: {},
	charts: [],
	errors: {},
	chart: {
		versions: []
	},
	listView: false,
	viewIcon: 'grid_on'
};

export function errors(state = initialState.errors, action) {
	switch (action.type) {
		case FETCH_CHARTS_ERROR:
			return { ...state, charts: action.payload };
		case FETCH_CHARTS_BY_VERSION_ERROR:
			return { ...state, chart: action.payload };
		default:
			return state;
	}
}

export function user(state = initialState.charts, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}

export function charts(state = initialState.charts, action) {
	switch (action.type) {
		case FETCH_CHARTS_SUCCESS:
			return [ ...action.payload ];
		default:
			return state;
	}
}

export function listView(state = initialState.listView, action) {
	switch (action.type) {
		case CHANGE_CHART_VIEW:
			return !state;
		default:
			return state;
	}
}

export function viewIcon(state = initialState.viewIcon, action) {
	switch (action.type) {
		case CHANGE_VIEW_ICON:
			console.log('Change', state);
			return state == 'list_vew' ? 'grid_on' : 'list_view';
		default:
			return state;
	}
}

export function chart(state = initialState.chart, action) {
	switch (action.type) {
		case FETCH_CHARTS_BY_VERSION_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}
