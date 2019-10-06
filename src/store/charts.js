import 'babel-polyfill';
import axios from 'axios';
import {
	userLoginError,
	userLoginSuccess,
	fetchChartsSuccess,
	fetchChartsError,
	uploadChartsError,
	uploadChartsSuccess
} from './actions';

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
		const { data } = await axios.get('api/auth/logout');
		localStorage.removeItem('_access_token');
		return data;
	} catch (error) {
		console.log(error.message);
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
				dispatch(userLoginSuccess(data));
			})
			.catch((error) => dispatch(userLoginError(error.message)));
	};
}

export function list() {
	return (dispatch) => {
		return axios
			.get('api/charts')
			.then(({ data }) => dispatch(fetchChartsSuccess(data)))
			.catch((error) => dispatch(fetchChartsError(error.message)));
	};
}

export const upload = (data) => (dispatch) =>
	axios
		.post('/api/charts', data)
		.then(({ data }) => {
			list();
			dispatch(uploadChartsSuccess(data));
		})
		.catch((error) => uploadChartsError(error.message));

export function findByName() {
	return {};
}