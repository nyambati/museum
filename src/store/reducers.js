import { createReducer } from '@reduxjs/redux-toolkit';
import { token as getToken } from './charts';
import {
	removeAuthToken,
	setAuthToken,
	fetchChartsError,
	fetchChartByVersionError,
	userLoginSuccess,
	fetchChartsSuccess,
	changeChartView,
	changeViewIcon,
	fetchChartByVersionSuccess,
	uploadChartsSuccess
} from './actions';

export const state = {
	token: getToken() || '',
	user: {},
	charts: [],
	errors: {},
	upload: {},
	chart: {
		keywords: [],
		sources: [],
		maintainers: [],
		versions: []
	},
	listView: false,
	viewIcon: 'list_view'
};

export const token = createReducer(state.token, {
	[setAuthToken]: (_, action) => action.payload,
	[removeAuthToken]: () => ''
});

export const errors = createReducer(state.errors, {
	[fetchChartsError]: (state, action) => ({ ...state, charts: action.payload }),
	[fetchChartByVersionError]: (state, action) => ({ ...state, chart: action.payload })
});

export const user = createReducer(state.user, {
	[userLoginSuccess]: (state, action) => ({ ...state, ...action.payload })
});

export const charts = createReducer(state.charts, {
	[fetchChartsSuccess]: (_, action) => [ ...action.payload ]
});

export const listView = createReducer(state.listView, {
	[changeChartView]: (state) => !state
});

export const viewIcon = createReducer(state.viewIcon, {
	[changeViewIcon]: (state) => {
		if (state == 'grid_on') return 'list_view';
		if (state == 'list_view') return 'grid_on';
	}
});

export const chart = createReducer(state.chart, {
	[fetchChartByVersionSuccess]: (state, action) => ({ ...state, ...action.payload })
});

export const upload = createReducer(state.upload, {
	[uploadChartsSuccess]: (_, action) => ({ sucess: true, ...action.payload })
});
