import 'babel-polyfill';
import axios from 'axios';
import {
	userLoginError,
	userLoginSuccess,
	fetchChartsSuccess,
	fetchChartsError,
	uploadChartsError,
	uploadChartsSuccess,
	fetchChartByVersionSuccess,
	fetchChartByVersionError,
	changeChartView,
	changeViewIcon,
	setAuthToken
} from './actions';

import { history } from './';

axios.defaults.baseURL = process.env.API_BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${token()}`;

export function token(token) {
	if (!token) {
		return localStorage.getItem('_access_token');
	}
	return localStorage.setItem('_access_token', token);
}

export async function logout() {
	try {
		await axios.get('api/auth/logout');
		localStorage.removeItem('_access_token');
	} catch (error) {
		throw error;
	}
}

export function login(email, password) {
	if (!email && !password) return;
	return (dispatch) => {
		return axios
			.post('api/auth/login', { email, password })
			.then(({ data }) => {
				token(data.token);
				axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
				dispatch(setAuthToken(data.token));
				dispatch(userLoginSuccess(data));
				history.push('/home');
			})
			.catch((error) => dispatch(userLoginError(error.message)));
	};
}

export const list = () => (dispatch) =>
	axios
		.get('api/charts')
		.then(({ data }) => {
			if (data.message) return dispatch(fetchChartsError(data.message));
			dispatch(fetchChartsSuccess(data));
		})
		.catch((error) => dispatch(fetchChartsError(error.message)));

export const upload = (data) => (dispatch) =>
	axios
		.post('/api/charts', data)
		.then(({ data }) => {
			dispatch(uploadChartsSuccess(data));
			list()(dispatch);
		})
		.catch((error) => uploadChartsError(error.message));

export const changeView = () => (dispatch) => {
	dispatch(changeChartView());
	dispatch(changeViewIcon());
};

export const fetchChartByVersion = (name, version) => (dispatch) =>
	axios
		.get(`api/charts/${name}?version=${version}`)
		.then(({ data }) => dispatch(fetchChartByVersionSuccess(data)))
		.catch((error) => dispatch(fetchChartByVersionError(error.message)));
